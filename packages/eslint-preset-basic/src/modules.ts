/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
// @ts-nocheck

import type { ESLintParser, ESLintPlugin } from './types'
export const interopDefault = <T>(module: unknown): T => module?.default ?? module

// plugin
import importPlugin from 'eslint-plugin-i'
export const pluginImport = interopDefault<ESLintPlugin>(importPlugin)

import unusedImportsPlugin from 'eslint-plugin-unused-imports'
export const pluginUnusedImports = interopDefault<ESLintPlugin>(unusedImportsPlugin)

import unicornPlugin from 'eslint-plugin-unicorn'
export const pluginUnicorn = interopDefault<ESLintPlugin>(unicornPlugin)

import stylisticPlugin from '@stylistic/eslint-plugin'
export const pluginStylistic = interopDefault<ESLintPlugin>(stylisticPlugin)

import tsPlugin from '@typescript-eslint/eslint-plugin'
export const pluginTs = interopDefault<ESLintPlugin>(tsPlugin)

// parser
import tsParser from '@typescript-eslint/parser'
export const parserTs = interopDefault<ESLintParser>(tsParser)
