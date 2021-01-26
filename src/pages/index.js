import styled from 'styled-components'
import db from '../../db.json';
import Widget from '../components/Widget'
import QuizBackground from '../components/QuizBackground';
import Link from 'next/link';
import Head from 'next/head';

const Button = styled.div`
    height: 10vh;
    width: 15vw;
    background-color: ${db.theme.colors.primary};
    border-radius:25px;
    border: solid black;
    text-align: center;
    font-size:1.5rem;
    margin:80vh auto 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
    cursor: pointer;
    &:hover{
        border: none;
        padding: 5px;
    }
    
`

export default function Home(){
    return(
    <>
        <Head>
            <title>quiz dark souls</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <QuizBackground backgroundImage={db.bg}>
            <Link href='/quiz'>
                <Button>Quiz</Button>
            </Link>
        </QuizBackground>
    </>
    )
    
}