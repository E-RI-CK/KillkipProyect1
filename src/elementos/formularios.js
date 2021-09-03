import styled,{css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores = {
    borde: "#0075FF",
    error: "#bb2929",
    exito: "#1ed12d"
}
const Title = styled.header`
    font-size: 20px;
    font-weight: 900;
    margin: 40px;
`;
const Formulario = styled.form`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    @media (max-width: 900px){
        grid-template-columns: 1fr;
    }
`;

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

const GrupoInput = styled.div`
    position: relative;
    z-index: 90;
`;

const Input = styled.input`
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus {
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

    ${props => props.validation === 'true' && css`
        border: 3px solid transparent;
    `}

    ${props => props.validation === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}

`;

const LeyendaError = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;

    ${props => props.validation === 'true' && css`
        display: none;
    `}

    ${props => props.validation === 'false' && css`
        display: block;
    `}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
    position: absolute;
    right: 10px;
    bottom: 14px;
    z-index: 100;
    font-size: 16px;
    opacity: 0;

    
    ${props => props.validation === 'true' && css`
        display: block;
        color: ${colores.exito};
        opacity: 1;
    `}

    ${props => props.validation === 'false' && css`
        display: block;
        opacity: 1;
        color: ${colores.error}
    `}
`;

const TitleNames = styled.p`
    font-size: 14px;
    grid-column: span 3;
    margin: 10px;
    text-align: left;
`;
const Asterisk = styled(FontAwesomeIcon)`
    color: red;
    font-size: 8px;
    margin-left: 10px;
    margin-bottom: 5px;
`;
const ContenedorTerminos = styled.div`
    grid-column: span 3;

    input{
        margin: 10px;
    }

`;
const ContenedorBotonCentrado = styled.div`
    display: flex;
    flex-direction: column;//hacer que los elementos esten en forma de columna
    align-items: center; //centrar items
    grid-column: span 3;
`;

const Boton = styled.button`
    height: 45px;
    grid-column: span 1;
    line-height: 50px;
    width: 30%;
    background: #000;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: .1s ease all;
    &:hover{
        box-shadow:3px 0 30px rgba(163,163,163,1);
    }
`;

const MensajeExito = styled.p`
    font-size: 14px;
    color: ${colores.exito};
`;

const MensajeError = styled.div`
    height: 45px;
    line-height: 45px;
    background-color: #F66060;
    padding: 0px 15px;
    border-radius: 3px;
    grid-column: span 3;
    margin-top: 20px;
    border: solid 1px black;
    text-align: center;
    p{
        margin: 0px;
        margin-right: 30px;
    }

    b{
        margin-left: 10px;
    }
`;

const Description = styled.p`
    text-align: left;
    font-family: Arial, Helvetica, sans-serif;
    grid-column: span 3;
    font-weight: 300;
    font-size: 15px;
    margin-top: 50px;
    text-align: left;
`;

const Date = styled.input`
    grid-template-columns: 1fr 1fr 1fr;
    line-height: 45px;
    width: 100%;
    background: #fff;
    border-radius: 3px;
    height: 45px;
    line-height: 45px;
    padding: 0 40px 0 10px;
    transition: .3s ease all;
    border: 3px solid transparent;

    &:focus {
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163,163,163,0.4);
    }

    ${props => props.validation === 'true' && css`
        border: 3px solid transparent;
        background: rgb(232, 240, 254);
    `}

    ${props => props.validation === 'false' && css`
        border: 3px solid ${colores.error} !important;
    `}
`;

const ContenedorText = styled.div`
    z-index: 90;
`;


const DivBox1 = styled.p`

    position: relative;
    left: 240px;
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

const DivBox2 = styled.p`
    position: relative;
    left: 460.9px;
    bottom: 102.3px;
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

const DivBox3 = styled.p`
    position: relative;
    width: 210.21px;
    height: 85.59px;
    left: 681px;
    bottom: 205.5px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8.85374px;
    
    p{
        width: 219.38px;
        height: 48.2px;
        padding: 30px;
        padding-bottom: 25px;
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

const DivBox4 = styled.div`

    position: relative;
    width: 320px;
    height: 125px;
    right: 330px;
    top: 105px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8.85374px;

     Label{
        padding: 20px 0px 0px 0px;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 17.1018px;
        line-height: 24px;
        text-align: none;
        color: #454545;
    }
`;

export {
    Formulario,
    Label,
    GrupoInput,
    Input,
    LeyendaError,
    IconoValidacion,
    ContenedorTerminos,
    ContenedorBotonCentrado,
    Boton,
    MensajeExito,
    MensajeError,
    Asterisk,
    TitleNames,
    Title,
    Description,
    Date,
    ContenedorText,
    DivBox1,
    DivBox2,
    DivBox3,
    DivBox4
};