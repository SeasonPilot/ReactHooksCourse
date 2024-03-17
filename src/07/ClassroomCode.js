import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducer'
import {useDispatch} from "react-redux";

const composedEnhancer = applyMiddleware(thunkMiddleware)
const store = createStore(rootReducer, composedEnhancer)

function fetchData() {
    return dispatch => {
        dispatch({type: 'FETCH_DATA_BEGIN'});
        fetch('/some-url')
            .then(res => {
                dispatch({type: 'FETCH_DATA_SUCCESS', data: res});
            })
            .catch(err => {
                dispatch({type: 'FETCH_DATA_FAILURE', error: err});
            })
    }
}


// import fetchData from './fetchData';

function DataList() {
    const dispatch = useDispatch();

    // dispatch 了一个函数由 redux-thunk 中间件去执行
    dispatch(fetchData());
}