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
import { BlogFooter, BlogNavBar } from './pages/Utils';



function App() {

  return (
    <div className="App">
      {/* Header */}
      <BlogNavBar/>

      {/* Home Page */}
      <Routes>
        <Route exact index path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog/>}/>
        <Route path='/dev/:page' element={<BlogDev/>}/>
        <Route path='/contact' element={<ContactMe/>}/>
      </Routes>
      {/* Footer */}
      <BlogFooter/>
    </div>
  );
}

export default App;
