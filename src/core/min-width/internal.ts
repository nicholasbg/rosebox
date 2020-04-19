import {
    Length,
    Percentage,
    isLengthType,
    isPercentageType,
    GlobalCssKeyword,
    isGlobalCssKeyword,
} from '../shared/types'
import { serializeLength, serializePercentage } from '../shared/serializers'

export type MinWidthCSSProp = 'min-width'

const serializeMinWidth = (value: Length | Percentage): string =>
    isLengthType(value)
        ? serializeLength(value)
        : isPercentageType(value)
            ? serializePercentage(value)
            : value

/**
 * Creates a declaration object for the **`min-width`** property.
 * @category Declaration function
 * @formalSyntaxForValue <length> | <percentage>
 * @added 0.1.4
 * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#propdef-min-width
 */
export const minWidth = (
    value: Length | Percentage | GlobalCssKeyword
): { minWidth: string } => ({
    minWidth: isGlobalCssKeyword(value) ? value : serializeMinWidth(value),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type MinWidthDeclaration = {
    /**
     * Maps to CSS's **`min-width`** property.
     * @category RBProperty
     * @formalSyntaxForValue <length> | <percentage>
     * @added 0.2.0
     * @implementationReference https://www.w3.org/TR/CSS22/visudet.html#propdef-min-width
     */
    minWidth: Length | Percentage | GlobalCssKeyword
}
