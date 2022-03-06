import { Btn, Header, Form, Span, Input, Button, Select } from "./style";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useState } from "react";

export function ModalExcluir({
  setModalExcluir,
  currentTech,
  chamarUsuario
}) {

  const [ status, setStatus ] = useState("")
  const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
  console.log("currentTech", currentTech);

  const deleteTech = (techId) => {
    console.log(techId);
    api.delete(`/users/techs/${techId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }})
    .then((Response) => {
        chamarUsuario();
        setModalExcluir(false)
        toast.success("Tecnologia deletada");
    })
    .catch((err) => {
      toast.error("Não foi possivel deletar a tecnologia")
    });
  };

   const updateTech = ( techId, status ) => {
     console.log(techId)
     console.log(status)
     const req = { "status": `${status}`}
    api
      .put(`/users/techs/${techId}`, req, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response)
        chamarUsuario();
        setModalExcluir(false)
        toast.success("Tecnologia atualizada");
      })
      .catch((err) => {
        toast.error("Não foi possivel atualizar a tecnologia")
      });
  };

  return (
    <Form>
      <Header>
        <h5>Tecnologia Detalhes</h5>
        <button onClick={() => setModalExcluir(false)}>x</button>
      </Header>
      <Span>Nome do Projeto</Span>
      <Input placeholder="tecnologia" />
      <Span>Status</Span>
      <Select onChange={(event) => setStatus(event.target.value)}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediario">Intermediario</option>
        <option value="Avançado">Avançado </option>
      </Select>

      <button onClick={() => updateTech(currentTech.id, status)} >Salvar alterações</button>
      <button onClick={() => deleteTech(currentTech.id)}>Excluir</button>
    </Form>
  );
}
