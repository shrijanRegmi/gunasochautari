import { getCategoryIndex, shuffle } from '../../../helpers/news_helper';

const getters = {
  getStackedNews: (state) => state.stackedNews,
  getNews: (state) => state.news,
  getInteresting: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 0),
  getFeatured: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 1),
  getPolitics: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 2),
  getEntertainment: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 3),
  getSports: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 4),
  getBusiness: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 5),
  getRelated: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 6),
  getBreaking: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 7),
  getPopular: (state) => state.news.filter((news) => getCategoryIndex(news.category) == 8),
}

export default getters;