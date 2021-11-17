import React from "react";
import { withTranslation } from "react-i18next";

const Header = (props) => {

    const onLanguageChanged = (event) => {
        let language = event.currentTarget.value;
        props.i18n.changeLanguage(language);
    };
        return (
            <>
                <header className="pd-40 d-flex justify-content-between">
                    <div className="row">
                        <div className="@media">
                            <a href="#">
                                <img src="https://natv.kg/static/user/ima/logo.png" alt="" className="logo"/>
                            </a>
                        </div>
                    </div>

                    <div className="langs">
                        <button className={props.i18n.language === 'ru' ? 'active' : ''}  value="ru" onClick={(event) => onLanguageChanged(event)}>
                            ру
                        </button>
                        <button className={props.i18n.language === 'kg' ? 'active' : ''} value="kg" onClick={(event) => onLanguageChanged(event)}>
                            кг
                        </button>

                    </div>
                    <div className="@media">
                        <div className="text arct">
                            <h1> {props.TextBanner}</h1>
                        </div>
                    </div>
                </header>
            </>
        )
}

export default withTranslation() (Header);