import s from './Button.module.css'

 const Button=() => {
    return(
        <button type='button' className={s.Button}>
            <span className={s.Button__label}>Load more</span>
        </button>
    )
}

export default Button;
