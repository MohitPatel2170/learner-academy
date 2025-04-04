import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="unacademy-footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-section">
            <div className="footer-logo">
              <svg width="140" height="40" viewBox="0 0 140 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.6 9H20.5L29.1 27.6H24.7L23 23.9H14L12.3 27.6H8L16.6 9ZM18.5 13.6L15.2 20.7H21.9L18.5 13.6Z" fill="#08BD80"/>
                <path d="M42.5 9.60001C45.5667 9.60001 47.9667 10.4 49.7 12C51.4333 13.6 52.3 15.8 52.3 18.6C52.3 21.4 51.4333 23.6 49.7 25.2C47.9667 26.8 45.5667 27.6 42.5 27.6H34.4V9.60001H42.5ZM42.3 23.8C44.0333 23.8 45.3667 23.3667 46.3 22.5C47.2333 21.6333 47.7 20.3333 47.7 18.6C47.7 16.8667 47.2333 15.5667 46.3 14.7C45.3667 13.8333 44.0333 13.4 42.3 13.4H38.9V23.8H42.3Z" fill="#08BD80"/>
                <path d="M67.3 15.5V27.6H63V15.5H56.9V11.7H73.4V15.5H67.3Z" fill="#08BD80"/>
                <path d="M84.3 11.7C87.3 11.7 89.6333 12.3 91.3 13.5C93 14.7 93.85 16.4 93.85 18.6C93.85 20.8 93 22.5 91.3 23.7C89.6333 24.9 87.3 25.5 84.3 25.5H80.85V31.3H76.55V11.7H84.3ZM84.05 21.9C85.55 21.9 86.7 21.6667 87.5 21.2C88.3 20.7333 88.7 19.9333 88.7 18.8C88.7 17.6667 88.3 16.8667 87.5 16.4C86.7 15.9333 85.55 15.7 84.05 15.7H80.85V21.9H84.05Z" fill="#08BD80"/>
                <path d="M114.832 27.6L107.582 19.4V27.6H103.282V11.4H107.282L114.532 19.6V11.4H118.832V27.6H114.832Z" fill="#08BD80"/>
              </svg>
            </div>
            <p className="footer-tagline">India's largest learning<br/> platform</p>
          </div>
          
          <div className="footer-company-section">
            <h3 className="footer-heading">COMPANY</h3>
            <ul className="footer-links">
              <li><a href="#">About us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Blogs</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Terms and conditions</a></li>
              <li><a href="#">Refund policy</a></li>
              <li><a href="#">Grievance redressal</a></li>
            </ul>
          </div>
          
          <div className="footer-popular-goals-section">
            <h3 className="footer-heading">POPULAR GOALS</h3>
            <ul className="footer-links">
              <li><a href="#">UPSC CSE</a></li>
              <li><a href="#">IIT JEE</a></li>
              <li><a href="#">NEET UG</a></li>
              <li><a href="#">Bank & Insurance</a></li>
              <li><a href="#">GATE & ESE</a></li>
              <li><a href="#">UPSC ESE & GATE</a></li>
              <li><a href="#">CAT & MBA</a></li>
            </ul>
          </div>
          
          <div className="footer-popular-exams-section">
            <h3 className="footer-heading">POPULAR EXAMS</h3>
            <ul className="footer-links">
              <li><a href="#">JEE Mains</a></li>
              <li><a href="#">JEE Advanced</a></li>
              <li><a href="#">NEET UG</a></li>
              <li><a href="#">IBPS PO</a></li>
              <li><a href="#">SBI PO</a></li>
              <li><a href="#">CLAT</a></li>
              <li><a href="#">CTET</a></li>
            </ul>
          </div>
          
          <div className="footer-apps-section">
            <h3 className="footer-heading">LEARN ON APP</h3>
            <div className="app-links">
              <a href="#" className="app-link">
                <img src="/api/placeholder/135/40" alt="Get it on Google Play" />
              </a>
              <a href="#" className="app-link">
                <img src="/api/placeholder/135/40" alt="Download on the App Store" />
              </a>
            </div>
            <div className="social-links">
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 9H2V21H6V9Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 11.3701C16.1234 12.2023 15.9813 13.0523 15.5938 13.7991C15.2063 14.5459 14.5931 15.1515 13.8416 15.5297C13.0901 15.908 12.2384 16.0397 11.4078 15.906C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1903 8.22773 13.4229 8.09406 12.5923C7.9604 11.7616 8.09206 10.91 8.47032 10.1584C8.84858 9.40691 9.45418 8.7938 10.201 8.4063C10.9478 8.0188 11.7978 7.87665 12.63 8.00006C13.4789 8.12594 14.2648 8.52152 14.8717 9.12836C15.4785 9.73521 15.8741 10.5211 16 11.3701Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17.5 6.5H17.51" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12003 4 3.40003 4.46C2.92922 4.59318 2.502 4.84824 2.16137 5.19941C1.82074 5.55057 1.57881 5.98541 1.46003 6.46C1.14524 8.20556 0.991258 9.97631 1.00003 11.75C0.988802 13.537 1.14279 15.3213 1.46003 17.08C1.59096 17.5398 1.83831 17.9581 2.17819 18.2945C2.51806 18.6308 2.93934 18.8738 3.40003 19C5.12003 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0708 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0063 13.5103 23 11.75C23.0112 9.96295 22.8573 8.1787 22.54 6.42Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9.75 15.02L15.5 11.75L9.75 8.48001V15.02Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="copyright">© 2025 Sorting Hat Technologies Pvt Ltd</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10C20 16 12 22 12 22C12 22 4 16 4 10C4 7.87827 4.84285 5.84344 6.34315 4.34315C7.84344 2.84285 9.87827 2 12 2C14.1217 2 16.1566 2.84285 17.6569 4.34315C19.1571 5.84344 20 7.87827 20 10Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>Unacademy Corporate Office, No. 1179, 2nd Floor, 10th Main Road, Jeevanbhima Nagar, HAL 3rd Stage, Bengaluru - 560075</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92V19.92C22.0011 20.1985 21.9441 20.4742 21.8325 20.7294C21.7209 20.9845 21.5573 21.2136 21.3521 21.4019C21.1468 21.5901 20.9046 21.7335 20.6407 21.8227C20.3769 21.9119 20.0974 21.9451 19.82 21.92C16.7428 21.5856 13.787 20.5341 11.19 18.85C8.77381 17.3147 6.72534 15.2662 5.19 12.85C3.49998 10.2412 2.44824 7.27103 2.12 4.18C2.09499 3.90347 2.12788 3.62476 2.2165 3.36163C2.30513 3.09849 2.44763 2.85669 2.63476 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.5577 2.05833 3.83226 2.00026 4.11 2H7.11C7.59531 1.99522 8.06579 2.16708 8.43376 2.48353C8.80173 2.79999 9.04207 3.23945 9.11 3.72C9.23662 4.68007 9.47145 5.62273 9.81 6.53C9.94455 6.88792 9.97366 7.27691 9.89391 7.65088C9.81415 8.02485 9.62886 8.36811 9.36 8.64L8.09 9.91C9.51356 12.4135 11.5865 14.4864 14.09 15.91L15.36 14.64C15.6319 14.3711 15.9752 14.1858 16.3491 14.1061C16.7231 14.0263 17.1121 14.0554 17.47 14.19C18.3773 14.5286 19.3199 14.7634 20.28 14.89C20.7658 14.9585 21.2094 15.2032 21.5265 15.5775C21.8437 15.9518 22.0122 16.4296 22 16.92Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>+91 8567856785</span>
            </div>
            <div className="contact-item">
              <span className="contact-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="#666666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>support@unacademy.com</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;