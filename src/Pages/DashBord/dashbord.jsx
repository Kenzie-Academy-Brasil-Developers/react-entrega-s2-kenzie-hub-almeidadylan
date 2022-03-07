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
  Btn,
  Tecnologias,
  Espace,
} from "../DashBord/style";
import { Modal } from "../../Components/modal/modal";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ModalExcluir } from "../../Components/modalExcluir/";
import api from "../../services/api";
import mais from "../../assets/+.svg";
//import { Btn } from "../../Components/modalExcluir/style";

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

  function chamarUsuario() {
    api
      .get(`/users/${user.id}`)
      .then((response) => {
        console.log(response);
        setTechs([...response.data.techs]);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    chamarUsuario();
  }, []);

  if (!authenticated) {
    return <Redirect to="/" />;
  }
  console.log(techs);

  return (
    <Section>
      <Header>
        <Logo>Kenzie Hub</Logo>
        <Button
          onClick={() => {
            localStorage.clear();
            setAuthenticated(false);
          }}
          color={"black"}
          width={55.49}
          height={32}
          margR={10.7}
          margL={1}
          margT={1}
          margB={1}
        >
          sair
        </Button>
      </Header>
      <Div>
          <H3> Olá, {user.name}</H3>
        <Espace>
          <H4>{user.course_module}</H4>
        </Espace>
      </Div>
      <Corpo>
        <Div2>
          <Tecnologias>Tecnologias</Tecnologias>
          <Button
            onClick={() => {
              setModal(true);
            }}
            color={"black"}
            width={32}
            height={32}
            margR={10.7}
            margL={1}
            margT={1}
            margB={1}
            fontS={30}
          >
            +
          </Button>
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
          {techs.map((Element, index) =>
            Element.status === "Avançado" ? (
              <Li key={index} color={"gray"}>
                <Btn
                  onClick={() => {
                    setModalExcluir(true);
                    setCurrentTech(Element);
                  }}
                  color={"gray"}
                >
                  <Tec>{Element.title}</Tec>
                </Btn>
                <Level>{Element.status}</Level>
              </Li>
            ) : (
              <Li key={index} color={"black"}>
                <Btn
                  onClick={() => {
                    setModalExcluir(true);
                    setCurrentTech(Element);
                  }}
                  color={"black"}
                >
                  <Tec>{Element.title}</Tec>
                </Btn>
                <Level>{Element.status}</Level>
              </Li>
            )
          )}
        </Ul>
      </Corpo>
    </Section>
  );
}
