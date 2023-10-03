/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
// @ts-nocheck

import type { ESLintParser, ESLintPlugin } from 'eslint-preset-basic'
import { interopDefault } from 'eslint-preset-basic/modules'

// plugins
import * as vuePlugin from 'eslint-plugin-vue'
export const pluginVue = interopDefault<ESLintPlugin>(vuePlugin)

// parser
import * as vueParser from 'vue-eslint-parser'
export const parserVue = interopDefault<ESLintParser>(vueParser)
