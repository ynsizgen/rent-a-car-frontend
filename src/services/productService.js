import axios from "axios";

const API_URL = 'http://localhost:8080/api/cars';
export default class ProductService{

    
    
    async getCars(){
        try {
            const response = await axios.get("http://localhost:8080/api/cars/getAll");
            return response;
        } catch (error) {
            console.error(error);
        }
    }

    async getCarDetail(id){
        try {
            const response = await axios.get("http://localhost:8080/api/cars/getById/" + id);
            return response;
        } catch (error) {
            console.error(error);
        }
    }

   
}