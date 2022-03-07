import { Btn, Header, Form, Span, Input, Button, Select, H5 } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useState } from "react";

export function Modal({ setModal, BD, techs, setTechs, chamarUsuario }) {
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  const { register, handleSubmit } = useForm()

  const onSubmitFunction = (data) => {
      console.log(data)
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        setTechs([...techs, response.data]);
        toast.success("Tecnologia criada com sucesso!");
        setModal(false)
      })
      .catch((err) =>
        toast.error(
          "Usuário Já tem esta tecnologia criada, você só pode atualizá-la"
        )
      );
  };

  return (
    <Form onSubmit={handleSubmit(onSubmitFunction)}>
      <Header>
        <H5>Cadastrar Tecnologia</H5>
        <Btn onClick={() => setModal(false)}>x</Btn>
      </Header>
      <Span>Nome</Span>
      <Input {...register("title")} placeholder="tecnologia" />
      <Span>Selecionar status</Span>
      <Select {...register("status")}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediario">Intermediario</option>
        <option value="Avançado">Avançado </option>
      </Select>

      <Button
        type="submit"
        color={"pink"}
        width={259.9}
        height={40.5}
        margT={25}
      >
        Cadastrar Tecnologia
      </Button>
    </Form>
  );
}
