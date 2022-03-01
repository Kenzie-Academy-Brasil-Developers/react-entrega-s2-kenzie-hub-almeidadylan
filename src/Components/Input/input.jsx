import { Inputs } from "./style"
export const Input = ({tipo = "text", texto}) => {
    
    return (       
            <Inputs type={tipo} placeholder={texto}/>
            
    )
}