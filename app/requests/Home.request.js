import * as api from '../utils/api.util';


export async function getTopHeadline() {
  try {
    return  await api.topHeadlines('?country=id&pageSize=5')
  }catch (e) {
    throw e
  }
}
