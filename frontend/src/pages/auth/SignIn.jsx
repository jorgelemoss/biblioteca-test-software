import { Form } from '@components/index.components'
import { login } from '@api/index'
import {
    LoaderCircle
} from 'lucide-react'

import { useState } from 'react'

function SignIn() {

    const [loading, setLoading] = useState(false)

    const [user, setUser] = useState({
        registration: "",
        password: ""
    })

    const handleLogin = async (e) => {

        e.preventDefault()

        try {
            setLoading(true)

            const { data } = await login('/auth/user', {
                registration: user.registration,
                password: user.password
            })

            console.log(data)
        } catch (err) {
            if (err.response.data.err === 400) {
                console.log(err)
            }
        } finally {
            setLoading(false)
            setUser({
                registration: "",
                password: ""
            })
        }
    }


    return (
        <main className="min-h-screen flex items-center justify-center">
            <Form.FormRoot>
                <Form.FormHeader title={"Login"} />
                <Form.FormLabel htmlFor="registering">
                    <span>Matrícula</span>
                    <Form.FormInput
                        name="registering"
                        aria-describedby="matricula"
                        type="email"
                        value={user.registration}
                        onChange={(e) => setUser({ ...user, registration: e.target.value })}
                        placeholder={"2024ADSPL0000"}
                    />
                </Form.FormLabel>
                <Form.FormLabel htmlFor="password">
                    <span>Senha</span>
                    <Form.FormInput
                        name="password"
                        aria-describedby="password-area"
                        type="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                        placeholder={"*******"}
                    />
                </Form.FormLabel>
                {loading ? (
                    <Form.FormButton
                        value={<LoaderCircle className='animate-spin-slow' />}
                        type="submit"
                        disabled
                    />
                ) : (
                    <Form.FormButton
                        value={"Entrar"}
                        type="submit"
                        onClick={handleLogin}
                    />
                )}
                <Form.FormLink link={"/password-recovery"} value={"Esqueci a senha"} />
            </Form.FormRoot>
        </main >
    )
}

export default SignIn