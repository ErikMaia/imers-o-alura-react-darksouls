import React from 'react';
import Widget from '../Widget';
import db from '../../../db.json'
import styled from 'styled-components'
const Link = styled.a`
    text-decoration:none;
    text-align:center;
    padding:auto,auto,auto,auto;
    & h3{
        color: white;
        padding: 0;
        margin: 0;
    }
`
export default function AnotherQuiz(){
    return(
        <Widget>
            <Widget.Header>Quiz da Galera</Widget.Header>
            
            <Widget.Content>
                {db.external.map((value)=>{
                    let nameOfQuiz = value.replace("https://","");
                    nameOfQuiz = nameOfQuiz.replace(".vercel.app/","");
                    nameOfQuiz = nameOfQuiz.replace(".","/");
                    return( 
                        <Link href={value} key={value}>
                            <h3>{nameOfQuiz}</h3>
                        </Link>)
                })}
            </Widget.Content>
        </Widget>
    )
}