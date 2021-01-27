import {useState,MouseEvent} from 'react';
import {useRouter} from 'next/router';
import styled from 'styled-components';
import db from '../../../db.json';
import Widget from '../../components/Widget';
import QuizLogo from '../../components/QuizBackground';
import QuizBackground from '../../components/QuizBackground';
import Footer from '../../components/Footer';
import GitHubCorner from '../../components/GitHubCorner';
import QuizContainer from '../../components/QuizContainer';

const Option = styled.div`
    border: 1px double ${({ theme }) => theme.colors.primary};
    width: 283px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.mainBg};
    text-align: center;
    cursor: pointer;
    margin-top:10px;
    padding:10px 10px 10px 10px;
`
const Image = styled.img`
    height: 222px;
    width: 350px;
    right:500px;
    top: 25px;
    border-radius: 0px;
    margin:0 0 0 0;
    
`
export default function Quiz(){
    const [question,setQuestion] = useState(0);
    const [selected,setSelected] = useState<String[]>([]);
    const router = useRouter();
    const {name} = router.query;
    
    const selectOption = (e:MouseEvent)=>{
        setQuestion(question+1)
        setSelected([...selected,e.currentTarget.textContent])
    }
    return (
    <>
        <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
            <QuizLogo />
            <Widget>
            <Widget.Header>
                <h1>Pergunta {db.questions.length > question?question+1 : question}/{db.questions.length} para {name}</h1>
            </Widget.Header>
            <Widget.Content>    
                {db.questions.length > question &&db.questions[question].image? <Image src={db.questions[question].image}/>:''}
                <h1>{db.questions.length > question ? db.questions[question].title : 'Acabou'}</h1>
                {
                (db.questions.length>question)?
                     db.questions[question]
                        .alternatives
                        .map((valor)=>(
                            <Option 
                                key={valor} 
                                onClick={selectOption}>
                                    {valor}
                            </Option>
                        ))
                :<h1>você acertou ?</h1>

            }
                
            </Widget.Content>
            </Widget>
            <Footer />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/ErikMaia" />
        </QuizBackground>
    </>
  );
}