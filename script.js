const titleSeason = document.getElementById("season");
const bgImage = document.body;
const cDays = document.getElementById("days");
const cHours = document.getElementById("hours");
const cMinutes = document.getElementById("minutes");
const cSeconds = document.getElementById("seconds");

const countdown = function () {
  const arrSeasons = [
    {
      name: "Spring",
      image: "spring.webp",
      date: new Date("21 Sep 2020"),
    },
    {
      name: "Summer",
      image: "summer.webp",
      date: new Date("21 Dec 2020"),
    },
    {
      name: "Autumn",
      image: "autumn.webp",
      date: new Date("21 Mar 2021"),
    },
    {
      name: "Winter",
      image: "winter.webp",
      date: new Date("21 Jul 2021"),
    },
  ];

  const now = new Date();
  const closest = getClosest(now, arrSeasons);

  const totalSeconds = (closest.date - now) / 1000;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds) % 60;

  titleSeason.innerText = closest.name;
  bgImage.style.backgroundImage = closest.image;
  document.body.style.backgroundImage = `url(${closest.image})`;
  cDays.innerText = leadingZero(days);
  cHours.innerText = leadingZero(hours);
  cMinutes.innerText = leadingZero(minutes);
  cSeconds.innerText = leadingZero(seconds);
};

const leadingZero = function (number) {
  return number < 10 ? `0${number}` : number;
};
const getClosest = (today, arr) =>
  arr
    .filter((d) => d.date >= today)
    .reduce((a, b) => (a.date - today < b.date - today ? a : b));
countdown();
setInterval(countdown, 1000);
