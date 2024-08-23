/* eslint-disable react/prop-types */
import { cn } from '@utils/clsx'

function FormRoot({ children, ...props }) {
    return (
        <form {...props} className={cn(`bg-form-bg rounded-sm shadow-black shadow-sm px-20 py-[60px] flex flex-col w-auto md:w-4/12 space-y-3`, props.className)}>
            {children}
        </form>
    )
}

export default FormRoot