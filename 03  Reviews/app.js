// local reviews data
// can access ajax data
// array of objects
const reviews = [
	{
		id: 1,
		name: "Nyar Seme",
		job: "web developer",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
		text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
	},
	{
		id: 2,
		name: "Anna Baricho",
		job: "web designer",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
		text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
	},
	{
		id: 3,
		name: "Peter Clarks",
		job: "intern",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
		text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
	},
	{
		id: 4,
		name: "Jaka Black",
		job: "the boss",
		img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
		text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
	},
]

//select Items

const img = document.getElementById("person-img")
const author = document.getElementById("author")
const job = document.getElementById("job")
const info = document.getElementById("info")

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

//set starting item

let currentItem = 2
// let currentItem = Math.floor(Math.random() * reviews.length)

// load initial item

window.addEventListener("DOMContentLoaded", function () {
	// console.log("taki taki")
	showPerson()
})

// refractor into a function
const showPerson = () => {
	const item = reviews[currentItem]
	img.src = item.img
	author.textContent = item.name
	job.textContent = item.job
	info.textContent = item.text
}

// show next person

nextBtn.addEventListener("click", function () {
	currentItem++
	if (currentItem > reviews.length - 1) {
		currentItem = 0
	}
	showPerson()
})

// show previous person

prevBtn.addEventListener("click", function () {
	currentItem--
	if (currentItem < 0) {
		currentItem = reviews.length - 1
	}
	showPerson()
})

// show random person
randomBtn.addEventListener("click", function () {
	//to get the range
	currentItem = Math.floor(Math.random() * reviews.length)
	console.log(currentItem)
	showPerson()
})
