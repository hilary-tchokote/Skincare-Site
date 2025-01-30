module.exports = {
  locales: ["en", "fr", "es"], // Langues supportées
  output: "src//locales//$LOCALE.json", // Chemin des fichiers générés
  defaultValue: (locale, namespace, key) => key, // Utiliser la clé comme valeur par défaut
  useKeysAsDefaultValue: true,
  input: ["src/**/*.{js,jsx,ts,tsx}"], // Fichiers analysés
  sort: false,
  createOldCatalogs: false,
};
