import "./Contact.css";
// import monDepOpenCall from "../assets/mon-depanneur-open-call-eng.jpg";
// import logo from "../assets/entretemps-logo.png";
import pcOutside from "../assets/princesse-cowboy-outside.jpg";

export default function Contact() {
  return (
    <div className="contact-page">
      <h2>Dites bonjour/hi</h2>
      <div className="contact-section"></div>{" "}
      {/* <h3 className="spacing highlight">
        Submissions are open for our upcoming show, <br />
        Mon Dépanneur, opening July 10!
      </h3>
      <p className="spacing">Submission deadline: March 31</p>
      <img
        className="gallery-image-vert"
        src={monDepOpenCall}
        alt="Poster calling for submissions for upcoming exhibition Mon Dépanneur"
      />
      <p className="spacing">
        Whether you call it a dépanneur, a corner store, a bodega or a späti,
        it's ubiquitous, it's for everyone and it's an intrinsic part of our
        daily lives. <br />
        <br />
        Mon Dépanneur is a group show that celebrates the humble local market
        down the street.
        <br />
        <br />
        To submit your work for the show, please email{" "}
        <a className="email-link" href="mailto:bonjour.hi@entretemps.ca">
          bonjour.hi@entretemps.ca
        </a>{" "}
        with the following info by March 31: <br />
      </p>
      <p className="spacing">
        - Your name & pronouns
        <br />
        - Short bio / artist statement
        <br />
        - Social media links
        <br />
        - Website
        <br />
        - Images of the work you're submitting
        <br />
        - OR -
        <br />- Sketches of a work you're proposing with supporting images of
        your previous work
      </p> */}
      <h3>Avez-vous des questions?</h3>
      <h3>Voulez-vous soumettre votre dossier pour considération?</h3>
      <h3>Do you have a burning question?</h3>
      <h3>Want to submit your work for consideration?</h3>
      <p className="email-address">
        Envoyez-nous un message au{" "}
        <a className="email-link" href="mailto:bonjour.hi@entretemps.ca">
          bonjour.hi@entretemps.ca
        </a>
      </p>
      {/* <div className="logo-container">
        <img
          className="entretemps-logo-spin"
          src={logo}
          alt="Entretemps gallery logo in an hourglass shape"
        />{" "}
      </div> */}
      <img
        className="gallery-front"
        src={pcOutside}
        alt="front window of Entretemps gallery "
      />{" "}
    </div>
  );
}
