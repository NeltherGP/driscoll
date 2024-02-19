import { Params, redirect } from "react-router-dom";
import fetchRequest from "../utils/fetch";
import config from "../config";


export async function deleteUser({request,params}:{request:Request,params:Params}) {

  const userId = params.userId || "";

  const deleteUser = await fetchRequest("DELETE",new URL(`${config.API}/users/deleteUser/${userId}`))

  return redirect("/users");
}

