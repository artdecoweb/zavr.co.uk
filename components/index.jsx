export { default as Pages } from './Menu'
let seed = 1
const random = () => {
  var x = Math.sin(seed++) * 10000
  return Math.floor((x - Math.floor(x)) * 10000)
}

export const Figure = ({ img, alt, children }) => {
  return <p className="Figure">
    <img src={img} alt={alt}/><br/>
    {children}
  </p>
}

export const ToDo = ({ children }) => {
  const id = `i${random()}`
  const i = (<div>
    <input id={id} type="checkbox" ></input> <label for={id}>{children}</label>
  </div>)
  return i
}