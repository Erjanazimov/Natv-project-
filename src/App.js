import React from "react";
import Glavnaya from "./Natv/glavnaya/Glavnaya";
import "./Global.css";
import Glavnaya2 from "./Natv/glavnaya2/Glavnaya2";
import {BrowserRouter, Route} from "react-router-dom";
import Oproekte from "./Natv/Oproekte/Oproekte";
import Payment from "./Natv/Payment/Payment";
import Dlya_yuridicheskih_lic from "./Natv/Dlya_yuridicheskih_lic/Dlya_yuridicheskih_lic";
import Voprosotvet from "./Natv/Voprosotvet/Voprosotvet";
import Oferta from "./Natv/Oferta/Oferta";
import Pravila_zapolneniya_teksta from "./Natv/Pravila_zapolneniya_teksta/Pravila_zapolneniya_teksta";
import ModalDate from "./Components/ModalDate/ModalDate";
import SummaOplata1 from "./Natv/glavnaya/SummaOplata1/SummaOplata1";
import {ToastContainer} from "react-toastify";
import ModalDateBaner from "./Natv/glavnaya2/ModalDateBaner/ModalDateBaner";
import SummaOplata2 from "./Natv/glavnaya2/SummaOplata2/SummaOplata2";

const App = (props) => {
    return(
        <>
            <BrowserRouter>
             <Route path='/' render={ () => <Glavnaya dispatch={props.dispatch} state={props.store}/> } exact/>
              <Route path="/glavnaya2" render={ () => <Glavnaya2 dispatch={props.dispatch} state={props.store}/> } exact/>
                <Route path="/Oproekte" component={Oproekte} exact/>
                <Route path="/Payment" component={Payment} exact/>
                <Route path="/dlya_yuridicheskih_lic" component={Dlya_yuridicheskih_lic} exact />
                <Route path="/voprosotvet" component={Voprosotvet} exact />
                <Route path="/oferta" component={Oferta} exact />
                <Route path="/pravila_zapolneniya_teksta" component={Pravila_zapolneniya_teksta} exact />
                <Route path="/summaoplata1" render={ () => <SummaOplata1 dispatch={props.dispatch} state={props.store}/>} exact/>
                <Route path="/summaoplata2" render={ () => <SummaOplata2 dispatch={props.dispatch} state={props.store}/> } />
            </BrowserRouter>
        <ModalDate/>
            <ModalDateBaner/>
            {/*<ToastContainer/>*/}
        </>
    )
}

export default App;