import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from '../Button'
import {FaCheckCircle, FaTimesCircle} from 'react-icons/fa'
import FinalTable from '../FinalTable'
import Link from 'next/link'

interface Person{
    name:string,
    winer:string
}

interface Props{
    scoreboard:Person[],
    current:Person
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

const TelaFinal = ({scoreboard, current}:Props)=>{
    const {name,winer} = current
    return(
        <WinnerScream>
            <p>Mandou bem, {name}!</p>
            <h2>Você Acertou {winer} Parabéns!</h2>
            <FinalTable scoreboard={scoreboard}/>
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