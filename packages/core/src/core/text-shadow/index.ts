import {
    Length,
    isLengthType,
    GlobalCssKeyword,
    isGlobalCssKeyword,
    PropType,
    ValueOrFunc,
} from '../shared'
import { Color, isColor, serializeAtomicValue } from '../shared'

type LengthTuple = [Length, Length] | [Length, Length, Length]

type Shadow = LengthTuple | [Color, LengthTuple] | [LengthTuple, Color]

const isLengthTuple = (value: unknown): value is LengthTuple =>
    Array.isArray(value) && value.every(isLengthType)

const serializeLengthTuple = (value: LengthTuple): string =>
    (value as Length[])
        .reduce((acc, item) => acc + serializeAtomicValue(item) + ' ', '')
        .trim()

// @refactor
export const serializeShadow = (value: Shadow): string => {
    return (value as (Color | LengthTuple | Color)[])
        .reduce((acc, item) => {
            return (
                acc +
                ' ' +
                (isColor(item)
                    ? serializeAtomicValue(item)
                    : isLengthType(item)
                    ? serializeAtomicValue(item)
                    : isLengthTuple(item)
                    ? serializeLengthTuple(item)
                    : 'test')
            )
        }, '')
        .trim()
}

const serializeShadowArray = (value: Shadow[]): string =>
    value.reduce(
        (acc, item, idx) =>
            idx === value.length - 1
                ? acc + serializeShadow(item)
                : acc + serializeShadow(item) + ', ',
        '',
    )

const serializeTextShadowPropertyValue = (
    value: Shadow | Shadow[] | GlobalCssKeyword | 'none',
): string =>
    value === 'none' || isGlobalCssKeyword(value)
        ? value
        : !Array.isArray(value[0]) || isLengthTuple(value[0])
        ? serializeShadow(value as Shadow)
        : serializeShadowArray(value as Shadow[])

export const serializeTextShadow = (type: PropType) => (
    x: Shadow | Shadow[] | GlobalCssKeyword | 'none',
) => ({
    [type === 'inline'
        ? 'textShadow'
        : 'text-shadow']: serializeTextShadowPropertyValue(x),
})

/** @hide */
type TextShadowPropValue = Shadow | Shadow[] | 'none' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type TextShadowDeclaration = {
    /**
     * Maps to CSS's **`text-shadow`** property
     * @initial none
     * @definition https://drafts.csswg.org/css-text-decor/#text-shadow-property
     * @specification {@link https://drafts.csswg.org/css-text-decor/ CSS Text Decoration Module Level 3}.
     */
    textShadow: TextShadowPropValue
}

export type TextShadowDeclarationJSS = {
    textShadow: ValueOrFunc<TextShadowPropValue>
}
