import { flex, compose, width, per } from '../index'
import { height } from '../core/height'

test('compose', () => {
  const received = compose([flex(1), width(per(3)), height(per(40))])
  const expected = {
    flex: '1',
    width: '3%',
    height: '40%'
  }
  expect(received).toEqual(expected)
})
