const toggleBtn = document.querySelector(".sidebar-toggle")
const closeBtn = document.querySelector(".close-btn")
const sidebar = document.querySelector(".sidebar")

// add and remove sidebar class
toggleBtn.addEventListener("click", function () {
	console.log(sidebar.classList)
	//toggle is faster
	sidebar.classList.toggle("show-sidebar")
})

closeBtn.addEventListener("click", function () {
	sidebar.classList.remove("show-sidebar")
})
