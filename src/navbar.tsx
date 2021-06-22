import React from 'react'
import './App.css'
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
function Navbar() {
    return (
        <div>
<nav className='navbar'> 
           <ul className='navbar-buttons'>
                <li className='navbar-li'>HOME</li>
                <li className='navbar-li'>BAND</li>
                <li className='navbar-li'>TOUR</li>
                <li className='navbar-li'>CONTACT</li>
                <Dropdown className='dropdown-main'>
                    <Dropdown.Toggle variant="black"  id="dropdown-basic" className='dropdown'>
                        MORE
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Merchandise</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Extras</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Media</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </ul>
            </nav>
        </div>
    )
}

export default Navbar
