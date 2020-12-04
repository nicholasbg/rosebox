import { GlobalCssKeyword, ValueOrFunc } from '../shared'

/** @hide */
type PropValue = 'auto' | 'text' | 'emoji' | 'unicode' | GlobalCssKeyword

/**
 * @category RBDeclarationTypeAlias
 */
export type FontVariantEmojiDeclaration = {
  /**
   * Maps to CSS's **`font-variant-emoji`** property
   * @category RBProperty
   * @formalSyntaxForValue auto | text | emoji | unicode
   * @implementationReference https://drafts.csswg.org/css-fonts-4/#font-variant-emoji-prop
   */
  fontVariantEmoji: PropValue
}

export type FontVariantEmojiDeclarationJSS = {
  fontVariantEmoji: ValueOrFunc<PropValue>
}
