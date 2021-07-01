import { useState } from "react"
import { Button } from "react-bootstrap";

import logo from '../assets/tracItLogoWhite.png'
import SignUpParent from "./SignUpParent";
import Login from "./Login";

const AppEntry = () => {

  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);

  return (
    <div className="app-wrapper">
      <br />
      <img className="logo" src={logo} alt="logo"/>
      <div
        container spacing={4}
        direction="column"
        justify="center"
        alignItems="center"
        >
        <div>
 
          <Button  variant="contained" color="transparent">
            I'm a child 
          </Button>

        </div>
        <div> 
          <h4>I'm A Parent</h4> 
          <SignUpParent 
            show={modalShow}
            onHide={() => setModalShow(false)} />  
          <Login 
            show={modalShow2}
            onHide={() => setModalShow2(false)} />               
            <Button  variant="contained" color="transparent" onClick={() => setModalShow(true)} >
              Sign Up              
            </Button>       
            <Button  variant="contained" color="transparent" onClick={() => setModalShow2(true)} >
              Sign In             
            </Button>

        </div>
      </div>
      <br />
     
    </div>
  );
};

export default AppEntry;