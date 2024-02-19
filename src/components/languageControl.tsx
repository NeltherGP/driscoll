import React from "react";
import { useTranslation } from "react-i18next";

const LanguageControl = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <>
    <label className="form-label p-2">Language: </label>
    <select className="form-select form-select-sm" value={i18n.language} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </select>
    </>
  );
};

export default LanguageControl;