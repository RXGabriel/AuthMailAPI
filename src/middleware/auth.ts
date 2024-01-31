import { Request, Response, NextFunction } from "express"

export const Auth ={
  private:(req:Request, res:Response, next:NextFunction) =>{
    let sucess = false

    if(sucess){
      next()
    }else{
      res.status(403)
      res.json({error: 'Acesso negado.'})
    }
  }
}