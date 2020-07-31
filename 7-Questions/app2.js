//Method 2 using selectors inside the element

const questions = document.querySelectorAll(".question")

questions.forEach(function (question) {
	// console.log(question)
	const btn = question.querySelector(".question-btn")
	console.log(btn)

	btn.addEventListener("click", function () {
		//remove class to other articles to close them
		questions.forEach(function (item) {
			if (item !== question) {
				item.classList.remove("show-text")
			}
		})
		question.classList.toggle("show-text")
	})
})
