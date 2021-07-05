import {useState,MouseEvent,useEffect} from 'react';
import {useRouter} from 'next/router'
import Widget from '../../components/Widget'
import QuizLogo from '../../components/QuizBackground'
import QuizBackground from '../../components/QuizBackground'
import Footer from '../../components/Footer'
import GitHubCorner from '../../components/GitHubCorner'
import QuizContainer from '../../components/QuizContainer'
import Question from '../../components/Question'
import Loading from '../../components/Loading'
import TelaFinal from '../../components/TelaDeGanhadores'
import {FaArrowLeft} from 'react-icons/fa'
import Link from 'next/link'
export default function Quiz({db}){
    const [currentState,setCurrentState] = useState<number>(0)
    const [indiceQuestion,setIndiceQuestion] = useState<number>(0);
    
    const [vitoria,setVitoria] = useState<number>(0);
    const router = useRouter();
    const {name} = router.query;
    const totalQuestions = db.questions.length
    const contVitoria=()=>{setVitoria(vitoria+1)}
    const selectOption = (e:MouseEvent)=>{
        if(indiceQuestion+1<totalQuestions){
            setIndiceQuestion(indiceQuestion+1)
        }
        else{
            setCurrentState(2)
        }
    }
    useEffect(()=>{
        setTimeout(()=>{
            setCurrentState(1);
        },1000)
    },[])
    return (
    <>
        <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
            <QuizLogo />
            <Widget>
            <Widget.Header>
                <Link href="/quiz">
                    <FaArrowLeft 
                        color="#fff" 
                        fontSize={15} 
                        style={{cursor:"pointer"}} />
                </Link>
                <h1 style={{marginLeft:"10px"}}>

                    Pergunta {' '}
                    {totalQuestions > indiceQuestion
                    ?indiceQuestion+1 : indiceQuestion}
                    /{totalQuestions} para {name}
                </h1>
            </Widget.Header>
            <Widget.Content>
                {currentState===0&&<Loading/>}
                {currentState===1&&
                <Question 
                    indiceQuestion={indiceQuestion} 
                    selectOption={selectOption} 
                    setVitoria={contVitoria}
                />}
                {currentState===2&&router.push(`/${router.query}/${vitoria}`)}
            </Widget.Content>
            </Widget>
            <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/ErikMaia" />
        </QuizBackground>
    </>
  );
}