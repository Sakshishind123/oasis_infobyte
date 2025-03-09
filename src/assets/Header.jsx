// import React from 'react'
// import './home.css';
// const Header = () => {
//   return (
//     <div className='head'>
//       <h2>Welcome to my Portfolio</h2>
//       <p>Hello, Myself Sakshi Shinde . I am a full stack developer</p>
//       <p >I am a third-year Computer Engineering student at Vishwakarma Institute of Information Technology, Pune, with a strong passion for full-stack development and problem-solving. Skilled in Java, Python, JavaScript, and SQL, I specialize in building scalable web applications using frameworks like React, Flask, and Node.js. I have worked on projects ranging from freelance job platforms to marketplaces for farmers, focusing on real-world solutions. As a quick learner and team player, I am always eager to take on new challenges, collaborate with like-minded individuals, and create impactful digital experiences.</p>
//       <div className='circle' style={{borderRadius:"50%",backgroundColor:'white'}}>
//       {/* <hr className="divider" /> */}
//       </div>
// <p>1</p>


// </div>
  
//   )
// }

// export default Header




import React from 'react';
import './home.css';

const Header = () => {
  return (
    <div className='head'>
      {/* Text Section */}
      <div className="text-content">
        <h2>Welcome to my Portfolio</h2>
        <p>Hello, Myself Sakshi Shinde. I am a full-stack developer.</p>
        <p>
          I am a third-year Computer Engineering student at Vishwakarma Institute of Information Technology, Pune, with a strong passion for full-stack development and problem-solving. Skilled in Java, Python, JavaScript, and SQL, I specialize in building scalable web applications using frameworks like React, Flask, and Node.js.
        </p>
      </div>

      {/* Circle Section */}
      <div className='circle'></div>
    </div>
  );
}

export default Header;
