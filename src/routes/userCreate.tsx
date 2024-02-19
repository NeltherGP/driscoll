import React,{useEffect,useState}  from "react";
import {Form, useLoaderData} from "react-router-dom";
import fetchRequest from "../utils/fetch";
import { User } from "../interfaces/User";
import { Params, NavigateFunction } from 'react-router';
import config from "../config";
import { getCurrentDate } from "../utils/tools";
import UserForm from "../components/userForm";

const UserCreate:React.FC = ()=>{
    
   

    return(<> 
            <UserForm userData={null}/>
        </>)
}

const createUser = async ({request,params}:{request:Request,params:Params}) => {
   console.log(params)
   const formData = await request.formData();
   const newUser = Object.fromEntries(formData);
   
    const createUsr = await fetchRequest('POST',new URL(`${config.API}/users/insertUser/`),newUser);

    return  1 ;
  };

export {createUser}

export default UserCreate;