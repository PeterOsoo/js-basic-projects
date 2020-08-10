const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
]
const weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
]

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")

const items = document.querySelectorAll(".deadline-format h4")

// console.log(items)

let futureDate = new Date(2021, 4, 27, 18, 30, 0)
console.log(futureDate)

const year = futureDate.getFullYear()
// console.log(year)

const hours = futureDate.getHours()
const minutes = futureDate.getMinutes()

let month = futureDate.getMonth()
// console.log(months[month])

month = months[month]

const date = futureDate.getDate()

let weekday = futureDate.getDay()
weekday = weekdays[weekday]
console.log(weekday)

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}hrs `
