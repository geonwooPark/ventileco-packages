import { addons } from '@storybook/manager-api'
import customTheme from './theme'
import { colors } from '../tw-config/theme'

addons.setConfig({
  theme: customTheme,
})
