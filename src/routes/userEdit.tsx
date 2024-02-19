import React from 'react';
import fetchRequest from '../utils/fetch';
import config from '../config';
import { Params, useLoaderData } from 'react-router-dom';
import UserForm from "../components/userForm";
import { User } from '../interfaces/User';

const UserEdit:React.FC = () =>{

    const loadedUser = useLoaderData() as User;
    
    return (<>
                <UserForm userData={loadedUser} />
            </>);
}

export const loadUserContent = async ({request,params}:{request:Request,params:Params})=>{

    const userId = params.userId;
    
    const user = await fetchRequest("GET",new URL(`${config.API}/users/${userId}`))

    return user;
}

export const updateUser = async ({request,params}:{request:Request,params:Params}) => {
    console.log(params)
    const formData = await request.formData();
    const newUser = Object.fromEntries(formData);
    newUser["userId"]=params.userId||"";
    console.log({newUser})
     const createUsr = await fetchRequest('PUT',new URL(`${config.API}/users/editUser/`),newUser);
 
     return  1 ;
   };

export default UserEdit;