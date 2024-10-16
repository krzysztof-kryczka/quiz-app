import css from "./Button.module.css"

const Button = ({ styleType, children, onClick }) => (
   <button className={css[styleType]} onClick={onClick}>
      {children}
   </button>
)

export default Button
