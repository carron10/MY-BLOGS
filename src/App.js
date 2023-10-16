import { Route, Routes } from 'react-router';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/global.css';
import './css/mystyle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch,faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Blog from './pages/ShowBlog';
import { BlogDev } from './pages/DevelopPages';
import { ContactMe } from './pages/Contactme';



function App() {

  return (
    <div className="App">
      {/* Header */}
      <nav className="navbar navbar-expand-md border-bottom  py-3 small" style={{ backgroundColor: 'rgba(255,245,255,255)' }}>
        <a className="navbar-brand font-weight-bold" href="/">CHATSFLY</a>
        {/* <!-- <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse">
          <span className="navbar-toggler-icon a"></span>
          <span className="navbar-toggler-icon b"></span>
          <span className="navbar-toggler-icon c"></span>
        </button> --> */}
        <div className=" d-sm-none">
          <a href='search' className="nav-link">
            <FontAwesomeIcon icon={faSearch} />
          </a>
        </div>
        <div className="collapse navbar-collapse text-center d-none d-sm-inline-block" id="collapse">
          <ul className=" nav navbar-nav ml-auto ml-auto pr-2">
            <li className=" nav-item">
              <a href='search' className="nav-link">
                <FontAwesomeIcon icon={faSearch} />
              </a>

            </li>
            <li className=" nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className=" nav-item">
              <a className="nav-link" id="contact" href="#!">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Home Page */}
      <Routes>
        <Route exact index path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/dev/:page' element={<BlogDev/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
      </Routes>
      {/* Footer */}
      <div className=" text-center container-fluid border-top py-4">
        <div className=" text-muted">
          <span className=" px-1">Privacy</span>
          <span className=" px-1">About</span>
          <span className=" px-1"><a className=" text-muted"  href='/contact'>Contact</a></span>
        </div>
      </div>
      <div className="mx-3" style={{ position: 'fixed', right: 0, bottom: '90px' }}>
        <button id="go_up" className=" border-0 p-0">
          <FontAwesomeIcon icon={faChevronUp} className="text-white p-2" style={{ backgroundColor: '#0069d9' }} />
        </button>
      </div>
    </div>
  );
}

export default App;
