import type { FlatESLintConfig, OptionsTypescript } from './types'
import { ignores, imports, javascript, stylistic, typescript, unicorn } from './configs'
import { combineConfigs } from './factory'

export const presetBasic = ({ enableTs = true }: OptionsTypescript = {}): FlatESLintConfig[] => {
  const presets = [ignores(), javascript(), imports(), unicorn(), stylistic()]
  if (enableTs) presets.push(typescript())
  return combineConfigs(...presets)
}
