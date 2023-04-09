import { MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'

export default function SignedOut({signIn}) {
  return (
    <div>
         <MDBBtn className='me-3'> Kayıt Ol </MDBBtn>
         <MDBBtn onClick={signIn} className='me-2' color='secondary' > Giriş Yap </MDBBtn>
    </div>
  )
}
