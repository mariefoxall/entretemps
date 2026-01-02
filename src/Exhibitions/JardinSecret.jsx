import call from "../assets/jardin-secret/jardin-secret-call-submissions.jpg";
import appel from "../assets/jardin-secret/jardin-secret-appel-dossiers.jpg";
import "./JardinSecret.css";

function JardinSecret() {
  return (
    <div className="exhibitions-page">
      <h3>JARDIN SECRET</h3>
      <div className="exhibition-description">
        <p>
          Une précieuse forteresse de sentiments ou de pensées intimes que nous
          voulons garder exclusivement pour nous. Nos mots cachés, notre poésie
          intime, un lieu où nous nous sentons en sécurité et protégés. <br />
          <br />A precious fortress of intimate feelings or thoughts that we
          want to keep exclusively for ourselves. Our hidden words, our intimate
          poetry, a place where we feel safe and held.
        </p>
      </div>
      <div className="exhibition-image-gallery">
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={appel}
            alt="Poster for open call for Jardin Secret Exhibition"
          />
        </div>
        <div className="gallery-image-vert">
          <img
            className="image-in-group"
            src={call}
            alt="Poster for open call for Jardin Secret Exhibition"
          />
        </div>
        <div className="submission-section">
          <p>
            Pour remettre votre soumission, envoyez un courriel à{" "}
            <a className="email-link" href="mailto:bonjour.hi@entretemps.ca">
              bonjour.hi@entretemps.ca
            </a>{" "}
            avec les infos suivants:
          </p>
          <br />
          <p>1. Une courte biographie (100 mots environ)</p>
          <p>
            2. Un portfolio d'exemples doeuvres pertinents pour votre soumission{" "}
          </p>
          <p>
            3. Des images de l'oeuvre que vous voulez soumettre ou un
            croquis/rendu de ce que vous prévoyez créer{" "}
          </p>
          <p>
            4. Déclaration courte (500 mots ou moins) décrivant ce que Jardin
            Secret signifie pour vous et comment votre travail s'inscrit dans le
            cadre du thème.
          </p>
          <br />
          <br />
          <p>
            Date limite pour envoyer les soumissions: 23:59 vendredi le 26
            janvier
          </p>
        </div>
        <div className="submission-section">
          <p>
            To submit your application, send an email to{" "}
            <a className="email-link" href="mailto:bonjour.hi@entretemps.ca">
              bonjour.hi@entretemps.ca
            </a>{" "}
            with the following info:
          </p>
          <br />
          <p>1. A short biography (around 100 words)</p>
          <p>2. Un portfolio of previous work relevant to your submission</p>
          <p>
            3. Images of the piece(s) you are submitting or a sketch/rendering
            of the work you plan to create
          </p>
          <p>
            4. Short statement (under 500 words) describing what Jardin Secret
            (secret garden) means to you, and how your works fits within the
            scope of the theme.
          </p>
          <br />
          <br /> <p>Submissions close at 11:59pm on Friday January 26</p>
        </div>
      </div>
    </div>
  );
}

export default JardinSecret;
