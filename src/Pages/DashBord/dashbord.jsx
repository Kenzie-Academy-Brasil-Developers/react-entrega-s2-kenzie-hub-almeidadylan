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
  Info,
} from "../DashBord/style";
import { Modal } from "../../Components/modal/modal";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { ModalExcluir } from "../../Components/modalExcluir/";
import api from "../../services/api";

export function DashBord({
  authenticated,
  techs,
  setTechs,
  setAuthenticated,
}) {
  const [modal, setModal] = useState(false);
  const [modalExcluir, setModalExcluir] = useState(false);
  const [currentTech, setCurrentTech] = useState([]);


  const user = JSON.parse(localStorage.getItem("@KenzieHub:User")) || "";

  function chamarUsuario() {
    api
      .get(`/users/${user.id}`)
      .then((response) => {
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

  if(techs.length < 1){
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
              techs={techs}
              setTechs={setTechs}
              setModal={setModal}
            />
          )}
          {modalExcluir && (
            <ModalExcluir
              chamarUsuario={chamarUsuario}
              setModalExcluir={setModalExcluir}
              currentTech={currentTech}
            />
          )}
          <Ul>
            <Info>
              Vocẽ não possui nenhuma Tecnologia. Vá estudar!
            </Info>
          </Ul>
        </Corpo>
      </Section>
    );
  } else {
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
            techs={techs}
            setTechs={setTechs}
            setModal={setModal}
            />
          )}
          {modalExcluir && (
            <ModalExcluir
            chamarUsuario={chamarUsuario}
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
}
