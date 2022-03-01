import { Link } from "react-router-dom"
import Button from "../../Components/Button/button"
import { Input } from "../../Components/Input/input"
import { Logo, Section, Form, Titulo, Span, Div } from "./style"


export function Login(){

    return (
        <Section>
            <Logo>Kenzie Hub</Logo>
            <Form>
                <Titulo>Login</Titulo>
                <Span>Email</Span>
                <Input tipo={"text"} texto={"Digite seu email"}/>
                <Span>Senha</Span>
                <Input tipo={"password"} texto={"Digite sua senha"}></Input>
                <Button text={'Entrar'} color={"pink"}/>
                <Div>
                    <Link to="/signup">Ainda não possui uma conta?</Link>
                </Div>
                <Button text={'Cadastre-se'} color={"gray"}/>           
            </Form>
        </Section>
    )
}