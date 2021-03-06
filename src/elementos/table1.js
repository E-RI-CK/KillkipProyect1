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

const DivBox11 = styled.p`

    position: relative;
    top: 230px;
    right: 93px;
    width: 320px;
    height: 228px;
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

const DivBox12 = styled.p`

    position: relative;
    top: 470px;
    right: 433px;
    width: 320px;
    height: 228px;
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

const DivBox13 = styled.p`

    position: relative;
    top: 711px;
    right: 773px;
    width: 320px;
    height: 228px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8.85374px;

    Label{
        padding: 48px 0px 0px 0px;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 17.1018px;
        line-height: 24px;
        text-align: none;
        color: #454545;
    }

`;

const DivBox14 = styled.p`

    position: relative;
    top: 512px;
    right: 94px;
    width: 320px;
    height: 228px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8.85374px;

    Label{
        padding: 70px 0px 0px 0px;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 17.1018px;
        line-height: 24px;
        text-align: none;
        color: #454545;
    }

`;

const DivSelectOneTable2 = styled.div`

    display: inline-flexbox;

    #input13{
        position: relative;
        left: 261px;
        top: 60px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 3;
        background: rgba(196, 196, 196, 0.3);
    }

    #input14{
        position: relative;
        top: 60px;
        left: 332px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }


    #input15{
        position: relative;
        bottom: 20px;
        left: 630px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);

        
    }
`;

const DivSelectTwoTable2 = styled.div`

    display: inline-block;

    #input16{
        position: relative;
        top: 300px;
        right: 76px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 2;
        background: rgba(196, 196, 196, 0.3);
    }

    #input17{
        position: relative;
        top: 300px;
        right: 12px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }

    #input18{
        position: relative;
        left: 290px;
        top: 220px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
      
    }
`;

const DivSelectThreeTable2 = styled.div`

    display: inline-block;

    #input19{
        position: relative;
        top: 550px;
        right: 416px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 1;
        background: rgba(196, 196, 196, 0.3);
    }

    #input20{
        position: relative;
        top: 550px;
        right: 353px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 90;
        background: rgba(196, 196, 196, 0.3);
    }

    #input21{
        position: relative;
        top: 470px;
        right: 50px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }
`;

const DivSelectFourTable2 = styled.div`

display: inline-block;

    #input22{
        position: relative;
        top: 350px;
        left: 264px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 1;
        background: rgba(196, 196, 196, 0.3);
    }

    #input23{
        position: relative;
        top: 350px;
        left: 328px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 90;
        background: rgba(196, 196, 196, 0.3);
    }

    #input24{
        position: relative;
        top: 270px;
        left: 630px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }
`;


export{
    Label,
    ContenedorText1,
    DivBox8,
    DivBox9,
    DivBox10,
    DivBox11,
    DivBox12,
    DivBox13,
    DivBox14,
    DivSelectOneTable2,
    DivSelectTwoTable2,
    DivSelectThreeTable2,
    DivSelectFourTable2
}