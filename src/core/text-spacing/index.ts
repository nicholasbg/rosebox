/**
 * @hide
 */
type Group1 = 'trim-start' | 'space-start' | 'space-first'
/**
 * @hide
 */
type Group2 = 'trim-end' | 'space-end' | 'allow-end'
/**
 * @hide
 */
type Group3 = 'trim-adjacent' | 'space-adjacent'

type TextSpacing =
  | 'normal'
  | 'none'
  | Group1
  | Group2
  | Group3
  | 'no-compress'
  | 'ideograph-alpha'
  | 'ideograph-numeric'
  | 'punctuation'
