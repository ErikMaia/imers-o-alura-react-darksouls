import db from '../../../db.json'
import { NextApiRequest, NextApiResponse } from 'next'
function App(req:NextApiRequest,res:NextApiResponse){
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
      }
    
      res.setHeader('Access-Control-Allow-Credentials', true);
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    
    res.status(200).json(db)
}
export default App
