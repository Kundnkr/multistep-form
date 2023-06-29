import Form from './Assets/Components/Form';
import { useState } from 'react';
import Finalreg from './Assets/Components/Finalreg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  let [next, setNext] = useState(1);
  let nexthandler = () => {
    if (next < 3) {
      setNext(next + 1);
    }
  }
  let prevhandler = () => {
    if (next > 1) {
      setNext(next - 1);

    }
  }
  return (

    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<section id='kundan'>
          <div className='left-side'><p>Welcome to <span>CodeWithKundan</span></p></div>
          <div className="right-side">
            <form>
              <Form start={next} />
            </form>
            {(next < 3) ? (<div className="btn">
              <button onClick={() => { prevhandler() }}>PREV</button>
              <button onClick={() => { nexthandler() }}>NEXT</button>
            </div>) : (<button className='register'><Link to = "/register">REGSITER</Link></button>)}
          </div>
        </section>}></Route>
        <Route path = "/register" element = {<Finalreg/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
