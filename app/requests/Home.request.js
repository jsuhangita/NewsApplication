import * as api from '../utils/api.util';


export async function getTopHeadline() {
  try {
    return  await api.topHeadlines('?country=id&pageSize=5')
  }catch (e) {
    throw e
  }
}

export async function getNews(payload) {
  const { category='business' } = payload;
  try {
    return  await api.topHeadlines(`?country=id&pageSize=3&category=${category}`)
  }catch (e) {
    throw e
  }
}
