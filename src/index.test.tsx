import React from 'react'
import renderer from 'react-test-renderer'

const DemoBox = ({ text }: { text: string }) => {
  return <div>{text}</div>
}

test('DemoBox loads', () => {
  const component = renderer.create(<DemoBox text='woot' />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
