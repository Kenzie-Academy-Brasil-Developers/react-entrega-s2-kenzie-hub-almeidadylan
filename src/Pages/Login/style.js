import styled from "styled-components";

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 600px;
    width: 400px;
    justify-content: flex-start;
    align-items: center;
`
export const Logo = styled.h2`
    color: #FF577F;
    font-size:18px;
    margin: 20px 0 40px 0 ;
`
export const Div = styled.div`
    color: gray;
    font-size: 14px;
`

export const Form = styled.form`
    background-color: #212529;
    display: flex;
    flex-direction: column;
    height: 450px;
    width: 296px;
    border-radius: 4px;
    justify-content: center;
    @media(min-width: 700px){
        width: 396px;
        height: 502px;
    }
`
export const Titulo = styled.h2`
    color: #F8F9FA;
    font-size: 14.44px;
    margin: 0px auto 0 auto;
`

export const Span = styled.span`
    text-align: left;
    margin-left: 22.5px;
    margin-top: 26.67px;
    font-size: 12.18px;
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
    padding: 8.25px 20px;
    @media(min-width: 700px){
        width: 334px;
        height: 48px;
    }
`

export const Input = styled.input`
    width: 243px;
    height: 35.5px;
    background-color: #343B41;
    border: solid 1px #F8F9FA;
    color: #F8F9FA;
    border-radius: 3.21px;
    margin: 10px auto;
    padding: 5.5px 10px;
    font-style: regular;
    font-size:16px;
    @media(min-width: 700px){
        width: 309.93px;
    }
`

