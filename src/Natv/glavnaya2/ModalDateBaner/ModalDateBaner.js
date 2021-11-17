import React, { useState } from "react";
import 'react-calendar/dist/Calendar.css';
import DayPicker, { DateUtils } from "react-day-picker";
import 'react-day-picker/lib/style.css';
import {channels_tv, dataDany, obshsuma, sumatvchannel} from "../../../redux/ContentBaner-news-reducer";
let mas = []

class ModalDateBaner extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDays: [],
        }
        this.handleDayClick = this.handleDayClick.bind(this);
    }

    handleDayClick(day, { selected }) {
        const selectedDays = this.state.selectedDays.concat();
        if (selected) {
            const selectedIndex = selectedDays.findIndex(selectedDay =>
                DateUtils.isSameDay(selectedDay, day)
            );
            selectedDays.splice(selectedIndex, 1);
        } else {
            selectedDays.push(day);
        }

        this.setState({ selectedDays });
    }
    render() {
        let date = this.state.selectedDays;

        let masivDate = [];

        date.map(item => {
            let resDate = new Date(item);
            let mm = resDate.getMonth() + 1;
            let dd = resDate.getDate();
            let yy = resDate.getFullYear(); //dd-mm-yy
            let myDateString = yy + '-' + mm + '-' + dd ;
            masivDate.push(myDateString);
        })

        let Add_date = () => {
            this.props.dispatch(dataDany(masivDate));
            let sumatv = this.props.state.objidprice.price_image_ad;
            let daty = this.props.state.dataDany;
            let result = daty.length * sumatv;
            this.props.dispatch(sumatvchannel(result));
            this.props.state.targ.suma.innerHTML = result + " сом";
            this.props.state.targ.calen.innerHTML = masivDate + " сом";
            this.props.dispatch(obshsuma(result));
            this.state.selectedDays = [];
            this.props.dispatch(channels_tv());
        }

        return (
            <>
                <div className="modal fade " id="add-modal-banner" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="d-none">
                    </div>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="d-flex justify-content-end m-2">
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"/>
                            </div>
                            <div className="modal-body">
                                <div className="calendar">
                                    <DayPicker
                                        selectedDays={this.state.selectedDays}
                                        onDayClick={this.handleDayClick}
                                        />
                                </div>
                                <div className="d-flex justify-content-between ">
                                    <div>
                                        <input type="button" value="Отмена" className="btn bg-light text-dark"
                                               data-bs-dismiss="modal"/>
                                    </div>
                                    <div>
                                        <input onClick={Add_date} type="button" id="ok_date"
                                               className="btn bg-danger text-white" data-bs-dismiss="modal"
                                               aria-label="Close"
                                               value="Сохранить"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }
}

export default ModalDateBaner;