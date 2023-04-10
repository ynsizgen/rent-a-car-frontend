import React from "react";
import { useState, useEffect } from "react";
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
import ProductService from "../services/productService";
import { Link } from "react-router-dom";

export default function ConfortCarsList() {
  const [confCars, setConfCars] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getCars().then((result) => setConfCars(result.data));
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
            {confCars?.filter((car) => car.dailyPrice > 2000)
              .map((confCars) => (
                <tr key={confCars.id}>
                  <td>
                    <div className="d-flex justify-content-center">
                      <div className="ms-3">
                        <p className="fw-bold mb-1">{confCars.brandName}</p>
                        <p className="text-muted mb-0">{confCars.modelName}</p>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{confCars.enumVehicleType}</p>
                    <p className="text-muted mb-0"></p>
                  </td>
                  <td>
                    <MDBBadge color="success" pill>
                      {confCars.state}
                    </MDBBadge>
                  </td>
                  <td>
                    <div className="fw-bold mb-1">{confCars.dailyPrice} ₺</div>
                  </td>
                  <td>
                    <MDBBadge color="info" pill>
                      {String(confCars.manuelAuto)}
                    </MDBBadge>
                  </td>
                  <td>
                    <p className="fw-normal mb-1">{confCars.plates}</p>
                  </td>
                  <td>
                    <MDBBtn color="link" rounded size="sm">
                    <Link to={`/cars/${confCars.id}`} >Durum</Link> 
                    </MDBBtn>
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
