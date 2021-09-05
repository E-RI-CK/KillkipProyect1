import styled,{css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


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

const Asterisk = styled(FontAwesomeIcon)`
    color: red;
    font-size: 8px;
    margin-left: 10px;
    margin-bottom: 5px;
`;

const TitleNames = styled.p`
    position: relative;
    top: 450px;
    font-size: 14px;
    grid-column: span 3;
    margin: 10px;
    text-align: left;
`;

const ContenedorText1 = styled.div`
    
`;

const DivBox8 = styled.p`
    position: relative;
    top: 480px;
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
        font-weight: bold;;
        font-size: 17.1018px;
        line-height: 24px;
        text-align: center;
        color: #454545;
    }
`;

const DivBox9 = styled.p`
    position: relative;
    top: 376px;
    left: 460px;
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
        font-size: 17.1018px;
        line-height: 24px;
        text-align: center;
        color: #454545;
    }

`;

const DivBox10 = styled.p`
    position: relative;
    top: 274px;
    left: 680px;
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
        font-size: 17.1018px;
        line-height: 24px;
        text-align: center;
        color: #454545;
    }

`;

const DivBox11 = styled.p`

    position: relative;
    top: 580px;
    right: 433px;
    width: 320px;
    height: 228px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8.85374px;

    Label{
        padding: 60px 0px 0px 0px;
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
    top: 830px;
    right: 774px;
    width: 320px;
    height: 228px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8.85374px;

    Label{
        padding: 45px 0px 0px 0px;
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
    top: 640px;
    right: 94px;
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
    top: 891px;
    right: 436px;
    width: 320px;
    height: 228px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8.85374px;

    Label{
        padding: 50px 0px 0px 0px;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 17.1018px;
        line-height: 24px;
        text-align: center;
        color: #454545;
    }

`;

const DivBox15 = styled.p`

    position: relative;
    top: 1140px;
    right: 766px;
    width: 320px;
    height: 228px;
    background: rgba(196, 196, 196, 0.3);
    border-radius: 8.85374px;

    Label{
        padding: 40px 0px 0px 0px;
        font-family: Arial;
        font-style: normal;
        font-weight: bold;
        font-size: 17.1018px;
        line-height: 24px;
        text-align: center;
        color: #454545;
    }

`;


const DivSelectOneTable3 = styled.div`

    display: inline-flexbox;

    #input25{
        position: relative;
        right: 75px;
        top: 415px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 3;
        background: rgba(196, 196, 196, 0.3);
    }

    #input26{
        position: relative;
        top: 415px;
        right: 8px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }


    #input27{
        position: relative;
        top: 335px;
        left: 285px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);

        
    }
`;

const DivSelectTwoTable3 = styled.div`

    display: inline-block;

    #input28{
        position: relative;
        top: 650px;
        right: 412px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 2;
        background: rgba(196, 196, 196, 0.3);
    }

    #input29{
        position: relative;
        top: 650px;
        right: 347px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }

    #input30{
        position: relative;
        right: 49px;
        top: 570px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }
`;

const DivSelectThreeTable3 = styled.div`

    display: inline-block;

    #input31{
        position: relative;
        top: 460px;
        left: 267px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 1;
        background: rgba(196, 196, 196, 0.3);
    }

    #input32{
        position: relative;
        top: 460px;
        left: 335px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 90;
        background: rgba(196, 196, 196, 0.3);
    }

    #input33{
        position: relative;
        top: 380px;
        left: 633px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }
`;

const DivSelectFourTable3 = styled.div`

display: inline-block;

    #input34{
        position: relative;
        top: 731px;
        right: 73px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 1;
        background: rgba(196, 196, 196, 0.3);
    }

    #input35{
        position: relative;
        top: 730px;
        right:  1px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 90;
        background: rgba(196, 196, 196, 0.3);
    }

    #input36{
        position: relative;
        top: 649px;
        left: 292px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }
`;

const DivSelectFiveTable3 = styled.div`

display: inline-block;

    #input37{
        position: relative;
        top: 971px;
        right: 413px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 1;
        background: rgba(196, 196, 196, 0.3);
    }

    #input38{
        position: relative;
        top: 971px;
        right:  339px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        z-index: 90;
        background: rgba(196, 196, 196, 0.3);
    }

    #input39{
        position: relative;
        top: 890px;
        right: 30px;
        padding: 0 20px 0 20px;
        width: 150px;
        height: 80px;
        background: rgba(196, 196, 196, 0.3);
    }
`;

export{
    Label,
    ContenedorText1,
    Asterisk,
    TitleNames,
    DivBox8,
    DivBox9,
    DivBox10,
    DivBox11,
    DivBox12,
    DivBox13,
    DivBox14,
    DivBox15,
    DivSelectOneTable3,
    DivSelectTwoTable3,
    DivSelectThreeTable3,
    DivSelectFourTable3,
    DivSelectFiveTable3
}