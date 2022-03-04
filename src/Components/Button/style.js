import styled from "styled-components";

export const Buttons = styled.button`
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