import React from "react";
import { withTranslation } from "react-i18next";
import {danyClient, InfoUsers, RasmestyReklam, resultSuma} from "../../../redux/content-news-reducer";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";

const InfoUser = (props) =>{
    const { t } = props;
    let tel = React.createRef();
    let email = React.createRef();
    let NameFam = React.createRef();

    let info = () => {
        let obj = {}
        obj.tel = tel.current.value;
        obj.email = email.current.value;
        obj.name = NameFam.current.value;
        props.dispatch(InfoUsers(obj))
    }

    let RaxmestReklam = () => {
        props.dispatch(RasmestyReklam())
        let options = {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(props.state.rasmetReklama)
        }
        fetch("https://na-tv.herokuapp.com/api/v1/order/save-order", options)
            .then(response => response.json())
            .then(data => {
                if (props.state.textSimvol === "") {
                   alert("Заполните текст вашего объявления");
                } else if (props.state.datetvChannel.length === 0){
                    alert("Выберите хотя бы одну дату показа");
                }  else if(props.state.infoUser.clientPhone === "") {
                    alert('Заполните номер телефона');
                }else if(data.status === 500){
                    alert("Заполните правильно e-mail");
                } else if(props.state.infoUser.clientName === ""){
                    alert("Не заполнено ФИО")
                } else {
                    showData(data)
                }}
            )
    }

    let showData = (data) => {
        props.dispatch(resultSuma(data));
       props.dispatch(danyClient(true));
    }

    return(
        <>
            <div className="pd-40">
                <div className="mb-4 mt-5 input-group d-flex justify-content-between">
                    <div className="mbm">
                        <label>{t("user")}</label>
                        <input type="text" ref={tel} onChange={info} name="family" className="form-control rounded input-ntv"
                               id="family" placeholder={t("userplac")} value={props.state.infoUser.clientPhone}/>
                    </div>
                    <div className="mbm">
                        <label>{t("user2")}</label>
                        <input type="text" ref={email} onChange={info} name="name" className="form-control rounded input-ntv"
                               id="name" placeholder={t("userplac2")} value={props.state.infoUser.clientEmail}/></div>
                    <div className="mbm">
                        <label>{t("user3")}</label>

                        <input type="text" ref={NameFam} onChange={info} name="middle" className="form-control rounded input-ntv"
                               id="middle" placeholder={t("userplac3")} value={props.state.infoUser.clientName}/>
                    </div>
                </div>
                <div>
                    <p>

                        {t("userteext")}
                        <br/>
                        {t("userteext2")}
                    </p>
                </div>
                <div className="btn-cont d-flex justify-content-between">
                    <div className="check-text">
                        <div>{t("userraz")}</div>
                    </div>

                    <div className= "div-btn mt-3">
                        <NavLink to={props.state.data ? "/summaoplata1" : {}} >
                        <input onClick={RaxmestReklam} type="button" name="" value={t("userBtn")}
                               className="btn-ntv"/>
                        </NavLink>
                    </div>
                </div>


                <hr/>
            </div>
        </>
    )
}

export default withTranslation() (InfoUser);
