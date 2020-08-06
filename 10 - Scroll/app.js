// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date")
date.innerHTML = new Date().getFullYear()

// ********** close links ************

const navToggle = document.querySelector(".nav-toggle")
const linksContainer = document.querySelector(".links-container")
const links = document.querySelector(".links")

// navToggle.addEventListener("click", () => {
// 	linksContainer.classList.toggle("show-links")
// })

// place the links dynamically

navToggle.addEventListener("click", () => {
	const containerHeight = linksContainer.getBoundingClientRect().height
	// console.log(containerHeight)
	const linksHeight = links.getBoundingClientRect().height
	// console.log(linksHeight)
	if (containerHeight === 0) {
		//default setup
		// dynamically add height
		linksContainer.style.height = `${linksHeight}px `
	} else {
		linksContainer.style.height = 0
	}
})

const navbar = document.getElementById("nav")
const topLink = document.querySelector(".top-link")
// ********** fixed navbar ************
// use scroll event

window.addEventListener("scroll", () => {
	// console.log(window.pageYOffset)
	const scrollHeight = window.pageYOffset
	const navHeight = navbar.getBoundingClientRect().height
	if (scrollHeight > navHeight) {
		navbar.classList.add("fixed-nav")
	} else {
		navbar.classList.remove("fixed-nav")
	}
	if (scrollHeight > 500) {
		topLink.classList.add("show-link")
	} else {
		topLink.classList.remove("show-link")
	}
})

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link")

scrollLinks.forEach(link => {
	link.addEventListener("click", e => {
		//prevent default
		e.preventDefault()
		//navigate to specific spot
		const id = e.currentTarget.getAttribute("href").slice(1)
		// console.log(id)
		const element = document.getElementById(id)

		//calculate heights
		const navHeight = navbar.getBoundingClientRect().height
		const containerHeight = linksContainer.getBoundingClientRect().height
		const fixedNav = navbar.classList.contains("fixed-nav")

		let position = element.offsetTop - navHeight
		// console.log(position)

		if (!fixedNav) {
			position = position - navHeight
		}

		// for smaller screens to scroll effectively
		//add the container height because more was substracted  from the original height
		if (navHeight > 82) {
			position = position + containerHeight
		}

		window.scrollTo({
			left: 0,
			top: position,
		})

		linksContainer.style.height = 0
	})
})
