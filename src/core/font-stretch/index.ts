import { GlobalCssKeyword, Percentage, serializeAtomicValue } from '../shared'

export const serializeFontStretch = (
  x: Percentage | string
): { fontStretch: string } => ({
  fontStretch: serializeAtomicValue(x),
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FontStretchDeclaration = {
  /**
   * Maps to CSS's **`font-stretch`** property
   * @category RBProperty
   * @formalSyntaxForValu normal | <percentage> | ultra-condensed | extra-condensed | condensed | semi-condensed | semi-expanded | expanded | extra-expanded | ultra-expanded
   */
  fontStretch:
    | Percentage
    | 'normal'
    | 'ultra-condensed'
    | 'extra-condensed'
    | 'condensed'
    | 'semi-condensed'
    | 'semi-expanded'
    | 'expanded'
    | 'extra-expanded'
    | 'ultra-expanded'
    | GlobalCssKeyword
}
