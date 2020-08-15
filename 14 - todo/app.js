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

	if (value && !editFlag) {
		// console.log("add item to the list")
		const element = document.createElement("article")
		// add class
		element.classList.add("grocery-item")
		// add id
		const attr = document.createAttribute("data-id")
		attr.value = id
		element.setAttributeNode(attr)
		element.innerHTML = ` <p class="title">${value}</p>
		<div class="btn-container">
		  <button type="button" class="edit-btn"> <i class="fas fa-edit"></i> </button>
		  <button type="button" class="delete-btn"> <i class="fas fa-trash"></i></button>
		</div>`

		//append child
		list.appendChild(element)

		//display alert
		displayAlert("item added to the list", "success")

		//show container
		container.classList.add("show-container")

		// add to local storage
		addToLocalStorage(id, value)
		//set back to default
		setBackToDefault()
	} else if (value && editFlag) {
		console.log("editing")
	} else {
		displayAlert("Please enter value", "danger")
	}
}
// display alert

const displayAlert = (text, action) => {
	alert.textContent = text
	alert.classList.add(`alert-${action}`)

	//remove alert

	setTimeout(() => {
		alert.textContent = ""
		alert.classList.remove(`alert-${action}`)
	}, 2000)
}

// / set back to default
const setBackToDefault = () => {
	// console.log("set back to default")
	grocery.value = ""
	editFlag = false
	editID = ""
	submitBtn.textContent = "submit"
}

const addToLocalStorage = (id, value) => {
	console.log("added to local storage")
}

// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********

// 6.58.08
