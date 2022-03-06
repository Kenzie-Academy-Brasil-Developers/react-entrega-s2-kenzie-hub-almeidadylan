import { Buttons } from "./style"

function Button({height=48, text, color, width = 345, margT=24.21, margR, margB=24.21, margL}){
    return (
        <Buttons 
            margT={margT} 
            margR={margR} 
            margB={margB} 
            margL={margL} 
            width={width} 
            color={color}
            height={height}
        >
            {text}
        </Buttons>
    )
}
//export default Button