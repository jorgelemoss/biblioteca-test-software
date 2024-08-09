/* eslint-disable react/prop-types */
import { cn } from '@utils/clsx'

const FormButton = (props) => (
    <button {...props} className={cn(`bg-form-button-bg text-form-button-text w-20 md:w-full font-semibold py-2 rounded-sm`, props.className)}>Entrar</button>
)

export default FormButton