import React, { useState, useEffect} from "react";
import { useTranslation } from "react-i18next";


function LoginPopIn ({isOpen, onClose}){
    const { t} = useTranslation();
    const [isSignup, setIsSignup] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
          setTimeout(() => setIsVisible(true), 10); // Ajoute un léger délai pour activer l'animation
        } else {
          setIsVisible(false);
        }
      }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignup){
            alert(<p> {t("sucessfull_insription")} </p>);
        }else{
            alert(<p> {t("sucessfull_login")} </p>);
        }
    };

    return (
        
        <div className={`login-popin-overlay ${isOpen ? "login-popin-open" : ""}`} onClick={onClose}>
                <div className={`login-popin-content ${isVisible ? "login-popin-content-visible" : ""}`}
                    onClick={(e) => e.stopPropagation()}
                >
                  <button className="login-popin-close-button" onClick={onClose}>
                      ✖
                  </button>
                  <h2> {isSignup ? t("sign_up"): t("login") }</h2>
                  <form onSubmit={handleSubmit}>
                    {isSignup && (
                        <div>
                            <label htmlFor="username"> {t("username")} </label>
                            <input type="text" id="username" placeholder={t("entrez_votre_nom")} required />
                        </div>
                    )}
                    <div>
                        <label htmlFor="email"> {t("email")} </label>
                        <input type="email" id="email" placeholder={t("entrez_votre_email")} required />
                    </div>
                    <div>
                        <label htmlFor="password"> {t("password")} </label>
                        <input type="password" id="password" placeholder={t("entrez_votre_mot_de_passe")} required />
                    </div>
                    
                    <button type="submit" className="login-popin-submit-button">
                        {isSignup ? t("sign_up") : t("login")} 
                    </button>
                  </form>
                    <p>
                        {isSignup ? t("already_have_account") : t("no_account")}
                        <button className="login-popin-button"  onClick={() => setIsSignup(!isSignup)}>
                            {isSignup ? t("login") : t("sign_up")} 
                        </button>
                    </p>
                </div>
            </div>
    )
    

}


export default LoginPopIn;