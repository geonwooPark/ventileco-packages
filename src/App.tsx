import { useForm } from 'react-hook-form'
import Input from './components/Input/Input'

function App() {
  const { register, handleSubmit } = useForm({
    defaultValues: { text: '' },
  })

  const onSubmit = (data: any) => console.log(data)

  const inputRegister = register('text', {
    required: '텍스트를 입력해주세요.',
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-[240px]">
        <Input
          type="text"
          placeholder="Enter text"
          register={inputRegister}
          className="h-[50px] rounded-md border px-2 text-black data-[disabled]:opacity-50"
        >
          <Input.Icon>
            <div className="mr-1 size-5 bg-gray-400" />
          </Input.Icon>
          <Input.InputArea />
        </Input>
      </div>
    </form>
  )
}

export default App
