import  styled  from "styled-components";

export const Form = styled.div`
    background-color: #212529;
    width: 296px;
    height: 320px;
    position: absolute;
    @media(min-width: 800px){
        border-radius: 4px;
        width: 369px;
        height: 360px;
    }
`

export const Header = styled.header`
    background-color: #343B41;
    width: 100%;
    height: 50.11px;
    margin-top: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    @media(min-width: 800px){
        justify-content: space-between;
        height: 55.11px;
    }

`

export const Btn = styled.button`
    font-family: 'Nunito', sans-serif;
    background-color: #343B41;
    color: #868E96;
    border: none;
    font-size: 18.83px;
    font-weight: bold;
    cursor: pointer;
    @media(min-width: 800px){
        margin: 0 20px 0 0;
    }
`
export const Span = styled.span`
    color: #F8F9FA;
    font-size: 9.77px;
    display: block;
    margin: 20px 0 0 20px; 
`

export const Input = styled.input`
    width: 243.76px;
    height: 25.37px;
    background-color: #343B41;
    border: solid 1px #F8F9FA;
    color: #F8F9FA;
    border-radius: 3.21px;
    margin: 17.92px auto 0 auto;
    padding: 5.5px 10px;
    font-style: regular;
    font-size:16px;
    @media(min-width: 800px){
        width: 298px;
        height: 35.37px;
    }
`

export const Button1 = styled.button`
    background-color: #59323F;
    color: #fff;
    width: 163.09px;
    height: 38.37px;
    font-size: 16px;
    margin: 16.6px auto auto auto;
    border-radius: 4.06px;
    border: none;
    cursor: pointer;
    padding: 8.25px auto;
    @media(min-width: 800px){
        width: 204px;
        height: 48.5px;
    }
`
export const Button2 = styled.button`
    background-color: #868E96;
    color: #F8F9FA;
    width: 78.35px;
    height: 38.37px;
    font-size: 16px;
    margin-top: ${(props) => (props.margT? ( props.margT + "px") : ("auto"))};
    margin-right: ${(props) => (props.margR? ( props.margR + "px") : ("auto"))};
    margin-left: ${(props) => (props.margL?  ( props.margL + "px") : ("auto"))};
    margin-bottom: ${(props) => (props.margB? ( props.margB + "px") : ("auto"))};
    border-radius: 4.06px;
    border: none;
    cursor: pointer;
    padding: 8.25px auto;
    @media(min-width: 800px){
        width: 98px;
        height: 48.5px;
    }
`
export const Select = styled.select`
    display: block;
    background-color: #343B41;
    margin: 17.92px auto 0 auto;
    color: #F8F9FA;
    border-radius: 3.21px;
    width: 265.76px;
    height: 38.37px;
    padding: 5.5px 10px;
    @media(min-width: 800px){
        width: 320px;
        height: 48.5px;
    }
`

export const H5 = styled.h5`
    @media(min-width: 800px){
        margin: 0 0 0 20px;
    }
`