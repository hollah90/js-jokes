const btnEl = document.getElementById("btn")

const jokeEl = document.getElementById("joke")

const apiKey = "9nLIy4HlFJ0Pd7EPGL7QYw==p0XEonbPL1ZudS5Y";

const options = {
     method: "GET",
     headers: {
          "X-Api-Key": apiKey,
     },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {

     try {
          jokeEl.innerText = "Updating...";
          btnEl.disabled = true;
          btnEl.innerText = "Loading..."


          const response = await fetch(apiURL, options);
          const data = await response.json();


          btnEl.disabled = false;
          btnEl.innerText = "Tell me a joke"

          jokeEl.innerText = data[0].joke;

     } catch (error) {
          jokeEl.innerText = "An error happened, try again later"
          console.log(error)

          btnEl.disabled = false;
          btnEl.innerText = "Tell me a joke"

     }


}



btnEl.addEventListener("click", getJoke);