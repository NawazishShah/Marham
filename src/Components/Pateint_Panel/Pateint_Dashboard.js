import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Pateint_Dashboard = () => {
    return (
        
        <Container>
         <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand >Pateint</Navbar.Brand>
        </Container>
      </Navbar>
         <div class="col-md-3 col-lg-2 sidebar-offcanvas pl-0" id="sidebar" role="navigation" style={{backgroundColor:"#e9ecef"}}>
            <ul class="nav flex-column sticky-top pl-0 pt-5 p-3 mt-3 ">
                <li class="nav-item mb-2 mt-3"><a class="nav-link text-secondary" href="#"><h5>Pateint</h5></a></li>
                <Dropdown as={ButtonGroup}>
      <Button variant="danger">Doctor</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      
      <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            kkk
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Gynacoloist</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    <br/>
    <Dropdown as={ButtonGroup}>
      <Button variant="danger">Pharmacy</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      
      <Dropdown.Menu variant="dark">
          <Dropdown.Item href="#/action-1" active>
            kkk
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    <br/>
    <Dropdown as={ButtonGroup}>
      <Button variant="success">Our vission</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      
      <Dropdown.Menu variant="dark">
          
          
          <Dropdown.Item ><p> Our vission is fast kkkkkkkkkkkkkkkkkkkk</p></Dropdown.Item>
         
          <Dropdown.Divider />
         
        </Dropdown.Menu>
    </Dropdown>

               
                <li class="nav-item mb-2">
                    {/* <a class="nav-link text-secondary" href="#submenu1" data-toggle="collapse" data-target="#submenu1"><i class="far fa-file-word font-weight-bold"></i> <span className="ml-3"> Reports▾</span></a> */}
                    <ul class="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                      
                    </ul>
                </li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="far fa-chart-bar font-weight-bold"></i> 
                <span className="ml-3">Analytics</span></a></li>
                <li class="nav-item mb-2"><a class="nav-link text-secondary" href="#"><i class="fas fa-file-export font-weight-bold">
                </i><span className="ml-3">Export</span></a></li>

           
                
            </ul>
            
       </div>
       </Container>
    )
};
 
export default Pateint_Dashboard;