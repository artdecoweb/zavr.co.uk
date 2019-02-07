import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import zavrCoUk from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await zavrCoUk({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
