import styled from "styled-components";

export const Logo = styled.h2`
    color: #FF577F;
    font-size:18px;
    margin: 25px 0 25px 13px;
    @media(min-width: 800px){
        width: 200px;
        text-align: left;
        margin: 25px 0;
    }
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;    
    height: 80px;
    border-bottom: solid 1px #212529;
    @media(min-width: 800px){
        justify-content: space-around;
    }
`

export const Section = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: 711px;
    width: 100%;
`

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 100%;
    height: 131px;
    border-bottom: solid 1px #212529;
    @media(min-width: 800px){
        flex-direction: row;
        justify-content: space-around;
    }
`

export const H3 = styled.h3`
    font-weight: 700;
    font-size: 18px;
    color: #F8F9FA;
    margin-left: 20px;
    @media(min-width: 800px){
        text-align: left;
        margin: 30px 0;
    }
`

export const H4 = styled.h4`
    color: #868E96;
    font-weight: 400;
    font-size: 12px;
    margin-left: 20px;
    @media(min-width: 800px){
        width: 240px;
        text-align: right;
        margin: 30px 0;
    }
`
export const Div2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 80px;
    @media(min-width: 800px){
        justify-content: space-around;
    }
`
export const Tecnologias =styled.h3`
font-weight: 700;
    font-size: 18px;
    color: #F8F9FA;
    margin-left: 20px;
@media(min-width: 800px){
    width: 230px;
    text-align: left;
    margin: auto 0;
}
`

export const Corpo = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items:center;
`

export const Ul = styled.ul`
    background-color: #212529;
    width: 296px;
    padding: 6px 0;
    border-radius: 4px;
    @media(min-width: 800px){
        width: 779.73px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`

export const Li = styled.li`
    list-style: none;
    background-color: ${(props) => ( props.color === "black"? ( "#121214" ) : ( "#343B41" ))};
    margin: 16px 8.5px;
    height: 48.73px;
    width: 279px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4.06px;
    justify-content: space-between;
    @media(min-width: 800px){
        width: 742px;
        margin: 8px 0;
    }
`
export const Tec = styled.h3`
    font-weight: 700;
    font-size: 14.21px;
    color: #F8F9FA;
    margin-left: 12.8px;
`

export const Level = styled.h3`
    font-weight: 400;
    font-size: 12.18px;
    color: #868E96;
    margin-right: 13.2px;
`

export const Button = styled.button`
    background-color: ${(props) => (props.color === "pink"? ("#FF577F") : ((props.color === "gray"? ("#868E96") : ((props.color === "black"? ("#212529") : ("#59323F"))))))}};
    color: ${(props) => (props.color === "pink"? ("#fff") : ((props.color === "gray" || props.color === "black"? ("#F8F9FA") : ("#fff"))))}};
    width: ${(props) => (props.width + "px")};
    height: ${(props) => (props.height === 48? ("48px") : (props.height + "px"))};
    font-size: ${(props) => (props.fontS? (props.fontS + "px") : (16 + "px"))};
    margin-top: ${(props) => (props.margT? ( props.margT + "px") : ("auto"))};
    margin-right: ${(props) => (props.margR? ( props.margR + "px") : ("auto"))};
    margin-left: ${(props) => (props.margL?  ( props.margL + "px") : ("auto"))};
    margin-bottom: ${(props) => (props.margB? ( props.margB + "px") : ("auto"))};
    border-radius: 4.06px;
    border: none;
    cursor: pointer;
    padding: 0;
`

export const Btn = styled.button`
    background-color: ${(props) => ( props.color === "black"? ( "#121214" ) : ( "#343B41" ))};
    border: none;
    @media(min-width: 800px){
        margin: 0;
    }
`

export const Espace = styled.div`
    width: 240px;
`

export const Info = styled.h2`
    color: #fff;
    font-size: 20px;
`
