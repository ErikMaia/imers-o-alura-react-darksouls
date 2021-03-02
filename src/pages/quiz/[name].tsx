import { useReducer } from 'react'
import db from '../../../db.json'
import MainPage from '../../components/MainPaige'

export default function Main(){
    return(
    <MainPage db={db}/>)
}