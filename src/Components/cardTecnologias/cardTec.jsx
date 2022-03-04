import { Li } from "./style"
export function cardTec({element}){

    return (
        <Li>
            <h3>{element.name}</h3> 
            <h4>{element.status}</h4>
        </Li>
    )
}