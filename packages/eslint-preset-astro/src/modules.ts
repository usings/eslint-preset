/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
import type { ESLintParser, ESLintPlugin } from 'eslint-preset-basic'
import { interopDefault } from 'eslint-preset-basic/modules'

import * as astroPlugin from 'eslint-plugin-astro'
export const pluginAstro = interopDefault<ESLintPlugin>(astroPlugin)

import * as astroParser from 'astro-eslint-parser'
export const parserAstro = interopDefault<ESLintParser>(astroParser)
