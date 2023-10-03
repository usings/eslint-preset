/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
// @ts-nocheck

import type { ESLintPlugin } from 'eslint-preset-basic'
import { interopDefault } from 'eslint-preset-basic/modules'

// plugins
import * as solidPlugin from 'eslint-plugin-solid'
export const pluginSolid = interopDefault<ESLintPlugin>(solidPlugin)
