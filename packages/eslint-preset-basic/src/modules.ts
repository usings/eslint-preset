/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */

import type { ESLintParser, ESLintPlugin } from './types'
export const interopDefault = <T>(module: any): T => module.default ?? module

// @ts-expect-error missing types
import importPlugin from 'eslint-plugin-i'
export const pluginImport = interopDefault<ESLintPlugin>(importPlugin)

// @ts-expect-error missing types
import unusedImportsPlugin from 'eslint-plugin-unused-imports'
export const pluginUnusedImports = interopDefault<ESLintPlugin>(unusedImportsPlugin)

// @ts-expect-error missing types
import unicornPlugin from 'eslint-plugin-unicorn'
export const pluginUnicorn = interopDefault<ESLintPlugin>(unicornPlugin)

// @ts-expect-error missing types
import stylisticPlugin from '@stylistic/eslint-plugin'
export const pluginStylistic = interopDefault<ESLintPlugin>(stylisticPlugin)

import tsPlugin from '@typescript-eslint/eslint-plugin'
export const pluginTs = interopDefault<ESLintPlugin>(tsPlugin)

import tsParser from '@typescript-eslint/parser'
export const parserTs = interopDefault<ESLintParser>(tsParser)
