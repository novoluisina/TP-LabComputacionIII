import React from 'react'
import Navbar from '../navbar/Navbar'

const GeneralView = ({children}) => {
  return (
    <div>
        <Navbar>
            {children}
        </Navbar>

        <footer>

        </footer>
    </div>
  )
}

export default GeneralView