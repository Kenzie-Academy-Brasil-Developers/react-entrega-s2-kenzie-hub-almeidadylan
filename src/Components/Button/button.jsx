import { Buttons } from "./style"

function Button({text, color, width = 345, margT=24.21, margR, margB=24.21, margL}){
    return (
        <Buttons 
            margT={margT} 
            margR={margR} 
            margB={margB} 
            margL={margL} 
            width={width} 
            color={color}
        >
            {text}
        </Buttons>
    )
}
export default Button