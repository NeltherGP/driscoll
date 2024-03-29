import { Form, useParams } from "react-router-dom";
import { getCurrentDate } from "../utils/tools";
import { User } from "../interfaces/User";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const UserForm = ({userData}:{userData:User|null}) =>{
    
    const {t} = useTranslation(); 

    const [formValues, setFormValues] = useState<User>({
        FirstName: userData ? userData.FirstName || "" : "",
        LastName:  userData ? userData.LastName  || "" : "",
        Email:     userData ? userData.Email     || "" : "",
        Created:   userData ? userData.Created   || "" : getCurrentDate(),
        _id:       userData ? userData._id       || "" : ""
      }); 
    
      const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
      };
      
    return(
    
    <Form method="post">
    <label htmlFor="FirstNameInput" className="form-label">{t("FirstName")}:</label>
    <input type="text" className="form-control" id="FirstNameInput" name="FirstName" onChange={handleInputChange} value={formValues ? formValues.FirstName:""}/>

    <label htmlFor="LastNameInput" className="form-label">{t("LastName")}:</label>
    <input type="text" className="form-control" id="LastNameInput" name="LastName" onChange={handleInputChange} value={formValues ? formValues.LastName : ""}/>

    <label htmlFor="EmailInput" className="form-label">{t("Email")}:</label>
    <input type="email" className="form-control" id="EmailInput" name="Email" onChange={handleInputChange} value={formValues ? formValues.Email : ""} />

    <label htmlFor="CreatedInput" className="form-label">{t("Created")}:</label>
    <input type="date" className="form-control" id="LastNameInput" name="Created" value={formValues ? formValues.Created : ""} disabled/>
    <button type="submit" className="btn btn-primary mt-5">{t("Save")}</button>
    </Form>)
}

export default UserForm;