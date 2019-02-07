import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import zavrCoUk from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof zavrCoUk, 'function')
  },
  async 'calls package without error'() {
    await zavrCoUk()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await zavrCoUk({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T