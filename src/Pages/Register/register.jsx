import { Form, Section, Titulo, Span, Div, Logo, Header, H6 } from "./style";
import Button from "../../Components/Button/button";
import { Input } from "../../Components/Input/input";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export function Register() {

  const signupSchema = yup.object().shape({
    name: yup.string().required("campo obrigatorio"),
    email: yup.string().email("email invalido").required("campo obrigatorio"),
    password: yup.string().required("campo obrigatorio").matches(/(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, "Senha fraca"),
    confirm_password: yup.string().oneOf([yup.ref("password")], "senhas diferentes").required("campo obrigatorio")
  });

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(signupSchema),
  });

  const history = useHistory();

  const handleCreateUser = async (data) => {

    toast.success("Conta criada com sucesso!");

    history.push(`/user/${data.name}`);
  };

  return (
    <Section>
        <Header>
            <Logo>Kenzie Hub</Logo>
            <Link to="/">
              <Button text={"Voltar"} width={79.54} color={"black"} margR={1} margL={1}/>
            </Link>
        </Header>
      <Form onSubmit={handleSubmit(handleCreateUser)}>
        <Titulo>Crie sua conta</Titulo>
        <Div>
          <H6>Rapido e gratis, vamos nessa</H6>
        </Div>
        <Span>Name</Span>
        <Input {...register("name")} texto={"Digite aqui seu nome"} />
        <Span>Email</Span>
        <Input {...register("email")} tipo={"email"} texto={"Digite aqui seu email"}/>
        <Span>Senha</Span>
        <Input {...register("password")} tipo={"password"} texto={"Digite aqui sua senha"}/>
        <Span>Confirmar Senha</Span>
        <Input {...register("confirm_password")} tipo={"password"} texto={"Digite novamente sua senha"}/>
        <Button text={"Cadastrar"} color={""} />
      </Form>
    </Section>
  );
}
