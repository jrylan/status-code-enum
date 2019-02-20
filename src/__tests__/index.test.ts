import deepSortObject from 'deep-sort-object'
import { StatusCode } from '../index'

test('StatusCode', () => {
  expect(StatusCode).toMatchSnapshot()
  expect(JSON.stringify(deepSortObject(StatusCode), undefined, 2)).toEqual(
    JSON.stringify(StatusCode, undefined, 2)
  )
})
