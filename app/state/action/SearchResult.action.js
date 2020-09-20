import { createAction } from 'redux-actions';

export const SEARCH_REQUEST = 'SEARCH_REQUEST';
export const searchRequest = createAction(SEARCH_REQUEST);
export const SEARCH_REQUEST_FAILED = 'SEARCH_REQUEST_FAILED';
export const searchRequestFailed = createAction(SEARCH_REQUEST_FAILED);
export const SEARCH_REQUEST_SUCCESS = 'SEARCH_REQUEST_SUCCESS';
export const searchRequestSuccess = createAction(SEARCH_REQUEST_SUCCESS);
