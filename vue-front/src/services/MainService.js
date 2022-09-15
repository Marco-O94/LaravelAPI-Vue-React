// Get axios bearer token
import axios from 'axios';

/*const getAxiosBearerToken = () => {
  return localStorage.getItem("token");
}*/
//Public API
const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api', //Inserire l'indirizzo del server
    withCredentials: false,
    // XMLHttpRequest from a different domain cannot set cookie values for their own domain unless withCredentials is set to true before making the request.
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        //Authorization: 'Bearer ' + getAxiosBearerToken()
    }
});
//Private API
/* TEST
const apiClientPrivate = axios.create({
    baseURL: 'http://localhost:8000/api', //Inserire l'indirizzo del server
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem("token")
    }
}); */

export default {
    getProducts() {
        return apiClient.get('/products');
    },
    getProduct(id) {
        return apiClient.get('/product/' + id);
    },
    getFeaturedProducts() {
        return apiClient.get('/products/featured');
    },
    //create login with token
    login(credentials) {
        return apiClient.post('/login', credentials).then((response) => {
            localStorage.setItem("token", response.data.access_token);
            return response;
        }).catch((error) => {
            console.log(error);
        });
}
}