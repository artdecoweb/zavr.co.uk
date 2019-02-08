// Original
import { render } from 'preact'
import Router from 'preact-router'

const Component = ({ title }) => {
  return <div>{title}</div>
}

render(<Router>
  <Component path="/" />
</Router>, document.body)
