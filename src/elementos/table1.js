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

const DivSelectOneTable2 = styled.div`

    display: inline-flexbox;

    #input1{
        position: relative;
        left: 261px;
        top: 125px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 3;
        background: rgba(196, 196, 196, 0.3);
    }

    #input2{
        position: relative;
        top: 125px;
        left: 332px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }


    #input3{
        position: relative;
        top: 45px;
        left: 630px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        //background: rgba(196, 196, 196, 0.3);
        background: green;;
        
    }
`;

const DivSelectTwoTable2 = styled.div`

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

const DivSelectThreeTable2 = styled.div`

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

const DivSelectFourTable2 = styled.div`

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


export{
    Label,
    ContenedorText1,
    DivBox8,
    DivBox9,
    DivBox10,
    DivBox11,
    DivSelectOneTable2
}