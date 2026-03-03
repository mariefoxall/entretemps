import { Database } from "firebase-firestore-lite";

const db = new Database({ projectId: "jardin-secret-6c80c" });

const secretsRef = db.ref("/secrets");
export const getSecretsFromDB = async () => await secretsRef.get();

export const addSecretToDB = async (secret, date) => {
  await secretsRef.add({
    secret,
    date,
  });
};
