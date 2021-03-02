import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import {FaCheckCircle, FaTimesCircle} from 'react-icons/fa'
import FinalTable from '../FinalTable'
import Link from 'next/link'
interface props{
    name:string,
    win:number
}

const WinnerScream = styled.div`
    margin-top:10px;
    margin-right: 0px;
    margin-left: 0px;
`
const LinkReturn = styled.div`
    text-decoration:none;
    color: #fff;
    text-align:center;
    font-size:.75rem;
    margin-top:15px;
    cursor:pointer;
`

const TelaFinal = ({ name, win }:props)=>{
    return(
        <WinnerScream>
            <p>Mandou bem, {name}!</p>
            <h2>Você Acertou {win} Parabéns!</h2>
            <FinalTable thiswinner={{name,rightQuestions:win}}/>
            <Button>ADICIONAR PROJETO</Button>
            <Link href='/quiz'>
                <LinkReturn>
                    Voltar para home
                </LinkReturn>
            </Link>
        </WinnerScream>
    )
}

export default TelaFinal