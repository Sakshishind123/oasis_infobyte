import React from 'react';

const Projects = () => {
  return (
    <section id="projects" style={{ padding: '30px', textAlign: 'center' }}>
      <h2 style={{ color: '#dcdde1', marginBottom: '20px' }}>Projects</h2>

      <ul style={{ listStyleType: 'none', padding: '0' }}>
        <li style={{ marginBottom: '20px', backgroundColor: '#34495e', padding: '20px', borderRadius: '8px', marginRight:'10% ',marginTop:'10%'}}>
          <h3 style={{ color: '#f5f6fa' }}>Portal for Farmers to Sell Products at Better Rates</h3>
          <p style={{ color: '#bdc3c7' }}>
            A platform designed to help farmers connect directly with buyers, ensuring they receive fair prices for their products.
            Features include real-time pricing, secure payments, and a user-friendly interface.
          </p>
        </li>

        <li style={{ marginBottom: '20px', backgroundColor: '#34495e', padding: '20px', borderRadius: '8px' ,marginRight:'10% '}}>
          <h3 style={{ color: '#f5f6fa' }}>SkillSphere Website</h3>
          <p style={{ color: '#bdc3c7' }}>
            An online learning platform offering courses in web development, data science, and more. It includes progress tracking, quizzes,
            and certification upon completion.
          </p>
        </li>

        
      </ul>
    </section>
  );
};

export default Projects;
