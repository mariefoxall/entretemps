import "./JardinSecret.css";
import { addSecretToDB } from "../firebase";
import { useEffect, useState } from "react";
import { getSecretsFromDB } from "../firebase";
import { useTranslation } from "react-i18next";

function JardinSecretForm() {
  const { t } = useTranslation("forms");
  const [secret, setSecret] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [disabled, setDisabled] = useState(true);

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
      setError(false);
      resetForm();
    } catch (e) {
      console.warn(e);
      setError(true);
    }
  };

  const handleSecretTyping = (event) => {
    setSuccess(false);
    setError(false);
    const { value } = event.target;

    if (value.length <= 300 && value.length > 0) {
      setSecret(value);
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const resetForm = () => {
    setSecret("");
    const secretInput = document.getElementById("secret-textarea");
    secretInput.value = "";
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
          {t("secretForm.descriptionLaunch")} <br />
          {t("secretForm.descriptionInstructions")}
        </p>
        <div className="form-section">
          <label htmlFor="secret-textarea">{t("secretForm.label")}</label>
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
              placeholder={t("secretForm.placeholder")}
            ></textarea>
            <div className="submit-button-and-message">
              {!success && (
                <button
                  disabled={disabled}
                  className="secret-submit-button"
                  type="submit"
                >
                  {t("secretForm.submitButton")}
                </button>
              )}
              {success && (
                <p className="success">{t("secretForm.successMessage")}</p>
              )}
              {error && (
                <p className="form-error" role="alert">
                  {t("secretForm.errorMessage")}
                </p>
              )}
            </div>
          </form>
        </div>
        {!success && (
          <p className="extra-details">
            {t("secretForm.maxLengthNote")}
            <br />
            {t("secretForm.moderationNote")}
          </p>
        )}
      </div>
    </div>
  );
}

export default JardinSecretForm;
