import { ShrinkGrow } from '../shared'
import { GlobalCssKeyword } from '../../shared'

export const serializeFlexShrink = (
  value: ShrinkGrow | GlobalCssKeyword
): { flexShrink: string | number } => ({
  flexShrink: value,
})

/**
 * @category RBDeclarationTypeAlias
 */
export type FlexShrinkDeclaration = {
  /**
   * Maps to CSS's **`flex-shrink`** property
   * @category RBProperty
   * @formalSyntaxForValue <number>
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/CR-css-flexbox-1-20181119/#flex-shrink-property
   */
  flexShrink: ShrinkGrow | GlobalCssKeyword
}
