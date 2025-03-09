// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import './home.css';
// import Top from './top';
// import Header from './header';
// import Navbar from './navbar';
// import About from './about';

// const Home = () => {
//   return (
//     <>
//       <Top />
//       <Navbar />
//       <Header />

//       <hr className="divider" /> {/* Horizontal line after home page */}

//       {/* About section renders only when path is "/about" */}
//       <div className="about-container">
//         <Routes>
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </div>
//     </>
//   );
// };

// export default Home;











import React from 'react';
import './home.css';
import Navbar from './navbar';
import Header from './header';
import About from './about';
import Top from './Top'
import Projects from './projects';
const Home = () => {
  return (
    <>
      
      <Top/>
      <Navbar />
      <div className='all'>

  
      {/* Home Section */}
      <section id="home">
        <Header />
      </section>

      <hr className="divider" /> {/* Horizontal line after home page */}

      {/* Projects Section */}
      <section id="skills">
        <About />
      </section>
      <hr className="divider" /> 

      <section >
      

      </section>
      <hr className="divider" /> 
      <section id="projects">
        <h2>Projects</h2>
        <Projects/>

      </section>    
      {/* About Section */}
    
      <hr className="divider" /> 
      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Contact information goes here...</p>
      </section>
      </div>
      <hr className="divider" /> 
    </>
  );
};

export default Home;
