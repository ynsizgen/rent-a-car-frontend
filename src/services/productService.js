import axios from "axios";

export default class ProductService{
    getCars(){
        return  axios.get("http://localhost:8080/api/cars/getAll");
    }
    getCarDetail(id){
        return axios.get("http://localhost:8080/api/cars/getById/"+id);
    }
}