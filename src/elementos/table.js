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
        padding: 6px 0px 0px 0px;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 17.1018px;
        line-height: 24px;
        text-align: none;
        color: #454545;
    }

`;

const DivBox7 = styled.div`

    position: relative;
    top: 165px;
    right: 430px;
    width: 320px;
    height: 125px;
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

    display: inline-flexbox;

    #input1{
        position: relative;
        right: 75px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 3;
        background: rgba(196, 196, 196, 0.3);
    }

    #input2{
        position: relative;
        right: 7px;    
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }


    #input3{
        position: relative;
        left: 290px;
        bottom: 80px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }
`;

const DivSelectTwo = styled.div`

    display: inline-block;

    #input4{
        position: relative;
        top: 135px;
        right: 415px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 2;
        background: rgba(196, 196, 196, 0.3);
    }

    #input5{
        position: relative;
        top: 135px;
        right: 348px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }

    #input6{
        position: relative;
        right: 50px;
        top: 53px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }
`;

const DivSelectThree = styled.div`

    display: inline-block;

    #input7{
        position: relative;
        bottom: 72px ;
        left: 265px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 1;
        background: rgba(196, 196, 196, 0.3);
    }

    #input8{
        position: relative;
        bottom: 72px;
        left: 330px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 90;
        background: rgba(196, 196, 196, 0.3);
    }

    #input9{
        position: relative;
        bottom: 152px;
        left: 630px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }
`;

const DivSelectFour = styled.div`

display: inline-block;

    #input10{
        position: relative;
        top: 60px;
        right: 75px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 1;
        background: rgba(196, 196, 196, 0.3);
    }

    #input11{
        position: relative;
        top: 60px;
        right: 9px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 90;
        background: rgba(196, 196, 196, 0.3);
    }

    #input12{
        position: relative;
        bottom: 20px;
        left: 290px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
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
    DivBox7,
    DivSelectOne,
    DivSelectTwo,
    DivSelectThree,
    DivSelectFour
}