import { Form } from '@components/index.components'

function SignIn() {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <Form.FormRoot>
                <Form.FormHeader title={"Login"} />
                <Form.FormLabel>
                    <span>Matrícula</span>
                    <Form.FormInput placeholder={"2024ADSPL0000"} />
                </Form.FormLabel>
                <Form.FormLabel>
                    <span>Senha</span>
                    <Form.FormInput placeholder={"*******"} />
                </Form.FormLabel>
                <Form.FormButton />
            </Form.FormRoot>
        </main >
    )
}

export default SignIn