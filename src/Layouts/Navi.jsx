import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
  MDBBtn,
} from "mdb-react-ui-kit";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useNavigate } from "react-router-dom";


export default function Navi() {
  const [showBasic, setShowBasic] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  function handleSignOut() {
    setIsAuthenticated(false);
    navigate("/");
  }
  function handSignIn() {
    setIsAuthenticated(true);
    navigate("/cars");
  }
  function handleGoToUserDetail() {
    navigate("/userDetail");
  }
  function handleGoToCarAdd(){
    setIsAuthenticated(true);
    navigate("/car/add")
  }
  return (
    <div>
      <MDBNavbar expand="lg" light style={{ backgroundColor: "#e3f2fd" }}>
        <MDBContainer>
            <MDBNavbarBrand href="#">RENT A CAR</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="#">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Link</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Dropdown
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Action</MDBDropdownItem>
                    <MDBDropdownItem link>Another action</MDBDropdownItem>
                    <MDBDropdownItem link>Something else here</MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  disabled
                  href="#"
                  tabIndex={-1}
                  aria-disabled="true"
                >
                  Disabled
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          
          {isAuthenticated ? ( 
              <MDBBtn onClick={handleGoToCarAdd} color="success" >
                ARAÇ EKLE
              </MDBBtn>    
          ) : (
            null
          )}
        
          {isAuthenticated ? (
            <SignedIn signOut={handleSignOut} goToBilgiler={handleGoToUserDetail}/>
          ) : (
            <SignedOut signIn={handSignIn} />
          )}
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}
