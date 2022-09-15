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
    // Get All products
    getProducts() {
        return apiClient.get('/products');
    },

    // Get product by id
    getProduct(id) {
        return apiClient.get('/product/' + id);
    },

    // Get featured Products
    getFeaturedProducts() {
        return apiClient.get('/products/featured');
    },
    //Login API
    async loginRequest(credentials) {
        return apiClient.post('/login', credentials);
    },

    //Register API
    async logoutRequest() {
        return apiClient.post('/logout');
    },
}
