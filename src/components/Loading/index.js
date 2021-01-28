import styled from 'styled-components';

const ImageGif = styled.img`
    width:100%;
    margin:0;
`;
const H1 = styled.h1`
    font-size:5rem;
    text-align:center;
    padding:20px;
`
const Loading = ()=>{
    return(
        <>
            <ImageGif src='https://pa1.narvii.com/6317/e5355d86fc6c9afbf0e9ee8024484c41c6126c91_hq.gif'/>
            <H1>Carregando...</H1>

        </>
    )
}
export default Loading