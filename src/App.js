import logo from './logo.svg';
import './App.css';
import Contacts from './components/Contacts';
import { AssignmentModel } from './components/ClassModel/AssignmentModel';
import { useState } from 'react';

function App() {
  const [show, SetShow] = useState(false);
  const closeModalHandler = () => SetShow(false);
  return (
    <>
      <div className="row">
        <div className="col-md-10 offset-md-1">
          <Contacts />
        </div>
      </div>



      {/* <div>
        {show ? <div onClick={closeModalHandler} className="back-drop"></div> : null}
        <button onClick={() => SetShow(true)} className="btn-openModal">Open Model</button>
        <AssignmentModel show={show} close={closeModalHandler} />
      </div> */}
    </>
  );
}

export default App;
