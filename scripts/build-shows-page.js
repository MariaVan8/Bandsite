const showData = [
  {
    title1: "DATE",
    title2: "VENUE",
    title3: "LOCATION",
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    title1: "DATE",
    title2: "VENUE",
    title3: "LOCATION",
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
    button: "BUT TICKETS",
  },
  {
    title1: "DATE",
    title2: "VENUE",
    title3: "LOCATION",
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    title1: "DATE",
    title2: "VENUE",
    title3: "LOCATION",
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
  {
    title1: "DATE",
    title2: "VENUE",
    title3: "LOCATION",
    date: "Fri Nov 26 2021",
    venue: "Ronald Lane",
    location: "Moscow Center",
    button: "BUY TICKETS",
  },
  {
    title1: "DATE",
    title2: "VENUE",
    title3: "LOCATION",
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
    button: "BUY TICKETS",
  },
];

const showList = document.querySelector(".schedule__list");
console.log(showList);
for (let i = 0; i < showData.length; i++) {
  console.log(showData[i]);

  const showItem = document.createElement("li");
  showItem.classList.add("schedule__item");

  const showBox = document.createElement("div");
  showBox.classList.add("schedule__info");

  const showDate = document.createElement("p");
  showDate.innerText = showData[i].title1;
  showDate.classList.add("schedule__main");

  const showDay = document.createElement("p");
  showDay.innerText = showData[i].date;
  showDay.classList.add("schedule__secondary");
  showDay.classList.add("schedule__secondary--bold");

  const showVenue = document.createElement("p");
  showVenue.innerText = showData[i].title2;
  showVenue.classList.add("schedule__main");

  const showPlace = document.createElement("p");
  showPlace.innerText = showData[i].venue;
  showPlace.classList.add("schedule__secondary");

  const showLocation = document.createElement("p");
  showLocation.innerText = showData[i].title3;
  showLocation.classList.add("schedule__main");

  const showCity = document.createElement("p");
  showCity.innerText = showData[i].location;
  showCity.classList.add("schedule__secondary");

  const showButton = document.createElement("button");
  showButton.innerText = showData[i].button;
  showButton.classList.add("schedule__btn");

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
