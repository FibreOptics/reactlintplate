import {FETCH_POSTS, NEW_POST} from './types';

/* export function fetchPosts(){
    return function(dispatch){
        fetch('/api/testitem')
        .then(res => res.json())
        .then(list => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }));
    }
} */

export const fetchPosts = () => dispatch => {
    console.log('infking redux');
    fetch('https://expressokki.herokuapp.com/api/testitem')
    .then(res => res.json())
    .then(list => dispatch({
            type: FETCH_POSTS,
            payload: list
        }));
}