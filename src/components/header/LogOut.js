import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CDropdownItem,
} from '@coreui/react'
import {
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
function LogOut() {
  const nevigate = useNavigate()

  const logout = () => {
    localStorage.clear();
    nevigate('/login');
  }
  return (
       <div onClick={logout}>
         <CDropdownItem>
          <CIcon icon={cilUser} className="me-2" />
          Logout
        </CDropdownItem>
      </div>
  )
}
export default LogOut
