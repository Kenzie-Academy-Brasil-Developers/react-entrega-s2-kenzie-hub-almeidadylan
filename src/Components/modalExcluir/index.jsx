import { Btn, Header, Form, Span, Input, Select, H5, Button2, Button1 } from "./style";
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

  const deleteTech = (techId) => {
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
     const req = { "status": `${status}`}
    api
      .put(`/users/techs/${techId}`, req, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
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
        <H5>Tecnologia Detalhes</H5>
        <Btn onClick={() => setModalExcluir(false)} >
          x
        </Btn>
      </Header>
      <Span>Nome do Projeto</Span>
      <Input placeholder="tecnologia" />
      <Span>Status</Span>
      <Select onChange={(event) => setStatus(event.target.value)}>
        <option value="Iniciante">Iniciante</option>
        <option value="Intermediario">Intermediario</option>
        <option value="Avançado">Avançado </option>
      </Select>
      <Button1 onClick={() => updateTech(currentTech.id, status)} >
        Salvar alterações
      </Button1>
      <Button2 onClick={() => deleteTech(currentTech.id)} >
        Excluir
      </Button2>
    </Form>
  );
}
