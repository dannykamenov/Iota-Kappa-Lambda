import "./Contact.css";
import founders from '../../../assets/Founders.png'

const Contact = () => {
  return (
    <>
      <div className="contact-image">
        <h1 className="contact-title">Get in touch!</h1>
      </div>
      <div className="contact-section">
        <div className="contact-images">
            <img src={founders} alt="" className="contact-photo1" />
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5831.355979647195!2d-76.15574605266613!3d43.048206224981165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3b9413c46c7%3A0x3aa758c7ec4265ac!2sDowntown%2C%20Syracuse%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbg!4v1705921588946!5m2!1sen!2sbg" loading="lazy" className="google-maps"></iframe>
        </div>
        <div className="contact-form"></div>
      </div>
    </>
  );
};

export default Contact;
