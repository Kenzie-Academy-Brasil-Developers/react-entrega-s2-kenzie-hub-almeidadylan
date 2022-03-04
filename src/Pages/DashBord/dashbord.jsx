import { useParams } from "react-router-dom";
import { Section, Header, Logo, Div, H3, H4, Div2, Corpo, Li, Ul, Tec, Level, Button } from "../DashBord/style";
//import Button from "../../Components/Button/button";
import { Modal } from "../../Components/modal/modal";
import { useState } from "react"
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

export function DashBord({ authenticated, BD, setDB }){

    const [ modal, setModal ] = useState(false);

    const params = useParams();

    if(!authenticated){
        return <Redirect to="/" />
    }
    
    return (
        <Section>
            <Header>
                <Logo>Kenzie Hub</Logo>
                <Button height={32}  color={"black"} width={55.49} margR={10.5} margT={0} margB={0} margL={1}>sair</Button>
            </Header>
            <Div>
                <H3> Olá, {params.name}</H3>
                <H4>{BD.course_module}</H4>
            </Div>
            <Corpo>
                <Div2>
                    <H3>Tecnologias</H3>
                    <Button onClick={() => (setModal(true))} color={"black"} width={32.49} height={32} margR={1} margL={1}> +</Button>
                </Div2>
                {modal? (<h2>oi</h2>) : (null)}
            <Ul>
                {(BD.techs).map((Element) => (
                    <Li>
                        <Tec>{Element.title}</Tec>
                        <Level>{Element.status}</Level>
                    </Li>
                ))}
            </Ul>
            </Corpo>
        </Section>
    )
}