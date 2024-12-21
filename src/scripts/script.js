const zodiacSign = document.getElementById("zodiac-sign");
const timeframe = document.getElementById("timeframe");

const predictionBtn = document.querySelector(".prediction-btn");
const p = document.querySelector("p");

predictionBtn.addEventListener("click", e => {
  e.preventDefault();

  fetchPrediction()
    .then(res => {
      p.textContent = res.data.horoscope_data;
    })
    .catch(res => {
      p.innerHTML = `Opt in here: <a href="https://cors-anywhere.herokuapp.com/">here</a>`;
    });
});

const URL =
  "https://cors-anywhere.herokuapp.com/https://horoscope-app-api.vercel.app/api/v1/get-horoscope";

async function fetchPrediction() {
  const headers = { accept: "application/json" };
  const res = await fetch(
    `${URL}/${timeframe.value}?sign=${zodiacSign.value}`,
    { headers }
  );
  const json = await res.json();
  return json;
}
