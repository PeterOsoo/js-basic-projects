// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById("grocery")

const submitBtn = document.querySelector(".submit-btn")

const container = document.querySelector(".grocery-container")
const clearBtn = document.querySelector(".clear-btn")
const list = document.querySelector(".grocery-list")

// edit option

// 3 variables

let editElement
let editFlag = false
let editID = ""

// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem)

// ****** FUNCTIONS **********
function addItem(e) {
	e.preventDefault()
	const value = grocery.value
	// console.log(value)
	const id = new Date().getTime().toString()
	// console.log(id)

	if (value !== "" && editFlag === false) {
		console.log("add item to the list")
	} else if (value !== "" && editFlag === true) {
		console.log("editing")
	} else {
		console.log("empty value")
	}
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********
