import { px } from '../shared'
import { style } from '../..'
import { rgb } from '../shared'

test('textShadow(x: none)', () => {
    const received = style({
        textShadow: 'none',
    })
    const expected = {
        textShadow: 'none',
    }
    expect(received).toEqual(expected)
})

test('textShadow(x: Shadow)', () => {
    const received = style({
        textShadow: [[px(2), px(2)]],
    })
    const expected = {
        textShadow: '2px 2px',
    }
    expect(received).toEqual(expected)
})

test('textShadow(x: Shadow[])', () => {
    const received = style({
        textShadow: [[[px(2), px(2)]], [[px(2), px(2)], rgb(155, 155, 155)]],
    })
    const expected = {
        textShadow: '2px 2px, 2px 2px rgb(155, 155, 155)',
    }
    expect(received).toEqual(expected)
})
