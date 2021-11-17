import React from "react";
import LogoPayment from "../../../Components/Form/LogoPayment/LogoPayment";
import { withTranslation } from "react-i18next";
import ModalDate from "../../../Components/ModalDate/ModalDate";
import {textsimvol} from "../../../redux/content-news-reducer";

const Blocktext = (props) => {
        let { t } = props;
        let newPostElement = React.createRef();

        let ChetSimol = () => {
            let text = newPostElement.current.value;
            props.dispatch(textsimvol(text))
        }

        return (

            <>
                <div className="pd-40 mn">
                    <div className="@media textarea-fons">
                        <div className="row">
                            <div className="@media">
                                <div className="text-title">
                                    <div className="row d-flex justify-content-between">
                                        <div className="d-flex justify-content-between">
                                            <h3>{t("TexarayObv")}</h3>
                                            <div className="text-right">
                                                {t("Simvol")} <span>
                                                {props.state.ContentNews.textSimvol.replace(/\s/g, '').length}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <textarea ref={newPostElement} className="text-enter" name="text"
                                  placeholder={t("placeholder")} onChange={ChetSimol}
                                  value={props.state.ContentNews.textSimvol}/>
                    </div>

                    <div className="@media cont">
                        <h3>{t("textZapoln")}</h3>
                        <p>{t("textZapoln2")}</p>
                        <ul>
                            <li>
                                {t("textZapoln3")}
                            </li>
                            <li>
                                {t("textZapoln4")}
                            </li>
                            <li>
                                {t("textZapoln5")}
                            </li>
                            <li>
                                {t("textZapoln6")}
                            </li>
                            <li>
                                <a href="#">{t("textZapoln7")}</a>
                            </li>
                        </ul>
                        <LogoPayment/>

                    </div>
                </div>
                <div className="pd-40 mt-5 pdb-40">
                    <div className="dflex">
                        <div className="step d-flex align-items-center">
                            <div className="numb">1</div>
                            <div className="text">
                                <p>
                                    {t("num1")}
                                </p>
                            </div>
                        </div>
                        <div className="step d-flex align-items-center">
                            <div className="numb">2</div>
                            <div className="text">
                                <p>
                                    {t("num2")}
                                </p>
                            </div>
                        </div>
                        <div className="step d-flex align-items-center">
                            <div className="numb">3</div>
                            <div className="text">
                                <p>
                                    {t("num3")}
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
                <ModalDate dispatch={props.dispatch} state={props.state}/>
            </>
        )
}

export default withTranslation() (Blocktext);