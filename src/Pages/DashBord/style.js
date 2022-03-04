import styled from "styled-components";

export const Logo = styled.h2`
    color: #FF577F;
    font-size:18px;
    margin: 0px 0 0px 13px;
`

export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;    
    height: 100px;
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
    margin-left:30px;
`

export const H4 = styled.h4`
    color: #868E96;
    font-weight: 400;
    font-size: 12px;
    margin-left: 30px;
`
export const Div2 = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    align-items: center;
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
`

export const Li = styled.li`
    list-style: none;
    background-color: #121214;
    margin: 16px 8.5px;
    height: 48.73px;
    width: 279px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 4.06px;
    justify-content: space-between;
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
    font-size: 16px;
    margin-top: ${(props) => (props.margT? ( props.margT + "px") : ("auto"))};
    margin-right: ${(props) => (props.margR? ( props.margR + "px") : ("auto"))};
    margin-left: ${(props) => (props.margL?  ( props.margL + "px") : ("auto"))};
    margin-bottom: ${(props) => (props.margB? ( props.margB + "px") : ("auto"))};
    border-radius: 4.06px;
    border: none;
    cursor: pointer;
`