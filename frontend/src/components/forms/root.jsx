/* eslint-disable react/prop-types */
import { cn } from '@utils/clsx'

function FormRoot({ children, ...props }) {
    return (
        <form {...props} className={cn(`flex flex-col w-3/12 space-y-2`, props.className)}>
            {children}
        </form>
    )
}

export default FormRoot