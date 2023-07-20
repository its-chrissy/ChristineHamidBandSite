var concertShows = [
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
];

// Accessing and displaying the concert shows
for (var i = 0; i < concertShows.length; i++) {
  var show = concertShows[i];
  console.log("Date: " + show.date);
  console.log("Venue: " + show.venue);
  console.log("Location: " + show.location);
}
