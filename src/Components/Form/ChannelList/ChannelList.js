import React, {useEffect} from "react";
import { withTranslation } from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {contentsNews} from "../../../redux/content-news-reducer";
import ContentNews from "./ContentNews/ContentNews";

const ChannelList = (props) => {
    let dispatch = useDispatch()
    const loader = useSelector(state=> state.ContentNews.isLoading)
    useEffect(()=>{
      dispatch(contentsNews())
    },[])
    let summ = React.createRef()
    let ContentsNews = props.state.ContentNews.map(item => <ContentNews summaobsh={summ} state={props.state} dispatch={props.dispatch} id={item.id}
                                                                        price={item.price} channelName={item.channelName}
                                                                        photo={item.photo}/>)
    const { t } = props;
        return (
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
                            {ContentsNews}
                        </div>}

                            <div className="total">
                                <div className="more-channel">
                                    <a href="#">{t("tv4")} </a>
                                </div>
                                <div className="total-block">
                                    <div className='floatR'>{t("tv5")}<span
                                        className="fw-bold"  ref={summ}> 0  сом</span></div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        )
    }

export default withTranslation() (ChannelList);