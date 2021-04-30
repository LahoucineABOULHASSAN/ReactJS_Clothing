import { useContext } from "react";
import { ContactUsContext } from "../../contexts/ContactUsContext";
import "../../stylesheets/contactUs.css";
const ContactUs = () => {
  const { message, dispatch } = useContext(ContactUsContext);
  return (
    <div id="contact" className="contact-us">
      <h3>Contact Us</h3>
      <form onSubmit={(event) => dispatch({ event, type: "POST_REQUEST" })}>
        <label htmlFor="name">Full Name:</label>
        <input
          type="text"
          name="name"
          value={message.name}
          onChange={(event) => dispatch({ event, type: "INSERT_DATA" })}
          required
        />
        <label htmlFor="email">E-Mail Address:</label>
        <input
          type="email"
          name="email"
          value={message.email}
          onChange={(event) => dispatch({ event, type: "INSERT_DATA" })}
          required
        />
        <label htmlFor="name">Message:</label>
        <textarea
          name="message"
          value={message.message}
          onChange={(event) => dispatch({ event, type: "INSERT_DATA" })}
          required
        ></textarea>
        <input type="submit" value="Send Message" />
      </form>
    </div>
  );
};

export default ContactUs;
