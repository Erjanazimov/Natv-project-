import React from "react";
import {idtvchannel, targDate} from "../../../../redux/ContentBaner-news-reducer";

let ContentsTV = (props) => {
    let suma = React.createRef();
    let calen = React.createRef();
    let idPost = (e) => {
        let obj = {}
        let id = e.currentTarget.dataset.id;
        let price = e.currentTarget.dataset.price_image_ad;
        obj.id = id
        obj.price_image_ad = price
        obj.name = props.name;
        props.dispatch(idtvchannel(obj));

        sumatv()
    }

    let sumatv = () => {
        let objtarg = {};
        objtarg.suma = suma.current;
        objtarg.calen = calen.current;
        props.dispatch(targDate(objtarg))
    }


    return(
        <>
            <div onClick={idPost} data-id={props.id} data-price_image_ad={props.price_image_ad} data-bs-toggle="modal" data-bs-target="#add-modal-banner" >
                <div id="idTV" >
                    <div className="d-flex justify-content-between mt-3 flex-wrap" >
                        <div className="d-flex align-items-center news" >
                            <div className="img" >
                                <img src={props.image} />
                            </div>
                            <span className="one-title">{props.name}</span>
                        </div>
                        <div className="d-flex align-items-center mt-3 wid" >
                            <p ref={calen} className="show-dates rounded-start"></p>
                            <span className="img-calen" >
								</span>
                        </div>
                        <div className="d-flex align-items-center mx">
                            <div className="price-real" ref={suma} >0 сом</div>
                        </div>
                    </div>
                </div>
                <div className="border_end" > </div>
            </div>
        </>
    )
}

export default ContentsTV;