import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    height: 711px;
    width: 450px;
    @media(min-width: 700px){
        height: 800px;
    }
`
export const Logo = styled.h2`
    color: #FF577F;
    font-size:18px;
    margin: 30px 0px 30px 10px;
    @media(min-width: 700px){
        margin: 30px 0 30px 0;
    }

`
export const Div = styled.div`
    color: gray;
    font-size: 14px;
`
export const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 20rem;
    align-items: baseline;    
    @media(min-width: 700px){
        width: 370px;
    }
`

export const Form = styled.form`
    background-color: #212529;
    display: flex;
    flex-direction: column;
    height: 570px;
    width: 295.83px;
    border-radius: 4px;
    justify-content: center;
    @media(min-width: 700px){
        width: 380px;
        height: 811px;
    }
`
export const Titulo = styled.h2`
    color: #F8F9FA;
    font-size: 14.44px;
    margin: 42x auto 0 auto;
`

export const Span = styled.span`
    text-align: left;
    margin-top: 11px;
    font-size: 12.18px;
`

export const H6 = styled.h6`
    margin: 20px 0 0 0;
    color: #868E96;
    text-decoration: none;
    font-size:12px;
`
export const H5 = styled.span`
    margin-left: 22.5px;
    color:red;
    font-size: 12.18px;
`
export const Input = styled.input`
    width: 240px;
    height: 25.5px;
    background-color: #343B41;
    border: solid 1px #F8F9FA;
    color: #F8F9FA;
    border-radius: 3.21px;
    margin: 10px auto 0 auto;
    padding: 5.5px 10px;
    font-style: regular;
    font-size:16px;
    @media(min-width: 700px){
        width: 307.93px;
        height: 35.5px;
    }
`

export const Description = styled.div`
    display: flex;
    flex-direction: row;
    height: 38px;
    margin: 0 0 0 22.5px;
    width: 370px;
    align-items: flex-end;
    justify-content: flex-start;
`

export const Button = styled.button`
    background-color: ${(props) => (props.color === "pink"? ("#FF577F") : ((props.color === "gray"? ("#868E96") : ((props.color === "black"? ("#212529") : ("#59323F"))))))}};
    color: ${(props) => (props.color === "pink"? ("#fff") : ((props.color === "gray" || props.color === "black"? ("#F8F9FA") : ("#fff"))))}};
    width: ${(props) => (props.width + "px")};
    height: ${(props) => (props.height === 48? ("48px") : (props.height + "px"))};
    font-size: 14px;
    margin-top: ${(props) => (props.margT? ( props.margT + "px") : ("auto"))};
    margin-right: ${(props) => (props.margR? ( props.margR + "px") : ("auto"))};
    margin-left: ${(props) => (props.margL?  ( props.margL + "px") : ("auto"))};
    margin-bottom: ${(props) => (props.margB? ( props.margB + "px") : ("auto"))};
    border-radius: 4.06px;
    border: none;
    cursor: pointer;
    @media(min-width: 700px){
        width: 329.93px;
        height: 48.5px;
        margin: 22.23px auto 20.21px auto;
    }
`

export const Select = styled.select`
    width: 260px;
    height: 38.5px;
    margin: 10px auto;
    color: #F8F9FA;
    background-color: #343B41;
    border-radius: 3.21px;
    padding: 5.5px 10px;
    @media(min-width: 700px){
        width: 329.93px;
        height: 48.5px;
    }
`

export const Btn = styled.button`
    background-color: ${(props) => (props.color === "pink"? ("#FF577F") : ((props.color === "gray"? ("#868E96") : ((props.color === "black"? ("#212529") : ("#59323F"))))))}};
    color: ${(props) => (props.color === "pink"? ("#fff") : ((props.color === "gray" || props.color === "black"? ("#F8F9FA") : ("#fff"))))}};
    width: ${(props) => (props.width + "px")};
    height: ${(props) => (props.height === 48? ("48px") : (props.height + "px"))};
    font-size: 14px;
    margin-top: ${(props) => (props.margT? ( props.margT + "px") : ("auto"))};
    margin-right: ${(props) => (props.margR? ( props.margR + "px") : ("auto"))};
    margin-left: ${(props) => (props.margL?  ( props.margL + "px") : ("auto"))};
    margin-bottom: ${(props) => (props.margB? ( props.margB + "px") : ("auto"))};
    border-radius: 4.06px;
    border: none;
    cursor: pointer;
    @media(min-width: 700px){
        height: 38.5px;
    }
`