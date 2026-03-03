import "./JardinSecret.css";
import { addSecretToDB } from "../firebase";
import { useEffect, useState } from "react";
import { getSecretsFromDB } from "../firebase";

function JardinSecret() {
  const [secret, setSecret] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   console.log(getSecretsFromDB());
  // }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const date = new Date();
    try {
      const dbResult = await addSecretToDB(secret, date);
      console.warn(dbResult);

      setSuccess(true);
      resetForm();
    } catch (e) {
      console.warn(e);
      console.warn("oops");
    }
  };

  const handleSecretTyping = (event) => {
    setSuccess(false);
    const { value } = event.target;

    if (value.length <= 300 && value.length > 0) {
      setSecret(value);
    }
  };

  const resetForm = () => {
    setSecret("");
    const secretInput = document.getElementById("secret-textarea");
    secretInput.value = "";
  };

  const checkDisabled = () => {
    return secret.length > 300 || secret.length <= 0;
  };

  return (
    <div className="exhibitions-page">
      <h3>JARDIN SECRET</h3>
      {/* <div className="exhibition-description">
        <p>
          Une précieuse forteresse de sentiments ou de pensées intimes que nous
          voulons garder exclusivement pour nous. Nos mots cachés, notre poésie
          intime, un lieu où nous nous sentons en sécurité et protégés. <br />
          <br />A precious fortress of intimate feelings or thoughts that we
          want to keep exclusively for ourselves. Our hidden words, our intimate
          poetry, a place where we feel safe and held.
        </p>
      </div> */}
      <div id="form-description">
        <p>
          Lors de notre vernissage, nous allons partager nos secrets. <br />
          Écrivez un secret dans la boîte ci-dessous, et il sera ajouté à notre
          machine à bonbons pour être choisi au hasard et qu'un inconnu puisse
          le garder pour toi.{" "}
        </p>
        <p>
          At our launch party, we will share secrets. <br />
          Divulge a secret in the box below, and it will be added to our candy
          machine to be chosen at random for a stranger to hold onto.
        </p>
        <div className="form-section">
          <label htmlFor="secret-textarea">SECRETS*</label>
          <form
            id="secret-form"
            onSubmit={handleSubmit}
            className="secret-submission-form"
            aria-describedby="form-description"
          >
            <textarea
              onChange={handleSecretTyping}
              id="secret-textarea"
              required
              maxLength={500}
              rows={8}
              placeholder="Écrivez votre secret ici!
            Write your secret here!"
            ></textarea>
            <div className="submit-button-and-message">
              <button
                disabled={checkDisabled()}
                className="secret-submit-button"
                type="submit"
              >
                Soumettre / Submit
              </button>{" "}
              {success && (
                <p className="success">
                  Success! Your bid has been submitted :)
                </p>
              )}
            </div>
          </form>
        </div>
        <p className="extra-details">
          * Maximum 500 charactères/characters
          <br />
          * Aucun secret jugé offensif ou haineux ne sera accepté pour ce
          projet. La sélection sera à la discrétion de la galerie.
          <br />* No secrets deemed offensive or hateful will be accepted for
          this project. The selection will be at the discretion of the
          gallery.{" "}
        </p>
      </div>
    </div>
  );
}

export default JardinSecret;
