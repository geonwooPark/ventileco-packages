import { useState } from 'react'
import ComboBox from './components/ComboBox/ComboBox'
import Tabs from './components/Tabs/Tabs'
import { list } from './constants/list'

function App() {
  const [value, setValue] = useState<string>()

  return (
    <div className="w-[240px]">
      <Tabs>
        <Tabs.List className="overflow-hidden rounded-t-md border bg-blue-100">
          <Tabs.ListItem index={0}>
            {({ selected }) => (
              <div
                className={`${selected && 'bg-active text-white'} w-full px-4 py-3 text-center transition duration-200 hover:opacity-50`}
              >
                Tab1
              </div>
            )}
          </Tabs.ListItem>
          <Tabs.ListItem index={1}>
            {({ selected }) => (
              <div
                className={`${selected && 'bg-active text-white'} w-full px-4 py-3 text-center transition duration-200 hover:opacity-50`}
              >
                Tab2
              </div>
            )}
          </Tabs.ListItem>
          <Tabs.ListItem index={2}>
            {({ selected }) => (
              <div
                className={`${selected && 'bg-active text-white'} w-full px-4 py-3 text-center transition duration-200 hover:opacity-50`}
              >
                Tab3
              </div>
            )}
          </Tabs.ListItem>
        </Tabs.List>
        <Tabs.View className="rounded-b-md border bg-gray-50">
          <Tabs.Content index={0}>
            <div className="px-4 py-3">안녕하세요. 컨텐츠1입니다.</div>
          </Tabs.Content>
          <Tabs.Content index={1}>
            <div className="px-4 py-3">안녕하세요. 컨텐츠2입니다.</div>
          </Tabs.Content>
          <Tabs.Content index={2}>
            <div className="px-4 py-3">안녕하세요. 컨텐츠3입니다.</div>
          </Tabs.Content>
        </Tabs.View>
      </Tabs>

      <ComboBox value={value} setValue={setValue} list={list}>
        <ComboBox.Label>ComboBox</ComboBox.Label>
        <ComboBox.Trigger>
          <button className="flex w-full items-center rounded-md border px-3 py-2">
            <ComboBox.Input placeholder="Fruits" />
            <div className="flex gap-2">
              <ComboBox.ClearButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </ComboBox.ClearButton>
              <ComboBox.ArrowButton>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </ComboBox.ArrowButton>
            </div>
          </button>
        </ComboBox.Trigger>

        <ComboBox.List>
          {({ optionList }) =>
            optionList.map((item) => (
              <ComboBox.Item key={item.value} item={item}>
                <button className={`w-full px-3 py-2`}>{item.label}</button>
              </ComboBox.Item>
            ))
          }
        </ComboBox.List>
      </ComboBox>
    </div>
  )
}

export default App
