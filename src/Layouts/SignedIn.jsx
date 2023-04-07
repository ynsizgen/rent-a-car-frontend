import { MDBCardImage, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBIcon, MDBDropdownToggle, MDBTypography, MDBContainer } from 'mdb-react-ui-kit'
import React from 'react'

export default function SignedIn({signOut}) {
    return (
        <div>

            <MDBContainer className="justify-content-center" >


                <MDBDropdown className='btn-group' color='light'  >


                    <MDBDropdownToggle tag='a' className='nav-link' role='button' >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img(31).webp"
                            className="rounded-circle"
                            height="30"
                            alt="Avatar"
                            loading="lazy"
                        />
                        
                        <MDBDropdownMenu>
                            <MDBDropdownItem>
                                <MDBIcon fas icon="info-circle" /> Bilgiler
                            </MDBDropdownItem>
                            <MDBDropdownItem onClick={signOut}>
                                <MDBIcon  fas icon="sign-in-alt" /> Çıkış
                            </MDBDropdownItem>
                        </MDBDropdownMenu>
                    </MDBDropdownToggle>


                </MDBDropdown>
            </MDBContainer>


        </div>
    )
}
