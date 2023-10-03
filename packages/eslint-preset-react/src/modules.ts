/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */
// @ts-nocheck

import type { ESLintPlugin } from 'eslint-preset-basic'
import { interopDefault } from 'eslint-preset-basic/modules'

// plugin
import * as reactPlugin from 'eslint-plugin-react'
export const pluginReact = interopDefault<ESLintPlugin>(reactPlugin)

import * as reactHooksPlugin from 'eslint-plugin-react-hooks'
export const pluginReactHooks = interopDefault<ESLintPlugin>(reactHooksPlugin)
