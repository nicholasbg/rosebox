import { style } from '../../index'
import { cdiv, cmulti, per, px } from '../shared'

test('minWidth: Length', () => {
  const received = style({
    minWidth: px(40),
  })
  const expected = {
    minWidth: '40px',
  }
  expect(received).toEqual(expected)
})

test('minWidth: WidthCalculation', () => {
  const received = style({
    minHeight: cmulti(cdiv(per(100), 7), 3),
  })
  const expected = {
    minHeight: 'calc(calc(100% / 7) * 3)',
  }
  expect(received).toEqual(expected)
})
