import { Link, useParams } from "react-router-dom";
import {
  Section,
  Header,
  Logo,
  Div,
  H3,
  H4,
  Div2,
  Corpo,
  Li,
  Ul,
  Tec,
  Level,
  Button,
} from "../DashBord/style";
import { Modal } from "../../Components/modal/modal";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ModalExcluir } from "../../Components/modalExcluir/";
import api from "../../services/api";

export function DashBord({
  authenticated,
  BD,
  techs,
  setTechs,
  setAuthenticated,
}) {
  const [modal, setModal] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);
  const [currentTech, setCurrentTech] = useState([]);

  const params = useParams();

  const user = JSON.parse(localStorage.getItem("@KenzieHub:User")) || "";

    function chamarUsuario(){
        api.get(`/users/${user.id}`)
        .then((response) => {
        console.log(response)
        setTechs([...response.data.techs])
    })
    .catch((err) => console.log(err))
    }

  useEffect(() => {
    chamarUsuario()
  }, [])

  if (!authenticated) {
    return <Redirect to="/" />;
  }
  //console.log(BD);

  return (
    <Section>
      <Header>
        <Logo>Kenzie Hub</Logo>
        <button
          onClick={() => {
            localStorage.clear();
            setAuthenticated(false);
          }}
        >
          sair
        </button>
      </Header>
      <Div>
        <H3> Olá, {user.name}</H3>
        <H4>{user.course_module}</H4>
      </Div>
      <Corpo>
        <Div2>
          <H3>Tecnologias</H3>
          <button
            onClick={() => {
              setModal(true);
            }}
          >
            +
          </button>
        </Div2>
        {modal && (
          <Modal
          chamarUsuario={chamarUsuario}
            techs={techs}
            setTechs={setTechs}
            BD={BD}
            setModal={setModal}
          />
        )}
        {modalExcluir && (
          <ModalExcluir
          chamarUsuario={chamarUsuario}
            techs={techs}
            setTechs={setTechs}
            BD={BD}
            setModalExcluir={setModalExcluir}
            currentTech={currentTech}
          />
        )}
        <Ul>
          {techs.map((Element, index) => (
            <Li key={index}>
              <button
                onClick={() => {
                  setModalExcluir(true);
                  setCurrentTech(Element);
                }}
              >
                <h5>{Element.title}</h5>
              </button>
              <h6>{Element.status}</h6>
            </Li>
          ))}
        </Ul>
      </Corpo>
    </Section>
  );
}
