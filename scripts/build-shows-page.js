const showList = document.querySelector(".schedule__list");

function displayShow(show) {
  console.log(showList);

  const showItem = document.createElement("li");
  showItem.classList.add("schedule__item");

  const showBox = document.createElement("div");
  showBox.classList.add("schedule__info");

  const showDate = document.createElement("p");
  showDate.innerText = "DATE";
  showDate.classList.add("schedule__main");

  const showDay = document.createElement("p");
  const dateObj = new Date(show.date);
  showDay.innerText = dateObj.toDateString();
  showDay.classList.add("schedule__secondary");
  showDay.classList.add("schedule__secondary--bold");

  const showVenue = document.createElement("p");
  showVenue.innerText = "VENUE";
  showVenue.classList.add("schedule__main");

  const showPlace = document.createElement("p");
  showPlace.innerText = show.place;
  showPlace.classList.add("schedule__secondary");

  const showLocation = document.createElement("p");
  showLocation.innerText = "LOCATION";
  showLocation.classList.add("schedule__main");

  const showCity = document.createElement("p");
  showCity.innerText = show.location;
  showCity.classList.add("schedule__secondary");

  const showButton = document.createElement("button");
  showButton.innerText = "BUY TICKETS";
  showButton.classList.add("schedule__button");

  showBox.appendChild(showDate);
  showBox.appendChild(showDay);
  showBox.appendChild(showVenue);
  showBox.appendChild(showPlace);
  showBox.appendChild(showLocation);
  showBox.appendChild(showCity);
  showBox.appendChild(showButton);
  showItem.appendChild(showBox);
  showList.appendChild(showItem);
}

const apiUrl = "https://project-1-api.herokuapp.com/";
const apiKey = "4f81f939-9fb5-4ace-991c-228a92ce7b27";
const getRequest = "showdates";

let showData = [];
function getData() {
  axios
    .get(`${apiUrl}${getRequest}?api_key=${apiKey}`)
    .then((response) => {
      // console.log("response: ", response);
      const showData = response.data;
      showData.forEach((show) => {
        displayShow(show);
      });
      console.log("Show data Arraaaaay: ", showData);
    })

    .catch((error) => {
      crossOriginIsolated.log("error", error);
    });
}
const paragraphs = document.querySelectorAll(".schedule__item");
function paragraphClick(event) {
  paragraphs.forEach((paragraphs) => {
    paragraphs.classList.remove("selected");
  });
  event.currentTarget.classList.add("selected");
}

console.log("show dataaaaa: ", showData);
console.log("showLiiiiist:", showList);

getData();
displayShow();
