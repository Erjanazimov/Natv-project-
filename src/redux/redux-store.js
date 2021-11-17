import {applyMiddleware, combineReducers, createStore} from "redux";
import ContentNewsReducer from "./content-news-reducer";
import thunk from 'redux-thunk';
import ContentBanerNewsReducer from "./ContentBaner-news-reducer";

let reducer = combineReducers({
    ContentNews: ContentNewsReducer,
    newsTvContent: ContentBanerNewsReducer
    }
)

let store = createStore(reducer, applyMiddleware(thunk)) ;

export default store;