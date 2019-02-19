export { default as Pages } from './Menu'

export const Figure = ({ img, alt, children }) => {
  return <p className="Figure">
    <img src={img} alt={alt}/><br/>
    {children}
  </p>
}

export const ToDo = ({ children, splendid: { random } }) => {
  const id = `i${random()}`
  const i = (<div>
    <input id={id} type="checkbox" ></input> <label htmlFor={id}>{children}</label>
  </div>)
  return i
}