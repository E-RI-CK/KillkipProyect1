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
    right: 430px;
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

const DivBox5 = styled.div`

    position: relative;
    width: 320px;
    height: 125px;
    right: 770px;
    top: 240px;
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

const DivBox6 = styled.div`

    position: relative;
    width: 320px;
    height: 125px;
    top: 31px;
    right: 90px;
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


const DivSelectOne = styled.div`

    display: inline-block;

    .select1{
        right: 110px;
        padding: 0 20px 0 20px;
        width: 230px;
        height: 80px;
        z-index: 3;
        background: yellow;
    }

    .select2{
        left: 113px;
        bottom: 80px;
        padding: 0 20px 0 20px;
        width: 230px;
        height: 80px;
    }


    .select3{
        bottom: 160px;
        left: 330px;
        padding: 0 20px 0 20px;
        width: 230px;
        height: 80px;
        background: brown;
    }

    .select4{
        bottom: 160px;
        left: 330px;
        padding: 0 20px 0 20px;
        width: 230px;
        height: 80px;
        background: darkblue;
    }
`;

const DivSelectTwo = styled.div`

    display: inline-block;

    .select4{
        top: 800px ;
        right: 615px;
        padding: 0 20px 0 20px;
        width: 230px;
        height: 80px;
        z-index: 2;
    }

    .select5{
        
        left: 725px;
        top: 800px;
        padding: 0 20px 0 20px;
        width: 230px;
        height: 80px;
    }

    .select6{
        
        left: 945px;
        top: 800px;
        padding: 0 20px 0 20px;
        width: 230px;
        height: 80px;
    }
`;

const DivSelectThree = styled.div`

    display: inline-block;

    .select7{
       
        top: 935px ;
        right: 615px;
        padding: 0 20px 0 20px;
        width: 230px;
        height: 80px;
        z-index: 1;
    }

    .select8{
       
        left: 725px;
        top: 935px;
        padding: 0 20px 0 20px;
        width: 230px;
        height: 80px;
        z-index: 90;
    }

    .select9{
       
        left: 945px;
        top: 935px;
        padding: 0 20px 0 20px;
        width: 230px;
        height: 80px;
    }
`;

export {
    Label,
    ContenedorText,
    DivBox1,
    DivBox2,
    DivBox3,
    DivBox4,
    DivBox5,
    DivBox6,
    DivSelectOne,
    DivSelectTwo,
    DivSelectThree
}