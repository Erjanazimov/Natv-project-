import React from "react";
import 'react-toastify/dist/ReactToastify.css';

let TEXT_SIM = "TEXT-SIMVOL"
let ID_CHANNEL = "ID-CHANNEL"
let DATE_CHANNEL = 'DATE-CHANNEL'
let DATE_FETCH_SUMMA = "DATE-FETCH-SUMMA"
let SUMMA_TV_INPUT = "SUMMA-TV-INPUT";
let INFO_USER = "INFO-USER";
let RASMET_REKLAMA = "RASMESTY-REKLAMA";
let CONTENTS_NEWS = "CONTENTS-NEWS";
let TOGGLE_LOADING = "TOGGLE_LOADING";
let SUMAVSEX = "SUMA-VSEX";
let DANY_CLIENT = "DANY-CLIENT";
let RESULT_SUMA = "RESULT-SUMA";
let base_url = "https://na-tv.herokuapp.com/api/v1/TvChannel/all-channels";
let mas = []

let initialState = {
    ContentNews:[],
    summaTV: 0,
    SummaTVs: 0,
    textSimvol: "",
    idTvChannel: 0,
    datetvChannel: [],
    summaTvInput: {},
    total: 0,
    infoUser: {
        clientEmail: "",
        clientName: "",
        clientPhone: ""
    },
    summavsex: 0,
    rasmetReklama: {},
    danyClienta: {},
    resultSuma: {},
    data: false,
    perehod: false,
    isLoading: false,
}



let ContentNewsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TEXT_SIM:
            state.textSimvol = action.newText
            return state;
        case ID_CHANNEL:
            state.idTvChannel = action.idChannel
            return state;
        case DATE_CHANNEL:
            state.datetvChannel = action.dateChannel
            return state;
        case DATE_FETCH_SUMMA:
            state.summaWithoutDiscount = action.dateChannel
            return state;
        case SUMMA_TV_INPUT:
            state.summaTvInput = action.summatvinput
            return state;
        case INFO_USER:
            state.infoUser.clientPhone = action.infouser.tel;
            state.infoUser.clientEmail = action.infouser.email;
            state.infoUser.clientName = action.infouser.name
            return state;
        case RASMET_REKLAMA:
            let objChannel = {};
            let uniqueArray = removeDuplicates(mas, "channelId");
            objChannel.adText = initialState.textSimvol;
            objChannel.channels = uniqueArray;
            objChannel.clientEmail = initialState.infoUser.clientEmail;
            objChannel.clientName = initialState.infoUser.clientName;
            objChannel.clientPhone = initialState.infoUser.clientPhone;
            state.rasmetReklama = objChannel
            return state
        case CONTENTS_NEWS:
            state.ContentNews = action.news
            return state
        case TOGGLE_LOADING:
            state.isLoading = action.loading
            return state
        case SUMAVSEX:
            state.summavsex = ""
                return state
        case DANY_CLIENT:
            state.data = action.dany
            return state
        case RESULT_SUMA:
            state.resultSuma = action.obsh
            return state
        default: return state;
    }
}

export let contentsNews = () => {
    return async dispatch =>{
        dispatch({type: TOGGLE_LOADING, loading: true})
        await fetch(base_url)
            .then(async response =>{
               const data = await response.json()
                dispatch({type: CONTENTS_NEWS, news: data})
            })
        dispatch({type: TOGGLE_LOADING, loading: false})
    }
}


export let textsimvol = (text) => {
    return {type: TEXT_SIM, newText: text}
}

export let idTVContent = (idTV) => {
    return {type: ID_CHANNEL, idChannel: idTV}
}

export let dateChannel = (dateChannel) => {
    return{type: DATE_CHANNEL, dateChannel: dateChannel}
}


function removeDuplicates(originalArray, prop) {
    let newArray = [];
    let lookupObject  = {};

    for(let i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for(let i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}


export let resdateobjsuma = () => {
    let obj = {};
    let resTV = {}
    let urlSumma = "https://na-tv.herokuapp.com/api/v1/order/get-summa";
    obj.channelId = initialState.idTvChannel;
    obj.dates = initialState.datetvChannel;
    obj.text = initialState.textSimvol;
    resTV.channelId = initialState.idTvChannel;
    resTV.days = initialState.datetvChannel;
    mas.push(resTV)
    let options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    }

    fetch(urlSumma, options)
        .then(response => response.json())
        .then(date => AddSumaChannel(date))

    return{type: DATE_FETCH_SUMMA, dateChannel: 0}
}

let AddSumaChannel = (date) => {
    if (date.summaWithDiscount > 0) {
        initialState.summaTvInput.summa.innerHTML = `${date.summaWithDiscount} сом <span class="price_old">${date.summaWithoutDiscount} сом</span>`;
        initialState.total += date.summaWithDiscount;
    } else {
        initialState.summaTvInput.summa.textContent = date.summaWithoutDiscount + " сом";
        initialState.total += date.summaWithoutDiscount;
    }

    initialState.summaTvInput.inputText.textContent = initialState.datetvChannel;
}
export let SummaTvInput = (suminput) => {

    return {
        type: SUMMA_TV_INPUT, summatvinput: suminput
    }
}

export let InfoUsers = (info) => {

    return {
        type: INFO_USER, infouser: info
    }
}

export let RasmestyReklam = () => {
    return{
        type: RASMET_REKLAMA, rasmerekl: ""
    }
}

export let summaVsehTV = () => {
    let url = "https://na-tv.herokuapp.com/api/v1/order/save-order";
    let objsumma = {}
    let uniqueArray = removeDuplicates(mas, "channelId");
    objsumma.channels = uniqueArray
    objsumma.adText = initialState.textSimvol
    objsumma.clientEmail = "erj.ax@gmail.com";

    let options = {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(objsumma)
    }

    fetch(url, options)
        .then(response => response.json())
        .then(data => {
            initialState.summaTvInput.obshsum.textContent = ` ${data.orderCost} сом`
        })
    return{
        type: SUMAVSEX
    }
}

export let danyClient = (dany) => {
    return{
        type:DANY_CLIENT, dany: dany
    }
}

export let resultSuma = (suma) => {
    return{
        type: RESULT_SUMA, obsh: suma
    }
}


export default ContentNewsReducer;