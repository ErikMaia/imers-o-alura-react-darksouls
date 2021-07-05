import Final from '../../../components/TelaDeGanhadores'
import {readFileSync,writeFileSync} from 'fs'
import {GetServerSideProps} from 'next'
interface winer{
   name:string,
   winer:string
}
export default function FinalPage(props){
   return(<Final scoreboard={props.scoreboard} current={props.current}></Final>)
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
   const {query} = ctx
   let scoreboard = readFileSync("../../../../placar.json").toString()
   const currentPlayer:winer = {name:query[0].toLocaleString(),winer:query[1].toLocaleString()} 
   
   scoreboard = {... JSON.parse(scoreboard),currentPlayer}
   return{
      props:{scoreboard,current:currentPlayer}
   }
}
