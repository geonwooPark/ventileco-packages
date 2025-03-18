#! /usr/bin/env node
import { execSync } from 'child_process'
import path from 'path'
import fs from 'fs'
import inquirer from 'inquirer'
import ora from 'ora'
import chalk from 'chalk'
import fsExtra from 'fs-extra'
const { removeSync, copySync } = fsExtra

const GIT_REPO = 'https://github.com/geonwooPark/ventileco-packages'

// 프로젝트 이름 입력 확인
if (process.argv.length < 3) {
  console.log(chalk.red.bold('[ERROR]: 프로젝트 이름을 입력해주세요.'))
  console.log(
    chalk.cyan('예시: ') +
      chalk.green('npx ventileco-boilerplate [project-name]'),
  )
  process.exit(1)
}

const projectName = process.argv[2]
const currentPath = process.cwd()
const isCurrentPathProject = projectName === '.'
const tempPath = path.join(currentPath, 'ventileco-temp')
const projectPath = isCurrentPathProject
  ? currentPath
  : path.join(currentPath, projectName)

// 프로젝트 폴더 생성
if (!isCurrentPathProject) {
  try {
    fs.mkdirSync(projectPath)
  } catch (err) {
    console.log(
      chalk.red.bold(`[ERROR]: ${projectName} 폴더가 이미 존재합니다.`),
    )
    process.exit(1)
  }
}

async function chooseTemplate() {
  console.log(chalk.blue.bold('\n📦 Ventileco Boilerplate Generator'))
  console.log(chalk.gray('---------------------------------------'))

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'template',
      message: chalk.cyan('어떤 템플릿을 사용하시겠습니까?'),
      choices: ['ts-webpack', 'react-webpack'],
      default: 'ts-webpack',
    },
  ])
  return answers.template
}

async function generator() {
  try {
    // 템플릿 선택
    const selectedTemplate = await chooseTemplate()
    console.log(
      chalk.cyan(`[INFO]: 선택된 템플릿 → ${chalk.yellow(selectedTemplate)}`),
    )

    // 다운로드 스피너 시작
    const downloadSpinner = ora(chalk.blue('Downloading template...')).start()

    // 임시 폴더에 git clone
    execSync(`git clone --filter=blob:none ${GIT_REPO} ${tempPath}`)
    downloadSpinner.succeed(chalk.green('Download completed!'))

    // sparse-checkout 설정
    const sparseSpinner = ora(chalk.blue('Applying sparse checkout...')).start()
    execSync(`cd ${tempPath} && git sparse-checkout init --no-cone`)
    execSync(
      `cd ${tempPath} && git sparse-checkout set packages/boilerplate/${selectedTemplate}`,
    )
    sparseSpinner.succeed(chalk.green('Sparse checkout applied!'))

    // 파일 복사
    const copySpinner = ora(chalk.blue('Copying files...')).start()
    copySync(
      `${tempPath}/packages/boilerplate/${selectedTemplate}`,
      projectPath,
    )
    removeSync(tempPath) // 임시 폴더 삭제
    copySpinner.succeed(chalk.green('Files copied successfully!'))

    // 현재 경로 이동
    if (!isCurrentPathProject) {
      process.chdir(projectPath)
    }

    // 의존성 설치
    const installSpinner = ora(chalk.blue('Installing dependencies...')).start()
    execSync('git init && pnpm install && pnpm exec husky install')
    installSpinner.succeed(chalk.green('Dependencies installed!'))

    // 완료 메시지
    console.log(
      chalk.green.bold(
        `\n🎉 ${selectedTemplate} 프로젝트가 성공적으로 생성되었습니다!\n`,
      ),
    )
    console.log(chalk.cyan(`👉 다음 명령어를 실행하세요:\n`))
    console.log(chalk.yellow(`   cd ${projectName}`))
    console.log(chalk.yellow('   pnpm run dev\n'))

    console.log(chalk.green('🚀 프로젝트를 즐겁게 개발하세요!\n'))
  } catch (error) {
    console.log(chalk.red.bold('\n[ERROR]: 오류가 발생했습니다!'))
    console.log(error)
  }
}

generator()
