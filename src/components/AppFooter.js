import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <a href="a" target="_blank" rel="noopener noreferrer">
          F.M.L
        </a>
        <span className="ms-1">&copy; 2022 Created.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://bpointer.com/" target="_blank" rel="noopener noreferrer">
        Bpointer Private Limited
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
