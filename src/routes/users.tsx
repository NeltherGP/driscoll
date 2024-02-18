import React,{useEffect,useState}  from "react";

import { Form } from "react-router-dom";
import {useGet} from '../utils/useGet'
import { UserTable } from "../interfaces/UserTable";
import {User} from "../interfaces/User";
import config from '../config'

const Users:React.FC = () =>{

 
    const [usersData,setUserData] = useState<User[]>([]);

    const { getData,data, isLoading, error } = useGet();


    useEffect(()=>{
        //fetch users data from the server
        const getUserData =async () => {
            await getData(new URL(`${config.API}/users/`));
        }
        getUserData()
    },[])

    useEffect(()=>{
        //when the server answer we set the user data to be render
        setUserData(data[0]);
    },[data])

    const usersTable = <UsersTable UserList={usersData}/>


    return(usersTable)
}

const UsersTable: React.FC<UserTable> = ({UserList})=>{

    return(<>
    <div className="table-responsive">
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>
                        First Name
                    </th>
                    <th>
                        Last Name
                    </th>
                    <th>
                        Email
                    </th>
                    <th>
                        Created
                    </th>
                </tr>
            </thead>
            <tbody>
                {
                    (UserList && UserList.length > 0) 
                    ?  UserList.map((UserItem)=>{
                        const x =1;
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
                </tr>)

    return Row;
}



export default Users;