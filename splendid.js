import { join } from 'path'

const APP_DIR = '.'

const config = {
  layout: join(APP_DIR, 'layout/main.html'),
  appDir: APP_DIR,
  replacements: [
    {
      re: /{{ company }}/g,
      replacement: '[Zavr](https://zavr.co.uk)',
    },
  ],
  output: 'docs',
  url: 'https://zavr.co.uk',
}

export default config