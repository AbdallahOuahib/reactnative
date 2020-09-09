import axios from 'axios';

// Create instance called instance
const instance = axios.create({
  baseURL: 'https://ai-news-global.p.rapidapi.com',
  headers: {
    'content-type':'application/octet-stream',
    'x-rapidapi-host': 'ai-news-global.p.rapidapi.com',
    'x-rapidapi-key': '917a12fdddmsh5f5ea29b79c3e38p14d9b1jsn90d86c3fa139',
    'useQueryString': 'true'
  }
});


export default {
      getData: () =>
          instance({
              'method':'GET',
              'url':'/get_news/v1/us',
              'params': {
                  'search':'parameter',
              },
              'headers': {
                'content-type':'application/json'  // override instance defaults
              }
          }),
      postData: () =>
          instance({
              'method': 'POST',
              'url':'/api',
              'data': {
                  'item1':'data1',
                  'item2':'item2'
              }
          })
}