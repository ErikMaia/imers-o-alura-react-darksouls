import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import Loading from '../Loading'
const Table = styled.table`
    overflow:scroll;
    width:283px;
    height:231px;
    border:solid ${({theme})=>theme.colors.primary};
    margin-top:20px;
    border-radius:${({theme})=>theme.borderRadius};
    box-shadow: 0 0 1em red;
    & tr{
        background-color: ${({theme})=>theme.colors.primary};
        margin:2px;
    }
    & :first-child{
        margin-top:10px
    }
`

interface Person{
    name:string,
    winer:string
}

interface Props{
    scoreboard:Person[],
}

export default function FinalTable({scoreboard}:Props) {
    return (
        <Table>
            {scoreboard.map(({name,winer})=>
            <tr>
                <td>{name}</td>
                <td>{winer}</td>
            </tr>)}
        </Table>
    )
}
