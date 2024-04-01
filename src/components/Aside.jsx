import { GiCalendar, GiClawSlashes, GiMailbox, GiMayanPyramid, GiPhone, } from "react-icons/gi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
const Aside = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={"/images/photo.jpg"} alt="Richard hanrick" width="80" />
        </figure>

        <div className="info-content">
          <h1 className="name" title="Richard hanrick">
            Shivam Gupta
          </h1>

          <p className="title">Web developer</p>
        </div>

        <button className="info_more-btn" data-sidebar-btn>
          <span>Show Contacts</span>

          <GiClawSlashes />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>

              <a href="mailto:richard@example.com" className="contact-link">
                shivam70410@gmail.com
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone</p>

              <a href="tel:+917237963655" className="contact-link">
                +91 7237963655
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiCalendar />
            </div>

            <div className="contact-info">
              <p className="contact-title">Birthday</p>

              <time dateTime="1982-06-23">June 23, 2000</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <GiMayanPyramid />
              <ion-icon name="location-outline"></ion-icon>
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>

              <address>Vikas Nagar, Lucknow, India</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="#" className="social-link">
            <FaLinkedin />
              <ion-icon name="logo-Linkedin"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
            <FaXTwitter />
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li className="social-item">
            <a href="#" className="social-link">
            <FaInstagram />
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
