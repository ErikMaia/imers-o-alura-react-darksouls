import { useState } from 'react'
import styled from 'styled-components'
import db from '../../../db.json'
import Button from '../Button'
import {FaCheckCircle, FaTimesCircle} from 'react-icons/fa'

interface props{
    indiceQuestion:number,
    selectOption:Function,
    setVitoria:Function
}
const Option = styled.div`
    border: 1px double ${({ theme }) => theme.colors.primary};
    width: 283px;
    left: 0px;
    top: 0px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.colors.mainBg};
    text-align: center;
    cursor: pointer;
    margin-top:5px;
    padding:10px 15px 15px 10px;
    opacity:1;
`
const Image = styled.img`
    height: 222px;
    width: 350px;
    right:500px;
    top: 25px;
    border-radius: 0px;
    margin:0 0 0 0;    
`


const Question = ({indiceQuestion,selectOption,setVitoria}:props)=>{
    const question = db.questions[indiceQuestion]
    const [option,setOption] = useState<string>('')
    const [win,setWin]= useState(null)
    
    const onButtonClick = (e:MouseEvent)=>{
        if (question.answer.toString() == option){
            setWin(true)
            setVitoria()
        }
        else{
            setWin(false)
        }
        
        setTimeout(()=>{
            setWin(null)
            setOption('')
            selectOption()
        },1000)
    }
    return(
        <>
            <Image src={question.image}/>
            <h1>{question.title}</h1>
                {question
                    .alternatives
                    .map((valor,index)=>
                        (
                            <Option key={index} onClick={()=>setOption(index.toString())} >
                                {valor}
                            </Option>
                        )
                    )
                }
                    {win === null && <Button onClick={onButtonClick} disabled={option===''}>CONFIRMAR</Button>}
                <div style={{textAlign:'center'}}>
                    {win === true && <FaCheckCircle fontSize={32} style={{color:'green', marginTop:'28px'}}/>}
                    {win === false && <FaTimesCircle fontSize={32} style={{color:'red', marginTop:'28px'}}/>}
                </div>
        </>
    )
}

export default Question