
import { SEARCH_REQUEST,SEARCH_REQUEST_SUCCESS,SEARCH_REQUEST_FAILED } from '../action/SearchResult.action';

const defaultState={
  fetching:false,
  data:{},
  error:{
    message:'',
    code:0,
  },
}

export default function searchNews(state = defaultState, action) {
  switch (action.type) {
    case SEARCH_REQUEST: {
      return {
        ...state,
        fetching:true,
      };
    }

    case SEARCH_REQUEST_SUCCESS: {
      return {
        ...state,
        fetching:false,
        data:action.payload.data,
      };
    }

    case SEARCH_REQUEST_FAILED: {
      return {
        ...state,
        fetching:false,
        error:action.payload.error,
      };
    }

    default: {
      return state;
    }
  }
}
