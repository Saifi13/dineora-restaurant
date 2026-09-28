import Navbar from "../navbar";
import "../index.css";
import Footer from "../components/footer"

function ContactPage() {
  function handleSubmit(event) {
    event.preventDefault();
    // Connect this form to your email service or backend to receive submissions.
  }

  return (
    <>
      <Navbar />

      <main className="contact-page">
        <header className="contact-heading">
          <img className="contact-sticker" src="/contactSticker.png" alt="" />
          <h1>Here to Help You</h1>
          <p>
            Fresh ingredients, mouth-watering recipes, and a passion for good
            food delivered to your door or ready for pick-up.
          </p>
        </header>

        <section className="contact-card" aria-label="Contact us">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-fields">
              <label>
                First Name*
                <input name="firstName" placeholder="Enter your name" required />
              </label>
              <label>
                Last Name
                <input name="lastName" placeholder="Enter your name" />
              </label>
              <label>
                Email Address*
                <input
                  name="email"
                  type="email"
                  placeholder="Enter email address"
                  required
                />
              </label>
              <label>
                Company Name
                <input name="company" placeholder="Company/organization" />
              </label>
              <label>
                Your State
                <select name="state" defaultValue="">
                  <option value="" disabled>Select state</option>
                  <option>California</option>
                  <option>Florida</option>
                  <option>New York</option>
                  <option>Texas</option>
                </select>
              </label>
              <label>
                Country*
                <select name="country" defaultValue="" required>
                  <option value="" disabled>Select country</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                </select>
              </label>
            </div>

            <label className="contact-message">
              <span className="visually-hidden">Your message</span>
              <textarea name="message" placeholder="Write your message..." />
            </label>

            <button className="contact-submit" type="submit">
              Send Message <span aria-hidden="true">→</span>
            </button>
          </form>

          <img
            className="contact-image"
            src="/contact.png"
            alt="A team member preparing a drink at the restaurant"
          />
        </section>

        <section className="contact-info-cards" aria-label="Contact details">
          <article className="contact-info-card contact-info-card--email">
            <span className="contact-info-icon" aria-hidden="true">✉</span>
            <h2>Email Us</h2>
            <a href="mailto:hello@example.com">hello@example.com</a>
          </article>

          <article className="contact-info-card contact-info-card--phone">
            <span className="contact-info-icon" aria-hidden="true">☎</span>
            <h2>Call Us</h2>
            <a href="tel:+16035550123">(603) 555-0123</a>
          </article>

          <article className="contact-info-card contact-info-card--location">
            <span className="contact-info-icon" aria-hidden="true">●</span>
            <h2>Location</h2>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noreferrer"
            >
              Open Google Map
            </a>
          </article>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default ContactPage;