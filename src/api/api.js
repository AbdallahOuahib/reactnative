import axios from 'axios';

// Create instance called instance
const instance = axios.create({
  baseURL: 'https://programming-quotes-api.herokuapp.com'
});


export default {
    getData: () =>
        instance({
            'method':'GET',
            'url':'/quotes',
            'params': {
                'search':'parameter',
                'limit': '10'
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
        }),
    getDataById: (id) =>
        instance({
            'method':'GET',
            'url':'/quotes/id/'+id,
            'headers': {
              'content-type':'application/json'  // override instance defaults
            }
        }),    
}