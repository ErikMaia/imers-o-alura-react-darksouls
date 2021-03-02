import nc from 'next-connect';
import {NextApiRequest,NextApiResponse} from 'next'
interface Body{
    name:string,
    rightQuestions:string
}

const winners:Body[] = [];

const app = nc<NextApiRequest,NextApiResponse>()
.get((request,response)=>{
    return response.status(200).json(
        winners.sort(
            (a,b)=>(parseInt(a.rightQuestions) - parseInt(b.rightQuestions))
        )
    );
})
.post((request,response)=>{
    const {body} = request;
    winners.push(body);
    return response.status(200)
})
export default app
