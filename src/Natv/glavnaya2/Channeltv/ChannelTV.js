import React, {useEffect} from "react";
import { withTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {newsTvContent} from "../../../redux/ContentBaner-news-reducer";
import ContentsTV from "./ContentsTV/ContentsTV";
import ModalDateBaner from "../ModalDateBaner/ModalDateBaner";

let ChannelTV = (props) => {
    let dispatch = useDispatch()
    const loader = useSelector(state=> state.newsTvContent.isLoading)
    useEffect(()=>{
        dispatch(newsTvContent())
    },[])
    let newsContent = props.state.newsTvContent.map(item => <ContentsTV price_image_ad={item.price_image_ad} state={props.state} dispatch={props.dispatch} id={item.id} name={item.name} image={item.image}/>)
    const { t } = props;

    return(
        <>
            <div className="pd-40 channel-list-cont" >
                <input id="idd" type="hidden" />
                <h2>{t("tv")}</h2>
                <div className="channel-list">
                    <div className="title">
                        <div className="d-flex justify-content-between mt-4">
                            <div className="@media">
                                <label>{t("tv1")}</label>
                            </div>
                            <div className="@media">
                                <label className="date">{t("tv2")}</label>
                            </div>
                            <div className="@media mx">
                                <label> {t("tv3")}</label>
                            </div>
                        </div>
                    </div>
                    <div className="content-news">
                        {loader ? <h2>Loading...</h2>:
                            <div>
                                {newsContent}
                            </div>}

                        <div className="total">
                            <div className="more-channel">
                                <a href="#">{t("tv4")} </a>
                            </div>
                            <div className="total-block">
                                <div className='floatR'>{t("tv5")}<span
                                    className="fw-bold"> {props.state.obsh} сом</span></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
    </>
    )
}

export default  withTranslation()  (ChannelTV);