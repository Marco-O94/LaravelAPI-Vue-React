// Get axios bearer token
import axios from 'axios';

/*const getAxiosBearerToken = () => {
  return localStorage.getItem("token");
}*/

const apiClient = axios.create({
    baseURL: 'http://localhost:8000/api', //Inserire l'indirizzo del server
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        //Authorization: 'Bearer ' + getAxiosBearerToken()
    }
});

export default {
    getProducts() {
        return apiClient.get('/products');
    },
    getProduct(id) {
        return apiClient.get('/product/' + id);
    },
    getFeaturedProducts() {
        return apiClient.get('/products/featured');
    }
}