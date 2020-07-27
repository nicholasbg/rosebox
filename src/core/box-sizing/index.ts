import { GlobalCssKeyword } from '../shared'

/**
 * @skip
 */
type BoxSizing = 'content-box' | 'border-box'

export const serializeBoxSizingValue = (value: BoxSizing | GlobalCssKeyword) =>
  value

/**
 * @category RBDeclarationTypeAlias
 */
export type BoxSizingDeclaration = {
  /**
   * Maps to CSS's **`box-sizing`** property
   * @category RBProperty
   * @formalSyntaxForValue content-box | border-box
   * @added 0.2.0
   * @implementationReference https://www.w3.org/TR/2018/REC-css-ui-3-20180621/#propdef-box-sizing
   */
  boxSizing: BoxSizing | GlobalCssKeyword
}
