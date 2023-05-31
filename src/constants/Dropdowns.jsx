import React, { useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import "../styles/variable.less"

const Dropdowns = ({ actionHandler,prevStatus,   Component }) => {

  return (
    <Dropdown>
      <Dropdown.Toggle id="dropdown-basic" className='btn-sm rbgColor' >

        <i className="bi bi-filter p-1 "  ></i> {prevStatus?.charAt(0)?.toUpperCase() + prevStatus?.slice(1)}

      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Component actionHandler={actionHandler}    ></Component>
        {/* <Dropdown.Item onClick={() => ComponentData.handleActions()}>Submit</Dropdown.Item> */}
      </Dropdown.Menu>
    </Dropdown>
  )
}







export { Dropdowns }


