import React from "react";
import { withTranslation } from "react-i18next";
import {dataDany, linkAdd, RasmestRek} from "../../../redux/ContentBaner-news-reducer";
import {NavLink} from "react-router-dom";
import {toast} from "react-toastify";

const InfoUserBanner2 = (props) =>{
    const { t } = props;
    let tel = React.createRef();
    let email = React.createRef();
    let fio = React.createRef();

    let RasmestyReklamBanner2 = () => {
        let url = "https://natv-apps.herokuapp.com/api/v1/create-order/"
        let userData = {};
        userData.name = fio.current.value;
        userData.last_name = "edwe";
        userData.phone_number = tel.current.value;
        userData.image = props.state.load_img;
        userData.email = email.current.value;
        userData.text = "de";
        userData.total_price = props.state.obsh;
        userData.channels = props.state.channels

        if (userData.image === ""){
           alert("Загрузите изображение")
        } else if (props.state.dataDany.length === 0){
           alert("Выберите хотя бы одну дату показа");
        } else if (userData.phone_number === ""){
            alert('Заполните номер телефона');
        } else if (userData.email === ""){
            alert("Заполните правильно e-mail");
        } else if (userData.name === ""){
            alert("Не заполнено ФИО")
        } else {
            let options = {
                method: "POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userData)
            }

            fetch(url, options)
                .then(response => response.json())
                .then(data => addRasmest(data));
        }

    }

    let addRasmest = (data) => {
        props.dispatch(RasmestRek(data));
        props.dispatch(linkAdd());
    }

    return(
        <>
            <div className="pd-40">
                <div className="mb-4 mt-5 input-group d-flex justify-content-between">
                    <div className="mbm">
                        <label>{t("user")}</label>
                        <input ref={tel} type="text"  name="family" className="form-control rounded input-ntv"
                               id="family" placeholder={t("userplac")}/>
                    </div>
                    <div className="mbm">
                        <label>{t("user2")}</label>
                        <input ref={email} type="text" name="name" className="form-control rounded input-ntv"
                               id="name" placeholder={t("userplac2")} /></div>
                    <div className="mbm">
                        <label>{t("user3")}</label>

                        <input ref={fio} type="text" name="middle" className="form-control rounded input-ntv"
                               id="middle" placeholder={t("userplac3")}/>
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
                    <div className="div-btn mt-3">

                        <NavLink to={props.state.link}>
                            <input onClick={RasmestyReklamBanner2} type="button" name="" value={t("userBtn")}
                            className="btn-ntv"/>
                            </NavLink>
                    </div>
                </div>


                <hr/>
            </div>
        </>
    )
}

export default withTranslation() (InfoUserBanner2);
