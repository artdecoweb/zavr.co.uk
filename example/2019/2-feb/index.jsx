import core from '@idio/core'
import render from 'preact-render-to-string'

(async () => {
  const { url } = await core({
    frontend: { directory: 'example/2019/2-feb' },
    body(ctx) {
      ctx.body = '<!doctype html>' + render(<html>
        <head><title>Example</title></head>
        <body>
          <script type="module" src="/example/2019/2-feb/strings">
          </script>
        </body>
      </html>)
    },
  })
  console.log(url)
})()