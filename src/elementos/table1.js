import styled,{css} from 'styled-components';



const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
}

const Label = styled.label`
    display: block;
    font-weight: 700;
    padding: 10px;
    min-height: 40px;
    cursor: pointer;

    ${props => props.validation === 'false' && css`
        color: ${colores.error}
    `}
`;


const ContenedorText1 = styled.div`
    
`;

const DivBox8 = styled.p`
    position: relative;
    top: 480px;
    right: 440px;
    width: 210.21px;
    height: 85.59px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8.85374px;
    

    p{
        width: 219.38px;
        height: 48.2px;
        padding: 20px;
        padding-left: 12px;
        padding-right: 20px;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        text-align: right;
        font-size: 17.1018px;
        line-height: 24px;
        text-align: center;
        color: #454545;
    }

`;

const DivBox9 = styled.p`
    position: relative;
    top: 376px;
    right: 220px;
    height: 85.59px;
    width: 210.21px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8.85374px;
  
    p{
        width: 219.38px;
        height: 48.2px;
        padding: 20px;
        padding-left: 12px;
        padding-right: 20px;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        text-align: right;
        font-size: 17.1018px;
        line-height: 24px;
        text-align: center;
        color: #454545;
    }

`;

const DivBox10 = styled.p`
    position: relative;
    top: 274px;
    width: 210.21px;
    height: 85.59px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8.85374px;
  
    p{
        width: 219.38px;
        height: 48.2px;
        padding: 20px;
        padding-top: 30px;
        padding-left: 12px;
        padding-right: 20px;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        text-align: right;
        font-size: 17.1018px;
        line-height: 24px;
        text-align: center;
        color: #454545;
    }

`;

const TextBoxTwoTable2 = styled.div`








`;




export{
    Label,
    ContenedorText1,
    DivBox8,
    DivBox9,
    DivBox10
}