let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment();
losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do dddd");
losAngelesTimeElement.innerHTML = "1:48:15 <small>AM</small>";