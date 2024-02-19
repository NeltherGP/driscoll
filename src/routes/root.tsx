import React  from "react";
import { useTranslation } from "react-i18next";
import { Outlet,Link } from "react-router-dom";
import LanguageControl from "../components/languageControl";

const Root:React.FC =  ()=>{
    const {t} = useTranslation();
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src='/logo.png' alt="Driscoll's" />
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navigationBar">
                <div className="navbar-nav">
                    <Link className="nav-link active" aria-current="page" to={`/users`}>{t("usersNav")}</Link>
                    <Link className="nav-link active" aria-current="page" to={`/news/`}>{t("newsNav")}</Link>
                    <LanguageControl/>
                    
                </div>
                
                </div>
            </div>
        </nav>
        <div id="content" className="container">
          <Outlet></Outlet>
        </div>
      </>
    );
  }

export default Root;