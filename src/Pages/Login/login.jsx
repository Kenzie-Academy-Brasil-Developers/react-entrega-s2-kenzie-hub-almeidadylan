import { Link } from "react-router-dom"
import Button from "../../Components/Button/button"
import { Logo, Section, Form, Titulo, Span, Div, Input } from "./style"
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";



export function Login({ authenticated, setAuthenticated, BD, setDB }){


    const signupSchema = yup.object().shape({
        email: yup.string().email("email invalido").required("campo obrigatorio"),
        password: yup
          .string()
          .min(8, "Minimo  de 8 digitos")
          .required("campo obrigatorio")

    });

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({
        resolver: yupResolver(signupSchema),
      });

      const history = useHistory();

    const onSubmitFunction = (data) => {
        console.log(data)
        api
        .post("/sessions", data)
        .then((response) => {
            console.log(response)
            setDB(response.data.user)
            console.log(BD)
            const { token } = response.data;

            localStorage.setItem("@KenzieHub:token", token);

            setAuthenticated(true);

            <Redirect to={`/user/${response.name}`}/>
        })
        .catch((err) => toast.error("Email ou senha invalidos"));
      };
      console.log(BD)

      if(authenticated){
        return <Redirect to={`/user/${BD.name}`} />     
      }


    return (
        <Section>
            <Logo>Kenzie Hub</Logo>
            <Form onSubmit={handleSubmit(onSubmitFunction)}>
                <Titulo>Login</Titulo>
                <Span>Email</Span>
                {errors.email?.message && <h5>{errors.email.message}</h5>}
                <Input
                    {...register("email")}
                    type="email" 
                    placeholder={"Digite seu email"} 
                />
                <Span>Senha</Span>
                {errors.password?.message && <h5>{errors.password.message}</h5>}
                <Input 
                    {...register("password")}
                    type="password"  
                    placeholder="Digite sua senha"
                />
                <Button type="submit" text={'Entrar'} color={"pink"}/>
                <Div>
                    <Link to="/signup">Ainda não possui uma conta?</Link>
                </Div>
                <Link to="/signup">
                    <Button text={'Cadastre-se'} color={"gray"}/> 
                </Link>          
            </Form>
        </Section>
    )
}