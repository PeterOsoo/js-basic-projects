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

let futureDate = new Date(2021, 4, 27, 20, 30, 0)
// console.log(futureDate)

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
// console.log(weekday)

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} ${hours}:${minutes}hrs `

// get milliseconnds for future date and current date and subtract them

//future time in ms

const futureTime = futureDate.getTime()
// console.log(futureTime)

const getRemainingTime = () => {
	const today = new Date().getTime()
	// console.log(today)

	const t = futureTime - today
	console.log(t)
	//1s = 1000ms
	//1m = 60s
	//1hr = 60mins
	//1d = 24hrs
	//threrefore

	const oneDay = 24 * 60 * 60 * 1000
	const oneHour = 60 * 60 * 1000
	const oneMinute = 60 * 1000
	// console.log(oneDay)

	// calculate all values
	let days = t / oneDay
	// console.log(days)
	days = Math.floor(days)
	console.log(days)

	let hours = Math.floor((t % oneDay) / oneHour)
	console.log(hours)

	let minutes = Math.floor((t % oneHour) / oneMinute)
	let seconds = Math.floor((t % oneMinute) / 1000)
	// console.log(minutes)

	//set values array

	const values = [days, hours, minutes, seconds]

	const format = item => {
		if (item < 10) {
			return (item = `0${item}`)
		}
		return item
	}

	items.forEach((item, index) => {
		item.innerHTML = format(values[index])
	})
}

//countdown

let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime()
