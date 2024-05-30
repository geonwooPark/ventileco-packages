import { create } from '@storybook/theming/create'
import { colors } from '../tw-config/theme'

export default create({
  base: 'light',
  brandTarget: '_self',
  brandUrl: 'https://github.com/geonwooPark/ventileco-ui',
  brandImage: './logo/logo.png',

  fontBase: '"Roboto", sans-serif',
  fontCode: 'monospace',

  colorPrimary: colors.active,
  colorSecondary: colors.beige.dark,

  // UI
  appBg: colors.brown.dark,
  appContentBg: colors.brown.dark,
  appPreviewBg: '#ffffff',
  appBorderColor: colors.beige.dark,
  appBorderRadius: 4,

  // Text colors
  textColor: colors.beige.light,

  // Toolbar default and active colors
  barTextColor: colors.brown.dark,
  barSelectedColor: colors.active,
  barHoverColor: colors.active,
  barBg: colors.beige.light,

  // Form colors
  inputBg: colors.beige.light,
  inputTextColor: colors.brown.dark,
  inputBorderRadius: 4,
})

const style = document.createElement('style')
style.innerHTML = `
  .css-141vx8o {
    border-color: ${colors.beige.dark} !important;
  }

  #storybook-explorer-searchfield {
    background-color: ${colors.beige.light};
    box-shadow: none !important;
    color: ${colors.brown.dark};
  }

  .css-141vx8o css-c3junj {
    color: ${colors.beige.light} !important;
  }

  .css-141vx8o .css-1dvoe4y {
    color: ${colors.beige.light} !important;
  }

  .css-141vx8o .css-1wpfhgo {
    color: ${colors.beige.light} !important;
  }

  .css-141vx8o .css-f9sgd8 {
    color: ${colors.beige.light} !important;
  }

  .css-141vx8o .css-w7lvd3 {
    color: ${colors.beige.light} !important;
  }

  .search-result-recentlyOpened {
    color: ${colors.beige.light} !important; 
  }

  .css-z072u2 {
    background-color: ${colors.brown.normal} !important;
    border: none !important;
  }
`
document.head.appendChild(style)
