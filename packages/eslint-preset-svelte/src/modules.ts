/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
import type { ESLintParser, ESLintPlugin } from 'eslint-preset-basic'
import { interopDefault } from 'eslint-preset-basic/modules'

// plugin
import * as sveltePlugin from 'eslint-plugin-svelte'
export const pluginSvelte = interopDefault<ESLintPlugin>(sveltePlugin)

// parser
import * as svelteParser from 'svelte-eslint-parser'
export const parserSvelte = interopDefault<ESLintParser>(svelteParser)
