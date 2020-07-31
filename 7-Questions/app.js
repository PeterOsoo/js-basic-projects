// Option 1 . traversing the dom

// select question-btn & loop over them

const btns = document.querySelectorAll(".question-btn")

btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		console.log(e.currentTarget.parentElement.parentElement)
		const question = e.currentTarget.parentElement.parentElement
		question.classList.toggle("show-text")
	})
})
