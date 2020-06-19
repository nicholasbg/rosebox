import { GlobalCssKeyword } from '../shared/types'

export const serializeFontSynethsisPropValue = (
  x:
    | 'none'
    | 'weight'
    | 'style'
    | ['weight', 'style']
    | ['style', 'weight']
    | GlobalCssKeyword
): string => (typeof x === 'string' ? x : `${x[0]} ${x[1]}`)

/**
 * @category RBDeclarationTypeAlias
 */
export type FontSynthesisDeclaration = {
  /**
   * Maps to CSS's **`font-synthesis`** property
   * @category RBProperty
   * @formalSyntaxForValue none | [ weight || style ]
   * @implementationReference https://www.w3.org/TR/2019/WD-css-fonts-4-20191113/#font-synthesis
   */
  fontSynthesis:
    | 'none'
    | 'weight'
    | 'style'
    | ['weight', 'style']
    | ['style', 'weight']
    | GlobalCssKeyword
}
