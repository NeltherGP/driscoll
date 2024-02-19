import React,{useEffect,useState}  from "react";
import { Form, Link, Params, useLoaderData, useParams } from 'react-router-dom';
import { useGet } from "../utils/useGet";
import config from "../config";
import { User } from "../interfaces/User";
import { useDelete } from "../utils/useDelete";
import fetchRequest from "../utils/fetch";
import { useTranslation } from "react-i18next";


const UserContent:React.FC = () =>{
    const {t} = useTranslation(); 
    
    const { userId } = useParams();
    const loadedUser = useLoaderData() as User;

    const { deleteData, response, isLoading:isDeleting, error:deleteError } = useDelete();

    const [userData,setUserData] = useState<User>({FirstName:"",LastName:"",Email:"",Created: "",_id:""});

   
   

    return(<>
            <div className="row justify-content-end">
                <div className="col-1">
                    
                    <Form method="post" action="destroy">
                        <button type="submit" className="btn btn-danger"><i className="bi bi-trash"></i></button>
                    </Form>
                </div>
                <div className="col-1">
                    <Link className="btn btn-primary" to={`/users/edit/${userId}`} ><i className="bi bi-pencil-square" ></i></Link>    
                </div>
            </div>

            {(loadedUser) ?
            <><p>{t("FirstName")}: {loadedUser.FirstName}</p>
             <p>{t("LastName")}: {loadedUser.LastName}</p>
             <p>{t("Email")}: {loadedUser.Email}</p>
             <p>{t("Created")}: {loadedUser.Created}</p></>
            : null
            }
    </>)
}

export const loadUserContent = async ({request,params}:{request:Request,params:Params})=>{

    const userId = params.userId;
    
    const user = await fetchRequest("GET",new URL(`${config.API}/users/${userId}`))

    return user;
}


export default UserContent;
