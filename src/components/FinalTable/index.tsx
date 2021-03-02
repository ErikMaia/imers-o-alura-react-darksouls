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

interface Winner{
    name:string,
    rightQuestions:number
}
interface Props{
    thiswinner:Winner
}

export default function FinalTable({thiswinner}:Props) {
    const url = 'http://localhost:3000/api/winner';
    const [winners,setWinners] = useState<Winner[]>([])
    useEffect(()=>{
        let body = new FormData()
        body.append("name",thiswinner.name);
        body.append("rightQuestions",thiswinner.rightQuestions.toString());
        fetch(url,{method:'POST',body})
        .then((response)=>console.log(response))
        .catch((error)=>console.error(error))
        .finally(()=>{
            fetch(url)
            .then((response)=>{
                return response.json()
            })
            .then((res:Winner[])=>{
                setWinners(res)
            }).catch((err)=>console.log(err))
        })
        
    },[])

    if(!winners){
        return <Loading />
    }
    return (
        <Table>
            {winners.map(({name,rightQuestions})=>
            <tr>
                <td>{name}</td>
                <td>{rightQuestions}</td>
            </tr>)}
        </Table>
    )
}
