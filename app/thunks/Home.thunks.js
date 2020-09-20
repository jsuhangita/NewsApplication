import {searchRequest, searchRequestFailed, searchRequestSuccess} from "../state/action/SearchResult.action";
import * as api from '../utils/api.util';
export function searchNews(payload = {}) {
  return async (dispatch) => {
    const { query } = payload;
    try {
      dispatch(searchRequest);
      const data = await api.everything(`?q=${query}&pageSize=5`)
      dispatch(searchRequestSuccess({data}))
    } catch (err) {
      dispatch(searchRequestFailed(err))
    }
  };
}
