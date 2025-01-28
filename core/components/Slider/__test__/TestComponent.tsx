import React from 'react'
import Slider from '../SliderMain'

export default function TestComponent() {
  return (
    <Slider perPage={2} gap={10} startOffset={20}>
      <Slider.Content className="">
        <Slider.Item>Slide1</Slider.Item>
        <Slider.Item>Slide2</Slider.Item>
        <Slider.Item>Slide3</Slider.Item>
        <Slider.Item>Slide4</Slider.Item>
        <Slider.Item>Slide5</Slider.Item>
        <Slider.Item>Slide6</Slider.Item>
        <Slider.Item>Slide7</Slider.Item>
      </Slider.Content>
      <Slider.PrevButton className=""></Slider.PrevButton>
      <Slider.NextButton className=""></Slider.NextButton>
      <Slider.Pagination className="">
        {({ active, numbering }) => <div>{numbering}</div>}
      </Slider.Pagination>
    </Slider>
  )
}
