import { join } from 'path'

const APP_DIR = '.'
const PAGES_DIR = join(APP_DIR, 'pages')
const BUILD_DIR = 'docs'

const config = {
  layout: join(APP_DIR, 'layout/main.html'),
  appDir: APP_DIR,
  pagesDir: PAGES_DIR,
  pre: [
    {
      re: /{{ company }}/g,
      replacement: '[Zavr](https://zavr.co.uk)',
    },
  ],
  postProcess: [
    {
      re: /{{ year }}/g,
      replacement: `${new Date().getFullYear()}`,
    },
  ],
  output: BUILD_DIR,
  url: 'https://zavr.co.uk',
}

export default config