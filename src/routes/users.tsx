import React,{useEffect,useState}  from "react";

import { Form } from "react-router-dom";
import {useGet} from '../utils/useGet'
import { UserTable } from "../interfaces/UserTable";
import {User} from "../interfaces/User";
import config from '../config'
import { Outlet,Link,useLoaderData } from "react-router-dom";
import fetchRequest from "../utils/fetch";
import { useTranslation } from "react-i18next";

const Users:React.FC = () =>{

    const {t} = useTranslation(); 
    
    const [usersData,setUserData] = useState<User[]>([]);

    const loadedUsers = useLoaderData() as User[];

    const { getData,data, isLoading, error } = useGet();


    useEffect(()=>{
        //fetch users data from the server
        const getUsersData =async () => {
            await getData(new URL(`${config.API}/users/`));
        }
        getUsersData()
    },[])

    useEffect(()=>{
        //when the server response we set the user data to be render
        setUserData(data[0]);
    },[data])

    const usersTable = <UsersTable UserList={loadedUsers}/>

    

    return(<>
           <div className="row mt-5">
           <div className="col-2">
                <Link className="btn btn-primary" to={`/users/createUser`}><i className="bi bi-person-plus-fill"></i>{t("NewUserBtn")}</Link>
            </div>
           </div>
           <div className="row ">
            <div className="col-6">
                {/* Displase list of users */}
                {usersTable}
            </div>
            <div className="col-6">
                {/* individual user content will be displayed here rendering userContent */}
                <Outlet></Outlet>
            </div>
           </div>
          </>)
}

const UsersTable: React.FC<UserTable> = ({UserList})=>{
    const {t} = useTranslation(); 
    return(<>
    <div className="table-responsive">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>
                        {t("FirstName")}
                    </th>
                    <th>
                        {t("LastName")}
                    </th>
                    <th>
                        {t("Email")}
                    </th>
                    <th>
                        {t("Created")}
                    </th>
                    <th>
                        {t("Actions")}
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    (UserList && UserList.length > 0) 
                    ?  UserList.map((UserItem)=>{
                        
                        return (<UserRow UserInfo={UserItem}/>);
                    })
                    : "Data not availabe"
                }
            </tbody>
        </table>
    </div>
    
    </>)
}

const UserRow:React.FC<{UserInfo:User}>= ({UserInfo})=>{
    
    const Row = (<tr>
                    <td>{UserInfo.FirstName}</td>
                    <td>{UserInfo.LastName}</td>
                    <td>{UserInfo.Email}</td>
                    <td>{UserInfo.Created}</td>
                    <td><Link to={`/users/${UserInfo._id}`} className="btn btn-sm btn-primary"><i className="bi bi-eye-fill"></i></Link></td>
                </tr>)

    return Row;
}

export const usersLoader = async ()=>{
    const usersData = await fetchRequest('GET',new URL(`${config.API}/users/`))
   
    return usersData;
}




export default Users;