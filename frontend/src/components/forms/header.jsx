/* eslint-disable react/prop-types */
import { cn } from '@utils/clsx'

const FormHeader = ({ children, ...props }) => (
    <header {...props} className={cn(`py-6`, props.className)}>
        {children}
    </header>
)

export default FormHeader