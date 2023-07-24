// Concerts shows array

let shows = [
  {
    date: "Tue Sept 21 2021 ",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021 ",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021 ",
    venue: "View Lounge ",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021 ",
    venue: "Hyatt Agency ",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center ",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021 ",
    venue: "Press Club ",
    location: "San Francisco, CA",
  },
];

function displayShows(arr) {
  let showsContainer = document.querySelector(".shows__container"); // <---parent

  let showsHeaderContainer = document.createElement("div");
  showsHeaderContainer.classList.add("shows__header--container");
  showsContainer.appendChild(showsHeaderContainer);

  let header = document.createElement("h2");
  header.classList.add("header");
  showsHeaderContainer.appendChild(header);
  header.innerText = "Shows";

  let showsBox = document.createElement("div");
  showsBox.classList.add("showsbox__main");
  showsContainer.appendChild(showsBox);

  let subHeader = document.createElement("div");
  subHeader.classList.add("subheader__container");
  showsContainer.appendChild(showsBox);

  let subHeaderDate = document.createElement("h3");
  subHeaderDate.classList.add("subheader__date");
  subHeader.appendChild(subHeaderDate);
  subHeaderDate.innerText = "DATE";

  let subHeaderVenue = document.createElement("h3");
  subHeaderVenue.classList.add("subheader__venue");
  subHeader.appendChild(subHeaderVenue);
  subHeaderVenue.innerText = "VENUE";

  let subHeaderLocation = document.createElement("h3");
  subHeaderLocation.classList.add("subheader__location");
  subHeader.appendChild(subHeaderLocation);
  subHeaderLocation.innerText = "LOCATION";

  let button = document.createElement("button");
  button.classList.add("subheader__button");
  subHeader.appendChild(button);
  button.innerText = "BUY TICKETS";

  for (let i = 0; i < arr.length; i++) {
    let show = arr[i];

    let showCard = document.createElement("div");
    showCard.classList.add("show__card");
    showsBox.appendChild(showCard);

    let showDate = document.createElement("h3");
    showDate.classList.add("show__date");
    showCard.appendChild(showDate);
    showDate.innerText = "DATE";

    let date = document.createElement("h3");
    date.classList.add("show__date--data");
    showCard.appendChild(date);
    date.innerText = arr[i]["date"];

    let showVenue = document.createElement("h3");
    showVenue.classList.add("show__venue");
    showCard.appendChild(showVenue);
    showVenue.innerText = "VENUE";

    let venue = document.createElement("h3");
    venue.classList.add("show__venue--data");
    showCard.appendChild(venue);
    venue.innerText = arr[i]["venue"];

    let showLocation = document.createElement("h3");
    showLocation.classList.add("show__location");
    showCard.appendChild(showLocation);
    showLocation.innerText = "LOCATION";

    let location = document.createElement("h3");
    location.classList.add("show__location--data");
    showCard.appendChild(location);
    location.innerText = arr[i]["location"];

    let showButton = document.createElement("div");
    showButton.classList.add("show__button");
    showCard.appendChild(showButton);

    let button = document.createElement("button");
    button.classList.add("show__button--btn");
    showButton.appendChild(button);
    button.innerText = "BUY TICKETS";
  }
}

// Display the default shows when the page loads
displayShows(shows);
