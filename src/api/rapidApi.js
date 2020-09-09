import axios from 'axios';

// Create instance called instance
const instance = axios.create({
  baseURL: 'https://ai-news-global.p.rapidapi.com',
  headers: {
    'content-type':'application/octet-stream',
    'x-rapidapi-host': '',
    'x-rapidapi-key': '',
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