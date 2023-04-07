import axios from "axios";

export default class ProductService{
    getCars(){
        return  axios.get("http://localhost:8080/api/cars/getAll");
    }
    getConfortCars(){
        return  axios.get("http://localhost:8080/api/cars/getAll");
    }
    getEconomyCars(){
        return  axios.get("http://localhost:8080/api/cars/getAll");
    }
}