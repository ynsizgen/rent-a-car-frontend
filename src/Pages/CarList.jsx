import React from "react";
import { useState, useEffect } from "react";
import ProductService from "../services/productService";
import {
    MDBBadge,
    MDBBtn,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBPagination,
    MDBPaginationItem,
    MDBPaginationLink,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

export default function CarList() {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        let productService = new ProductService();
        productService.getCars().then((result) => setCars(result.data));
    }, []);

    return (
        <div>
            <nav aria-label="table">
                <MDBTable align="middle">
                    <MDBTableHead>
                        <tr>
                            <th scope="col">Araç</th>
                            <th scope="col">Araba Modeli</th>
                            <th scope="col">Durum</th>
                            <th scope="col">Fiyatı</th>
                            <th scope="col">Manuel/Auto</th>
                            <th scope="col">Plaka</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {cars?.map((cars) => (
                            <tr key={cars.id}>
                                <td>
                                    <div className="d-flex justify-content-center">
                                        <div className="ms-3">
                                            <p className="fw-bold mb-1">{cars.brandName}</p>
                                            <p className="text-muted mb-0">{cars.modelName}</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">{cars.enumVehicleType}</p>
                                    <p className="text-muted mb-0"></p>
                                </td>
                                <td>
                                    <MDBBadge color="success" pill>
                                        {cars.state}
                                    </MDBBadge>
                                </td>
                                <td>
                                    <div className="fw-bold mb-1">
                                        {cars.dailyPrice} ₺
                                    </div>
                                </td>
                                <td>
                                    <MDBBadge color="info" pill>
                                        {String(cars.manuelAuto)}
                                    </MDBBadge>
                                </td>
                                <td>
                                    <p className="fw-normal mb-1">{cars.plates}</p>
                                </td>
                                <td>
                                    <Link to={`/cars/${cars.id}`}>
                                        <MDBBtn color="link" rounded size="sm">
                                            Durum
                                        </MDBBtn>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </MDBTableBody>
                </MDBTable>

                <MDBPagination className="justify-content-center">
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#">1</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#">2</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#">3</MDBPaginationLink>
                    </MDBPaginationItem>
                    <MDBPaginationItem>
                        <MDBPaginationLink href="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                        </MDBPaginationLink>
                    </MDBPaginationItem>
                </MDBPagination>
            </nav>
        </div>
    );
}
