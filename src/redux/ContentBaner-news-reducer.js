let IMG_LOAD = "IMG-LOAD";
let TOGGLE_LOADING = "TOGGLE_LOADING";
let CONTENTS_BANNER_NEWS = "CONTENTS-BANNER -NEWS";
let DATA_DANY = "DATA-DANY";
let ID_TV_CHANNEL = "ID-TV-CHANNEL";
let SUMA_TVCHANEL = "SUMA-TV-CHANNEL";
let TARG_DATA = "TARG-DATA";
let OBSH_SUMMA = "OBSH-SUMMA";
let RASMEST_REKL2 = "RASMEST-REKL2";
let CHANNELS = "CHANNELS";
let LINK = "LINK";
let base_url = "https://natv-apps.herokuapp.com/api/v1/active-channels/";
let mas = [];
let ContentChannel = [];
let initialState = {
    newsTvContent: [],
    load_img: "",
    dataDany: [],
    isLoading: false,
    sumatv: 0,
    objidprice: {},
    targ: {},
    channels: {},
    rasmets: {},
    obsh: [0],
    link: "/glavnaya2"
}


let ContentBanerNewsReducer = (state = initialState, action) => {
    switch (action.type){
        case IMG_LOAD:
            state.load_img = action.imgload
            return state;
        case TOGGLE_LOADING:
            state.isLoading = action.loading
            return state;
        case CONTENTS_BANNER_NEWS:
            state.newsTvContent = action.news
            return state;
        case DATA_DANY:
            state.dataDany = action.data
            return state;
        case ID_TV_CHANNEL:
            state.objidprice = action.obj
            return state;
        case SUMA_TVCHANEL:
            state.sumatv = action.tvsum
            return state;
        case TARG_DATA:
            state.targ = action.targ
            return state;
        case OBSH_SUMMA:
            state.obsh = action.obsh;
            return state;
        case CHANNELS:
            state.channels = action.channel
            return state;
        case RASMEST_REKL2:
            state.rasmets = action.reklm
            return state;
        case LINK:
            state.link = action.link
        default: return state
    }
}

export let newsTvContent = () => {
    return async dispatch =>{
        dispatch({type: TOGGLE_LOADING, loading: true})
        await fetch(base_url)
            .then(async response =>{
                const data = await response.json()
                dispatch({type: CONTENTS_BANNER_NEWS, news: data})
            })
        dispatch({type: TOGGLE_LOADING, loading: false})
    }
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

export let imgLoadLink = (img) => {
    return{
        type: IMG_LOAD, imgload: img
    }
}

export let dataDany = (data) => {
    return{
        type: DATA_DANY, data: data
    }
}

export let idtvchannel = (obj) => {
    return{
        type: ID_TV_CHANNEL, obj: obj
    }
}

export let sumatvchannel = (tvsum) => {

    return {
        type: SUMA_TVCHANEL, tvsum: tvsum
    }
}

export let targDate = (targ) => {
    return{
        type: TARG_DATA, targ: targ
    }
}


export let obshsuma = (obsh) => {
    let obj = {};
    obj.id = initialState.objidprice.id;
    obj.channels = initialState.dataDany;
    obj.order = obsh;
    mas.push(obj)
    let res = removeDuplicates(mas, "id");
    let sum = 0;
    res.forEach(item => {
        sum += item.order
    })
    return{
        type:OBSH_SUMMA, obsh: sum
    }
}

export let channels_tv = (channels) => {
    let channel = {};
    channel.channel_id = initialState.objidprice.id;
    channel.dates = initialState.dataDany;
    channel.name = initialState.objidprice.name;
    ContentChannel.push(channel);
    let res = removeDuplicates(ContentChannel, "channel_id");

    return {
        type: CHANNELS, channel: res
    }
}

export let RasmestRek = (rekl) => {
    return{
        type: RASMEST_REKL2, reklm: rekl
    }
}

export let linkAdd = () => {
    return{
        type: LINK, link: "/summaoplata2"
    }
}



export default ContentBanerNewsReducer;