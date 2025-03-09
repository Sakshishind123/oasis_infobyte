// // import React, { useState } from 'react';
// // import './nav.css';

// // const About = () => {
// //     const [hovered, setHovered] = useState(false); // Track hover state

// //     return (
// //         <section id="about">
// //             <div>
// //                 <h2>Technology</h2>
// //                 <p className="tech">Here's what I typically work with.</p>
// //             </div>
// //             <div className='a'>
// //                 <div 
// //                     className='Languages' 
// //                     onMouseEnter={() => setHovered(true)}  // Triggers hover
// //                     onMouseLeave={() => setHovered(false)} // Restores image
// //                     style={{ cursor: "pointer", display: "flex" }}
// //                 >
// //                     {hovered ? (
// //                         <span style={{ fontSize: "15px", fontWeight: "bold" ,color:"black"}}>Java</span> // Show text when hovered
//                     // ) : (
//                     //     <svg
//                     //     xmlns="http://www.w3.org/2000/svg"
//                     //     viewBox="0 0 50 50"
//                     //     width="50"
//                     //     height="50"
//                     // >
//                     //     <path
//                     //         fill="rgb(20, 17, 17)"
//                     //         d="M17.5 41.7s-2.3 1.3 1.6 1.7c4.7.5 7.2.4 12.5-.5 0 0 1.4.9 3.3 1.6-11.9 5-26.9-.3-17.4-2.8zM16 36.1s-2.6 1.9 1.4 2.3c5.3.5 9.5.6 16.7-.8 0 0 1 1 2.6 1.5-15.1 4.4-31.9.3-20.7-3zM26.4 29.9c3 3.5-1 6.6-1 6.6s7.5-3.9 4.1-8.7c-3.3-4.6-5.8-6.9 7.9-14.8 0 .1-21.5 5.4-10.9 17zM40.8 43.6s1.7 1.4-1.9 2.5c-6.7 2-28 2.6-33.9.1-2.1-.9 1.9-2.2 3.2-2.5 1.3-.3 2-.2 2-.2-2.3-1.6-14.9 3.2-6.4 4.6 23.3 3.7 42.5-1.6 37-4.5zM19.9 25.8s-10.6 2.5-3.7 3.4c2.9.4 8.7.3 14.1-.2 4.4-.4 8.8-1.3 8.8-1.3s-1.5.6-2.6 1.3c-10.6 2.8-31.1 1.5-25.2-.8 5.1-1.9 8.6-2.3 8.6-2.3zM35.9 38.1c10.7-5.5 5.8-10.8 2.3-10.1-.8.2-1.2.4-1.2.4s.3-.5.8-.7c5.8-2 10.2 6-1.9 10.7 0-.1.1-.2 0-.3zM31.4 3.4s6 6-5.7 15.3c-9.4 7.4-2.1 11.6 0 16.4-5.5-5-9.5-9.4-6.8-13.5C22.5 15.5 34.4 13.5 31.4 3.4z"
//                     //     />
//                     // </svg>
                    
// //                     )}
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default About;





// import React, { useState } from 'react'

// const about = () => {
//     const [hover,sethover]=useState(false);
//   return (
//     <div>
//       <section id="about">
//             <div>
//                 <h2>Technology</h2>
//                 <p className="tech">Here's what I typically work with.</p>
//             </div>
//             <div className='a'>
//                 <div  className='Languages' 
//                 onMouseEnter={()=>sethover(true)}
//                 onMouseLeave={()=>sethover(false)}>
//                     {
//                     hover ? (<p style={{color:'black', fontSize:15}}>Java</p>)
//                     :
// ((
//     <svg
//     xmlns="http://www.w3.org/2000/svg"
//     viewBox="0 0 50 50"
//     width="50"
//     height="50"
// >
//     <path
//         fill="rgb(20, 17, 17)"
//         d="M17.5 41.7s-2.3 1.3 1.6 1.7c4.7.5 7.2.4 12.5-.5 0 0 1.4.9 3.3 1.6-11.9 5-26.9-.3-17.4-2.8zM16 36.1s-2.6 1.9 1.4 2.3c5.3.5 9.5.6 16.7-.8 0 0 1 1 2.6 1.5-15.1 4.4-31.9.3-20.7-3zM26.4 29.9c3 3.5-1 6.6-1 6.6s7.5-3.9 4.1-8.7c-3.3-4.6-5.8-6.9 7.9-14.8 0 .1-21.5 5.4-10.9 17zM40.8 43.6s1.7 1.4-1.9 2.5c-6.7 2-28 2.6-33.9.1-2.1-.9 1.9-2.2 3.2-2.5 1.3-.3 2-.2 2-.2-2.3-1.6-14.9 3.2-6.4 4.6 23.3 3.7 42.5-1.6 37-4.5zM19.9 25.8s-10.6 2.5-3.7 3.4c2.9.4 8.7.3 14.1-.2 4.4-.4 8.8-1.3 8.8-1.3s-1.5.6-2.6 1.3c-10.6 2.8-31.1 1.5-25.2-.8 5.1-1.9 8.6-2.3 8.6-2.3zM35.9 38.1c10.7-5.5 5.8-10.8 2.3-10.1-.8.2-1.2.4-1.2.4s.3-.5.8-.7c5.8-2 10.2 6-1.9 10.7 0-.1.1-.2 0-.3zM31.4 3.4s6 6-5.7 15.3c-9.4 7.4-2.1 11.6 0 16.4-5.5-5-9.5-9.4-6.8-13.5C22.5 15.5 34.4 13.5 31.4 3.4z"
//     />
// </svg>
// )
// )}
                  
                    
//                 </div>
//             </div>
//         </section>

