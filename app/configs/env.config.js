const defaults = {
  ENV: 'dev',
  MOCKAPI: false,
  URL: 'http://newsapi.org/v2',
  NEWS_API_KEY:'dc830d6269724101b49cab527d2329bf'
};

const setEnv = (envKey, value) => {
  defaults[envKey] = value;
  return defaults;
};

module.exports = {
  setEnv,
  get ENV() {
    return defaults.ENV;
  },
  get MOCKAPI() {
    return defaults.MOCKAPI;
  },
  URL: defaults.URL,
  NEWS_API_KEY:defaults.NEWS_API_KEY
};
