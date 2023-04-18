import axios from "axios";


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
    
    async postCarData(data){
        const response = await axios.post('http://localhost:8080/api/cars/addCar', data)
        return response;
    
    }

   
}