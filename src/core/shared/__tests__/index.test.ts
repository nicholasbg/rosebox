import { deg, serializeAngle, grad, rad, turn } from '../'
import { eq } from '../types/math'
import { serializeDuration } from '../'
import { toNum } from '../../../utils'
import { ms, s, add } from '../index'
import { getData, subs, toMilliseconds } from '../types'

test('serializeDuration(value: Duration<ms>)', () => {
  const received = serializeDuration(ms(300))
  const expected = '300ms'
  expect(received).toEqual(expected)
})

test('serializeDuration(value: Duration<s>)', () => {
  const received = serializeDuration(s(3))
  const expected = '3s'
  expect(received).toEqual(expected)
})

test('serializeAngle(deg)', () => {
  const received = serializeAngle(deg(180))
  const expected = '180deg'
  expect(received).toEqual(expected)
})

test('serializeAngle(grad)', () => {
  const received = serializeAngle(grad(400))
  const expected = '400grad'
  expect(received).toEqual(expected)
})

test('serializeAngle(rad)', () => {
  const received = serializeAngle(rad(3.1416))
  const expected = '3.1416rad'
  expect(received).toEqual(expected)
})

test('serializeAngle(turn)', () => {
  const received = serializeAngle(turn(2))
  const expected = '2turn'
  expect(received).toEqual(expected)
})

test('add(x1: Duration, x2: Duration)', () => {
  const received = getData(add(ms(100), ms(100)))
  const expected = 200
  expect(received).toEqual(expected)
})

test('add(x1: Duration, x2: Duration)', () => {
  const received = getData(add(s(2), ms(100)))
  const expected = 2100
  expect(received).toEqual(expected)
})

test('sub(x1: Duration, x2: Duration)', () => {
  const received = getData(subs(ms(300), ms(100)))
  const expected = 200
  expect(received).toEqual(expected)
})

test('sub(x1: Duration, x2: Duration)', () => {
  const received = getData(subs(s(2), ms(100)))
  const expected = 1900
  expect(received).toEqual(expected)
})


test('toMilliseconds', () => {
  const received = toNum(toMilliseconds(s(1)))
  const expected = 1000
  expect(received).toEqual(expected)
})

test('eq', () => {
  const val1 = ms(1000)
  const val2 = ms(1000)
  const received = eq(val1, val2)
  const expected = true
  expect(received).toEqual(expected)
})
