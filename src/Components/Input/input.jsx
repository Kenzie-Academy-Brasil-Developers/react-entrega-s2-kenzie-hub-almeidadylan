import { Inputs } from "./style"
export const Input = ({tipo = "text", texto, res}) => {
    
    return (       
            <Inputs  res={res} type={tipo} placeholder={texto}/>
            
    )
}