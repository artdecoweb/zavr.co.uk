/* yarn example/ */
import zavrCoUk from '../src'

(async () => {
  const res = await zavrCoUk({
    text: 'example',
  })
  console.log(res)
})()