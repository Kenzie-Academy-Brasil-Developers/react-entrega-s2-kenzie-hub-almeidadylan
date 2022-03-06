import {
  Form,
  Section,
  Titulo,
  Span,
  Div,
  Logo,
  Header,
  H6,
  H5,
  Input,
  Description,
} from "./style";
import Button from "../../Components/Button/button";
//import { Input } from "../../Components/Input/input";
import { Link, Redirect } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";
import { Select } from "../../Components/Select/select";
import { useState } from "react";

export function Signup({ authenticated, BD, setDB}) {


  const signupSchema = yup.object().shape({
    name: yup.string().required("campo obrigatorio"),
    email: yup.string().email("email invalido").required("campo obrigatorio"),
    password: yup
      .string()
      .min(8, "A senha precisa ter no minimo 8 digitos")
      .required("campo obrigatorio")
      .matches(
        /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
        "Senha fraca"
      ),
    confirm_password: yup
      .string()
      .oneOf([yup.ref("password")], "senhas diferentes")
      .required("campo obrigatorio"),
    course_module: yup.string().required("campo obrigatorio"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const history = useHistory();

  const onSubmitFunction = ({ name, email, password, contact="not found", bio="not found", course_module }) => {
    const user = { name, password, email, bio, contact, course_module };
    api
      .post("/users", user)
      .then((response) => {
        //console.log(response.data);
        toast.success("Conta criada com sucesso!");
        history.push("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro ao criar a conta, tente outro email");
      });
  };
  console.log(errors);

  if(authenticated){
    return <Redirect to={`/user/${BD.name}`} />
  }


  return (
    <Section>
      <Header>
        <Logo>Kenzie Hub</Logo>
      
          <button
            onClick={() => history.push("/")}
          >Voltar</button>
        </Header>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <Titulo>Crie sua conta</Titulo>
        <Div>
          <H6>Rapido e gratis, vamos nessa</H6>
        </Div>
        <Description>
          <Span>Name</Span>
          {errors.name?.message && <H5>{errors.name.message}</H5>}
        </Description>
        <Input
          {...register("name")}
          type="text"
          placeholder="Digite aqui seu nome"
        />
        <Description>
          <Span>Email</Span>
          {errors.email?.message && <H5>{errors.email.message}</H5>}
        </Description>
        <Input
          {...register("email")}
          type="email"
          placeholder="Digite aqui seu email"
        />
        <Description>
          <Span>Senha</Span>
          {errors.password?.message && <H5>{errors.password.message}</H5>}
        </Description>
        <Input
          {...register("password")}
          type="password"
          placeholder="Digite aqui sua senha"
        />
        <Description>
          <Span>Confirmar Senha</Span>
          {errors.confirm_password?.message && (
            <H5>{errors.confirm_password.message}</H5>
          )}
        </Description>
        <Input
          {...register("confirm_password")}
          type="password"
          placeholder="confirme sua senha"
        />
        <Description>
          <Span>Selecionar modulo</Span>
          {errors.course_module?.message && <H5>{errors.course_module.message}</H5>}
        </Description>
        <select
        {...register("course_module")}>
            <option value="Primeiro Módulo (Introdução ao Frontend)">Primeiro Módulo</option>
            <option value="Segundo módulo (Frontend Avançado)">Segundo Módulo</option>
            <option value="Terceiro módulo (Introdução ao Backend)">Terceiro Módulo</option>
            <option value="Quarto módulo (Backend Avançado)">Quarto Módulo</option>
        </select>
        <button type="submit" >Cadastrar</button>
      </Form>
    </Section>
  );
}