//     </div>
//   )
// }

// export default about




import React, { useState } from 'react';
import './nav.css';

const About = () => {
    const [hoveredLang, setHoveredLang] = useState(null); // Track hovered language

    // Programming Languages
    const languages = [
        { name: "Java", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Java_logo.svg" alt="Java" width="50" height="50" /> },
        { name: "Python", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" alt="Python" width="50" height="50" /> },
        { name: "JavaScript", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt="JavaScript" width="50" height="50" /> }
    ];

    // Frontend Technologies
    const frontendTech = [
        { name: "React", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React" width="50" height="50" /> },
        { name: "HTML", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML" width="50" height="50" /> },
        { name: "CSS", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" alt="CSS" width="50" height="50" /> }
    ];

    // Backend Technologies
    const backendTech = [
        { name: "Node.js", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js" width="50" height="50" /> },
        { name: "Express.js", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" alt="Express.js" width="50" height="50" /> },
        { name: "MongoDB", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="MongoDB" width="50" height="50" /> }
    ];
// Databases
const databases = [
    { name: "MySQL", svg: <img src="https://upload.wikimedia.org/wikipedia/en/d/dd/MySQL_logo.svg" alt="MySQL" width="50" height="50" /> },
    { name: "MongoDB", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/MongoDB_Logo.svg" alt="MongoDB" width="50" height="50" /> }
    ,
    { name: "AWS", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" alt="AWS" width="50" height="50" /> },
    { name: "Git", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg" alt="Git" width="50" height="50" /> },
    { name: "GitHub", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg" alt="GitHub" width="50" height="50" /> },
    { name: "Linux", svg: <img src="https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg" alt="Linux" width="50" height="50" /> }

];


    return (
        <section id="about">
            <div className='techh' >
                <h2>Technology</h2>
                <p className="tech">Here's what I typically work with.</p>
            </div>

            {/* Container for all sections */}
            <div className="tech-container">
                
                {/* Languages Section */}
                <div className="tech-box">
                <h3 className="tech-title">Languages</h3>
                <hr className="tech-divider"/> 
                    <div className="icon-container">
                        <h3>Lang</h3>
                        {languages.map((lang, index) => (
                            <div key={index}
                                className="icon-item"
                                onMouseEnter={() => setHoveredLang(lang.name)}
                                onMouseLeave={() => setHoveredLang(null)}
                            >
                                {hoveredLang === lang.name ? <span className="hover-text">{lang.name}</span> : lang.svg}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Frontend Section */}
                <div className="tech-box">
                <h3 className="tech-title">Frontend</h3>
                <hr className="tech-divider"/>  
                    <div className="icon-container">
                        {frontendTech.map((tech, index) => (
                            <div key={index}
                                className="icon-item"
                                onMouseEnter={() => setHoveredLang(tech.name)}
                                onMouseLeave={() => setHoveredLang(null)}
                            >
                                {hoveredLang === tech.name ? <span className="hover-text">{tech.name}</span> : tech.svg}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Backend Section */}
                <div className="tech-box">
                <h3 className="tech-title">Backend</h3>
                <hr className="tech-divider"/> 
                    <div className="icon-container">
                        {backendTech.map((tech, index) => (
                            <div key={index}
                                className="icon-item"
                                onMouseEnter={() => setHoveredLang(tech.name)}
                                onMouseLeave={() => setHoveredLang(null)}
                            >
                                {hoveredLang === tech.name ? <span className="hover-text">{tech.name}</span> : tech.svg}
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="tech-box">
                <h3 className="tech-title">Tools and databases</h3>
                <hr className="tech-divider"/>  
                    <div className="icon-container">
                        {databases.map((tech, index) => (
                            <div key={index}
                                className="icon-item"
                                onMouseEnter={() => setHoveredLang(tech.name)}
                                onMouseLeave={() => setHoveredLang(null)}
                            >
                                {hoveredLang === tech.name ? <span className="hover-text">{tech.name}</span> : tech.svg}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
