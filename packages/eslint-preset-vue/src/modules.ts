/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */

import type { ESLintParser, ESLintPlugin } from 'eslint-preset-basic'
import { interopDefault } from 'eslint-preset-basic/modules'

// @ts-expect-error missing types
import * as vuePlugin from 'eslint-plugin-vue'
export const pluginVue = interopDefault<ESLintPlugin>(vuePlugin)

import * as vueParser from 'vue-eslint-parser'
export const parserVue = interopDefault<ESLintParser>(vueParser)
