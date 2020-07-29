import { GlobalCssKeyword, isGlobalCssKeyword } from '.'

/**
 *
 * A type that maps to the **`cubic-bezier()`** subset of CSS's **`<easing-function>`** .
 * @added 0.2.1
 */
export interface CubicBezierFunction {
  __tag: 'CubicBezierFunction'
  value: [number, number, number, number]
}

type StepPosition =
  | 'jump-start'
  | 'jump-end'
  | 'jump-none'
  | 'jump-both'
  | 'start'
  | 'end'

/**
 *
 * A type that maps to the **`steps()`** subset of CSS's **`<easing-function>`** .
 * @added 0.2.1
 */
export interface StepsFunction {
  __tag: 'StepsFunction'
  value: [number] | [number, StepPosition]
}

/**
 * Constructs a value of type **`CubicBezierFunction`**..
 * @category Value constructor
 * @added 0.2.1
 */
export const bezier = (
  x1: number,
  x2: number,
  x3: number,
  x4: number
): CubicBezierFunction => ({
  __tag: 'CubicBezierFunction',
  value: [x1, x2, x3, x4],
})

export const serializeBezier = (x: CubicBezierFunction): string =>
  `cubic-bezier(${x.value[0]}, ${x.value[1]}, ${x.value[2]}, ${x.value[3]})`

/**
 * Constructs a value of type **`StepsFunction`**.
 * @category Value constructor
 * @added 0.2.1
 */
export const steps = (
  num: number,
  stepPosition?: StepPosition
): StepsFunction => ({
  __tag: 'StepsFunction',
  value: stepPosition ? [num, stepPosition] : [num],
})

type CubicBezierTimingFunction =
  | 'ease'
  | 'ease-in'
  | 'ease-out'
  | 'ease-in-out'
  | CubicBezierFunction

type StepTimingFunction =
  | 'step-start'
  | 'step-end'
  | 'ease-out'
  | 'ease-in-out'
  | StepsFunction

type TimingFunction = 'linear' | StepTimingFunction | CubicBezierTimingFunction

/**
 * @hide
 */
export type TimingFunctionValue =
  | GlobalCssKeyword
  | TimingFunction
  | TimingFunction[]

export const serializeSteps = (x: StepsFunction): string =>
  `steps(${x.value[0]}${x.value[1] ? ', ' + x.value[1] : ''})`

export const serializeSingleValue = (value: TimingFunction): string =>
  typeof value === 'string'
    ? value
    : value.__tag === 'StepsFunction'
    ? serializeSteps(value)
    : serializeBezier(value)

export const serializeTimingFunctionValue = (
  value: TimingFunctionValue
): string =>
  isGlobalCssKeyword(value)
    ? value
    : !Array.isArray(value)
    ? serializeSingleValue(value)
    : value.reduce(
        (acc, item, idx) =>
          acc +
          serializeSingleValue(item) +
          (idx === value.length - 1 ? '' : ', '),
        ''
      )
