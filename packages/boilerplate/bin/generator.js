#! /usr/bin/env node
const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')
const { removeSync, copySync } = require('fs-extra')
const inquirer = require('inquirer') // 사용자 입력을 받기 위해 inquirer 추가

const GIT_REPO = 'https://github.com/geonwooPark/ventileco-packages'

// project-name 미입력
if (process.argv.length < 3) {
  console.log('[ERROR]: Enter as in the example below')
  console.log('ex) npx create-ts-ventileco [project-name]')
  process.exit(1)
}

const projectName = process.argv[2]
const currentPath = process.cwd()
const isCurrentPathProject = projectName === '.'
const tempPath = path.join(currentPath, 'temp')
const projectPath = isCurrentPathProject
  ? currentPath
  : path.join(currentPath, projectName)

// project-name 입력시
if (!isCurrentPathProject) {
  try {
    fs.mkdirSync(projectPath)
  } catch (err) {
    if (err.code === 'EEXIST') {
      console.log(
        `[ERROR]: The file ${projectName} already exist in the current directory.`,
      )
    } else {
      console.log(error)
    }
    process.exit(1)
  }
}

async function chooseTemplate() {
  // createPromptModule을 사용해 prompt 생성
  const prompt = inquirer.createPromptModule()

  // 사용자가 선택할 수 있도록 inquirer로 물어봅니다.
  const answers = await prompt([
    {
      type: 'list',
      name: 'template',
      message: 'Which template would you like to use?',
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
    console.log(`[INFO]: You chose the ${selectedTemplate} template.`)

    // git clone
    console.log('[INFO]: Downloading create-ts-ventileco...')
    execSync(
      `git clone --filter=blob:none --no-checkout ${GIT_REPO} ${tempPath}`,
    )

    // sparse-checkout 활성화 및 선택한 템플릿만 체크아웃
    execSync('cd ' + tempPath + ' && git sparse-checkout init --cone')
    execSync(
      `cd ${tempPath} && git sparse-checkout set packages/boilerplate/${selectedTemplate}`,
    )

    // 임시 폴더에서 선택한 템플릿만 복사
    console.log('[INFO]: Copying files...')
    copySync(
      `${tempPath}/packages/boilerplate/${selectedTemplate}`,
      projectPath,
    )

    // 임시 폴더 삭제
    removeSync(tempPath)

    // 현재 경로 이동
    console.log('[INFO]: Moving into directory...')
    if (!isCurrentPathProject) {
      process.chdir(projectPath)
    }

    // 의존성 설치
    console.log('[INFO]: Installing dependencies...')
    execSync('git init && pnpm install && pnpm exec husky install')

    // SUCCESS !
    console.log('[SUCCESS]: Success to create-ts-ventileco. Available now !')
    console.log(`
      SSSSS  U   U  CCCC  CCCC  EEEEE  SSSSS  SSSSS
      S      U   U  C      C      E     S      S
      SSSSS  U   U  C      C      EEEE  SSSSS  SSSSS
         S   U   U  C      C      E         S     S
      SSSSS   UUU   CCCC  CCCC  EEEEE  SSSSS  SSSSS
    `)
  } catch (error) {
    console.log(error)
  }
}

generator()
