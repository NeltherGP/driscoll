import React  from "react";

import { Form } from "react-router-dom";
import { UserTable } from "../interfaces/UserTable";
import {User} from "../interfaces/User";

const Users:React.FC = () =>{

    const usersData:User[] = [{FirsName:"Nelther",LastName:"Galaz Perez",Email:"nelther.galaz@gmail.com",CreatedDate:"2024-02-17"}
                             ,{FirsName:"Oscar Omar",LastName:"Guerrero Silva",Email:"Oscar.omar@gmail.com",CreatedDate:"2024-02-17"}]

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
                    (UserList.length > 0) 
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
                    <td>{UserInfo.FirsName}</td>
                    <td>{UserInfo.LastName}</td>
                    <td>{UserInfo.Email}</td>
                    <td>{UserInfo.CreatedDate}</td>
                </tr>)

    return Row;
}

export default Users;