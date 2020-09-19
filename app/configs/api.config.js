import env from './env.config';

export const {
  URL: SERVER_URL,
} = env;
export const endpoints = {
  ME: '/me',
  EVERYTHING: '/everything',
  TOP_HEADLINES:'/top-headlines'
};

export const mockResponses = env.fixtures || {};
