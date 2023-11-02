/* eslint-disable import/newline-after-import */

import type { ESLintPlugin } from 'eslint-preset-basic'
import { interopDefault } from 'eslint-preset-basic/modules'

// @ts-expect-error missing types
import * as solidPlugin from 'eslint-plugin-solid'
export const pluginSolid = interopDefault<ESLintPlugin>(solidPlugin)
