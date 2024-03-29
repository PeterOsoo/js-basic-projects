const menu = [
	{
		id: 1,
		title: "buttermilk pancakes",
		category: "breakfast",
		price: 15,
		img: "./images/item-1.jpeg",
		desc: ` Gini mit aduwa I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
	},
	{
		id: 2,
		title: "diner double",
		category: "lunch",
		price: 13,
		img: "./images/item-2.jpeg",
		desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
	},
	{
		id: 3,
		title: "godzilla milkshake",
		category: "shakes",
		price: 26,
		img: "./images/item-3.jpeg",
		desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
	},
	{
		id: 4,
		title: "country delight",
		category: "breakfast",
		price: 20,
		img: "./images/item-4.jpeg",
		desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
	},
	{
		id: 5,
		title: "egg attack",
		category: "lunch",
		price: 22,
		img: "./images/item-5.jpeg",
		desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
	},
	{
		id: 6,
		title: "oreo dream",
		category: "shakes",
		price: 18,
		img: "./images/item-6.jpeg",
		desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
	},
	{
		id: 7,
		title: "bacon overflow",
		category: "breakfast",
		price: 80,
		img: "./images/item-7.jpeg",
		desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
	},
	{
		id: 8,
		title: "american classic",
		category: "lunch",
		price: 20,
		img: "./images/item-8.jpeg",
		desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
	},
	{
		id: 9,
		title: "quarantine buddy",
		category: "shakes",
		price: 70,
		img: "./images/item-9.jpeg",
		desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
	},
	{
		id: 10,
		title: "mtura ",
		category: "dinner",
		price: 50,
		img: "./images/item-10.jpeg",
		desc: `served in the dark and sweet when bought bit by bit .`,
	},
	{
		id: 11,
		title: "nyamchom ",
		category: "dinner",
		price: 250,
		img: "./images/item-11.jpeg",
		desc: `served in the choma spots - Bypass.`,
	},
	{
		id: 12,
		title: "WHitecap ",
		category: "beer",
		price: 450,
		img: "./images/item-12.jpeg",
		desc: `served when cold prolly from a bar.`,
	},
]

const sectionCenter = document.querySelector(".section-center")

const container = document.querySelector(".btn-container")

// load items
window.addEventListener("DOMContentLoaded", () => {
	// console.log("rateng its working ")
	displayMenuItems(menu)
	displayMenuButtons()
})

function displayMenuItems(menuItems) {
	let displayMenu = menuItems.map(function (item) {
		// console.log(item)
		return `<article class="menu-item">
        <img src=${item.img} alt=${item.title}  class="photo">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}Ksh</h4>
          </header>
          <p class="item-text">
		  ${item.desc}
          </p>
        </div>
      </article>`
	})
	displayMenu = displayMenu.join("")
	// console.log(displayMenu)
	sectionCenter.innerHTML = displayMenu
}

// function to display menu buttons
const displayMenuButtons = () => {
	const categories = menu.reduce(
		function (values, item) {
			// if item not in array add
			if (!values.includes(item.category)) {
				values.push(item.category)
			}
			return values
		},
		["all"]
	)
	console.log(categories)

	const categoryBtns = categories
		.map(function (category) {
			return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
		})
		.join("")
	container.innerHTML = categoryBtns
	console.log(categoryBtns)

	// when add item dynamicallycan only access once its added to the DOM
	const filterBtns = document.querySelectorAll(".filter-btn")

	// filter items
	filterBtns.forEach(function (btn) {
		btn.addEventListener("click", e => {
			// console.log(e.currentTarget.dataset.id)

			const category = e.currentTarget.dataset.id

			const menuCategory = menu.filter(menuItem => {
				if (menuItem.category === category) {
					return menuItem
				}
			})

			// console.log(menuCategory)

			if (category == "all") {
				displayMenuItems(menu)
			} else {
				displayMenuItems(menuCategory)
			}
		})
	})
}
