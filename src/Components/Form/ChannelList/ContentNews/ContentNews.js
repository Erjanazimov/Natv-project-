import React from "react";
import { withTranslation } from "react-i18next";
import {idTVContent, SummaTvInput} from "../../../../redux/content-news-reducer";


let ContentNews = (props) => {
        let suma = React.createRef();
        let inpt = React.createRef();

        let idAdd = (e) => {
            let summaTvnput = {};
            let target = e.currentTarget.dataset.id;
            props.dispatch(idTVContent(target));
            summaTvnput.summa = suma.current;
            summaTvnput.inputText = inpt.current;
            summaTvnput.obshsum = props.summaobsh.current;
            props.dispatch(SummaTvInput(summaTvnput))
        }


        return(
                <div data-id={props.id} onClick={idAdd}  data-bs-toggle="modal" data-bs-target="#add-modal" >
                    <div id="idTV" >
                        <div className="d-flex justify-content-between mt-3 flex-wrap" >
                            <div className="d-flex align-items-center news" >
                                <div className="img" >
                                    <img
                                        src={props.photo} />
                                </div>
                                <span className="one-title">{props.channelName}</span>
                            </div>
                            <div className="d-flex align-items-center mt-3 wid" >
                                <p  ref={inpt} className="show-dates rounded-start"></p>
                                <span className="img-calen" >
								</span>
                            </div>
                            <div className="d-flex align-items-center mx">
                                <div ref={suma} className="price-real" >0 сом</div>
                            </div>
                        </div>
                    </div>
                    <div className="border_end" > </div>
                </div>


        )
}

export default withTranslation() (ContentNews);