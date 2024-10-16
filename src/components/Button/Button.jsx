import css from './Button.module.css'

const Button = ({ styleType, children, onClick }) => {
   const handleClick = e => {
      e.preventDefault()
      e.target.blur()
      onClick()
   }

   return (
      <button className={css[styleType]} onClick={handleClick}>
         {children}
      </button>
   )
}

export default Button
