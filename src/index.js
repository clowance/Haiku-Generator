function displayHaiku(response) {
  console.log("haiku generated");

  new Typewriter("#haiku", {
    strings: response.data.answer,
    autoStart: true,
  });
}

function generateHaiku(event) {
  event.preventDefault();

  let topicInput = document.querySelector("#user-instructions");
  let apiKey = "cbfa4f3bo097d8bbfbd63t0a17f12af3";
  let context =
    "You are a haiku master and love to write pithy and cleaver haikus based on topics selected by the user. You should generate a haiku in basic HTML format and separate each line with a <br />. Make sure to follow the user instructions for the topic of the haiku. Don't include any quotation marks. Please do not generate a title for the haiku.";
  let prompt = `User instructions: Generate a haiku about ${topicInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayHaiku);
}

let haikuFormElement = document.querySelector("#haiku-generator-form");
haikuFormElement.addEventListener("submit", generateHaiku);
