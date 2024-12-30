import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Peswaniji/E-waste-Management" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://peswaniji.github.io/E-waste-Management/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>E-waste management web app</h3>
              <p> Developed a responsive website with a user-friendly interface, increasing engagement by 30%. Integrated PHP back-end for efficient data handling, reducing query processing time by 20%. Optimized forms and improved performance with JavaScript, cutting processing time by 40% and improving load times by 35%. Conducted extensive testing, reducing errors by 90% and boosting user satisfaction to 4.8/5. </p>
            </div>
            <footer> <ul className="tech-list"> <li>PHP</li> <li>Javascript</li> <li>Bootstrap</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/Peswaniji/Notes-Web-App" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                {/* <a href="https://ai-chatbot-t8fn.onrender.com" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a> */}
              </div>
            </header>
            <div className="body">
              <h3>Notes Web-App</h3>
              <p>
              Developed a Notes App using the MERN stack, featuring efficient CRUD operations via a RESTful API and a responsive React.js frontend. Optimized MongoDB for scalable storage of up to 10,000 notes and improved app speed by 30%. Enhanced deployment and maintenance with a modular project structure and achieved a 25% reduction in server response time.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>Node.js</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/Peswaniji/Network-Anomaly-Detection" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
               
              </div>
            </header>
            <div className="body">
              <h3>Network Anomaly Detection</h3>
              <p>
              Designed and implemented a network anomaly detection system using Go and Python, focusing on ARP spoof detection and port scanning for enhanced security. Developed a React.js frontend and a Flask/PostgreSQL backend for efficient data storage and reliable operation. Deployed in Docker, reducing setup time by 60%, and created a custom port scanner capable of scanning 5,000 devices per minute.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Go</li>
                <li>Flask</li>
                <li>PostgreSQ</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/Peswaniji/My-Portfolio" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://sujalpeswaniportfolio.vercel.app/#home" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Personal Portfoio</h3>
              <p>Developed a personal portfolio using React, Node.js, and Express, featuring a dynamic light/dark mode toggle, a direct CV download button, and a contact form for inquiries. Integrated buttons for emailing and calling, allowing seamless communication with potential clients and collaborators.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React.js</li>
                <li>TypeScript</li>
                <li>Node.js</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}