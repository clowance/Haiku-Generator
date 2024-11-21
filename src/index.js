function generateHaiku(event) {
  event.preventDefault();

  new Typewriter("#haiku", {
    strings:
      "The haiku goes here <br>I hope that it will be good <br>It is worth a try",
    autoStart: true,
  });
}

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement.addEventListener("submit", generateHaiku);
