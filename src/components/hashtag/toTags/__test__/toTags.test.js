import React from 'react'
import ToTags from '../toTags'
import { create } from 'react-test-renderer'

describe('ToTags Component', () => {
  const comp = str => <ToTags str={str} />

  it('should match snapshot with simple hashtag string', () => {
    const str = 'A very #good morning'
    const tree = create(comp(str)).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot with complex hashtag string', () => {
    const str = '#This is a ##double hashtag'
    const tree = create(comp(str)).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot with mention string', () => {
    const str = 'A very #good ##morning @ghalib, @zayn'
    const tree = create(comp(str)).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should match snapshot with link string', () => {
    const str =
      'Hey @ghalib, #checkout https://github.com/JamesRoss222/React-Custom_Instagram_SP-2.0'
    const tree = create(comp(str)).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
