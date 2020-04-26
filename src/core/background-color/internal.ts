import { serializeColor, Color } from '../color/internal'
import { GlobalCssKeyword, isGlobalCssKeyword } from '../shared/types'

export type BackgroundColorCSSProp = 'background-color'

export const serializeBackgroundColorValue = (
  value: Color | GlobalCssKeyword
): string => isGlobalCssKeyword(value) ? value : serializeColor(value)


/**
 * @category RBDeclarationTypeAlias
 */
export type BgColorDeclaration = {
  /**
   * A RB property that maps to CSS's **`background-color`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | <integer>
   * @added 0.2.0
   */
  backgroundColor: Color | GlobalCssKeyword
}
