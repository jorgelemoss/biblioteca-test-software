/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'

const FormRoot = ({ children }) => (
    <form className="max-w-sm mx-auto ">
        {children}
    </form>
)


const FormLabel = ({ htmlKey, value }) => (
    <label htmlFor={htmlKey} className="mt-4 block mb-2 text-sm font-medium text-gray-900">{value}</label>

)

const FormSVGRoot = ({ children, svg }) => (
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
            {svg}
        </div>
        {children}
    </div>
)

const FormInput = (props, { idTitle, value, }) => (
    <input {...props} type="text" id={idTitle} className="w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={value} />
)

const EmailSVGIcon = () => (
    <svg className="w-4 h-4 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
    </svg>
)

const LockSVGIcon = () => (
    <svg className="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" d="M8 10V7a4 4 0 1 1 8 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a2 2 0 1 1 4 0v3h-4V7Zm2 6a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1Z" clipRule="evenodd" />
    </svg>
)

const BookSVGIcon = () => (
    <svg className="w-5 h-5 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>

)


function MyAccount() {

    const { user } = useSelector((state) => state.auth)

    const user_inputs = [
        {
            key: 0,
            label: {
                htmlKey: "email-address-icon",
                value: "Email"
            },
            svg: <EmailSVGIcon />,
            input: {
                id: "email-address-icon",
                value: user.email
            }
        },
        {
            key: 1,
            label: {
                htmlKey: "registration-address-icon",
                value: "Matrícula"
            },
            svg: <BookSVGIcon />,
            input: {
                id: "registration-address-icon",
                value: user.registration
            }
        },
        {
            key: 2,
            label: {
                htmlKey: "lock-address-icon",
                value: "Senha"
            },
            svg: <LockSVGIcon />,
            input: {
                id: "lock-address-icon",
                value: "*********"
            }
        }
    ]

    return (
        <FormRoot>
            {user_inputs.map((f) => (
                <>
                    <FormLabel htmlKey={f.label.htmlKey} value={f.label.value} />
                    <FormSVGRoot svg={f.svg}>
                        <FormInput idTitle={f.input.id} disabled value={f.input.value} />
                    </FormSVGRoot>
                </>
            ))}
            <footer className='max-sm mt-4'>
                <button type="button" disabled className="w-full text-white bg-gray-900 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none dark:focus:ring-blue-800">Salvar alterações</button>
            </footer>
        </FormRoot>
    )
}

export default MyAccount