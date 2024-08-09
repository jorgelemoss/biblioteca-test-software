/* eslint-disable react/prop-types */
import { cn } from '@utils/clsx'

const FormButton = (props) => (
    <button {...props} className={cn(``, props.className)}>Entrar</button>
)

export default FormButton