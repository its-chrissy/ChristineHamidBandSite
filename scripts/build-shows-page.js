// Concerts data array
const Displayshows = [
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

// Function to create concert rows dynamically
function createConcertRow(concert) {
  const row = document.createElement("div");
  row.className = "concerts-table-row";

  const artistCol = document.createElement("div");
  artistCol.textContent = concert.artist;

  const venueCol = document.createElement("div");
  venueCol.textContent = concert.venue;

  const cityCol = document.createElement("div");
  cityCol.textContent = concert.city;

  const dateCol = document.createElement("div");
  dateCol.textContent = concert.date;

  row.appendChild(artistCol);
  row.appendChild(venueCol);
  row.appendChild(cityCol);
  row.appendChild(dateCol);

  // Apply different styling based on concert state
  if (concert.state === "past") {
    row.style.backgroundColor = "red";
  } else if (concert.state === "upcoming") {
    row.style.backgroundColor = "grey";
  }

  return row;
}

// Function to render the concerts table
function renderConcertsTable() {
  const concertsTable = document.getElementById("concerts-table");

  // Create concert rows and append them to the table
  for (const concert of concerts) {
    const row = createConcertRow(concert);
  }
}

// Call the renderConcertsTable function to generate the table
displayShows();
