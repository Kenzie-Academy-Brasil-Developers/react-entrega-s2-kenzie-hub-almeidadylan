import styled from "styled-components";

export const Li = styled.li`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    width: 279px;
    height: 48.73px;
    background: ${(props) => (props.status.toLowerCase() === "avanced"? ("#343B41") : ("#121214") )};
    color: #F8F9FA;
`

export const H3 = styled.h3`
    font-weight: 700;
    font-size: 14.21px;
`

export const H4 = styled.h4`
    font-size: 12.18px;
    font-weight: regular;
`