i18next.init({
  lng: "en",
  resources: {
    en: {
      translation: {
        hero: {
          title: "Break The Silence",
          subtitle: "Experience studio quality sound on the go"
        }
      }
    }
  }
}, function(err, t) {

 
  document.querySelector("h1").textContent = i18next.t("hero.title");
  document.querySelector("p").textContent = i18next.t("hero.subtitle");

});