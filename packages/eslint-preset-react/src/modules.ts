/* eslint-disable import/newline-after-import */
/* eslint-disable import/first */

import type { ESLintPlugin } from 'eslint-preset-basic'
import { interopDefault } from 'eslint-preset-basic/modules'

// @ts-expect-error missing types
import * as reactPlugin from 'eslint-plugin-react'
export const pluginReact = interopDefault<ESLintPlugin>(reactPlugin)

// @ts-expect-error missing types
import * as reactHooksPlugin from 'eslint-plugin-react-hooks'
export const pluginReactHooks = interopDefault<ESLintPlugin>(reactHooksPlugin)
