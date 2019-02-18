export { default as Pages } from './Menu'

export const Figure = ({ img, alt, children }) => {
  return <p className="Figure">
    <img src={img} alt={alt}/><br/>
    {children}
  </p>
}

export const ToDo = ({ children }) => {
  const id = Math.floor(Math.random() * 10000)
  const i = (<div>
    <input id={id} type="checkbox" ></input> <label for={id}>{children}</label>
  </div>)
  return i
}