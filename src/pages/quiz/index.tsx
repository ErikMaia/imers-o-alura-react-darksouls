import {useState} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import db from '../../../db.json'
import Widget from '../../components/Widget'
import QuizLogo from '../../components/QuizBackground'
import QuizBackground from '../../components/QuizBackground'
import Footer from '../../components/Footer'
import GitHubCorner from '../../components/GitHubCorner'
import QuizContainer from '../../components/QuizContainer'
import Button from '../../components/Button'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 350px;
    height: 222px;
    & button,input{
        margin: 20px 0 0 25px;
        width: 300px;
    }
    & input{
        height: 38px;
    }
    & p{
        padding: 20px 20px;
    }


`

export default function Quiz(){
    const [name,setName] = useState<String>('')
    const router = useRouter()
    const inputChange = (e) => {setName(e.target.value)}
    const formSend = (e) => {
        e.preventDefault()
        if(name.length > 0){
            router.push(`/quiz/${name}`)
        }
    }
    
    return (
    <>
        <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
            <QuizLogo />
            <Widget>
            <Widget.Header>
                <h1>{db.title}</h1>
            </Widget.Header>
            
                <Form onSubmit={formSend}>
                    <p>{db.description}</p>
                    <input type="text" onChange={inputChange}/>
                    <Button type='submit' disabled={name.length===0}>Jogar</Button>
                </Form>
            
            </Widget>
            <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/ErikMaia" />
        </QuizBackground>
    </>
  );
}