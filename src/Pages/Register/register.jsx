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
  Button,
  Select,
  Btn
} from "./style";
import { Redirect } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "../../services/api";

export function Signup({ authenticated, bancoDeDados}) {


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

        toast.success("Conta criada com sucesso!");
        history.push("/");
      })
      .catch((err) => {

        toast.error("Erro ao criar a conta, tente outro email");
      });
  };

  if(authenticated){
    return <Redirect to={`/user/${bancoDeDados.name}`} />
  }


  return (
    <Section>
      <Header>
        <Logo>Kenzie Hub</Logo>
      
          <Btn
            onClick={() => history.push("/")}
            color={"black"}
            height={30.58}
            width={79.54}
            margL={1}
            margR={1}
          >Voltar
          </Btn>
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
        <Select
        {...register("course_module")}>
            <option value="Primeiro M??dulo (Introdu????o ao Frontend)">Primeiro M??dulo</option>
            <option value="Segundo m??dulo (Frontend Avan??ado)">Segundo M??dulo</option>
            <option value="Terceiro m??dulo (Introdu????o ao Backend)">Terceiro M??dulo</option>
            <option value="Quarto m??dulo (Backend Avan??ado)">Quarto M??dulo</option>
        </Select>
        <Button type="submit" width={260.65} height={38.38} margT={10} margB={1}
        
        >Cadastrar</Button>
      </Form>
    </Section>
  );
}
