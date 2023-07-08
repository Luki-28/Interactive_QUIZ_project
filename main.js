const questions = document.querySelectorAll(".options")
const submitButtons = document.querySelectorAll(".submit-btn")
const score = document.querySelector(".correct-answers")
const playAgain = document.querySelector(".play-again")

let correctAnswers = 0

const checkAnswer = e => {
	const currentQuestion = e.target.previousElementSibling
	const selectedOption = currentQuestion.querySelector(".selected")

	if (!selectedOption) {
		return
	}

	const options = currentQuestion.querySelectorAll(".option")
	options.forEach(option => {
		option.disabled = true
	})

	if (
		selectedOption.textContent === "Africa" ||
		selectedOption.textContent === "Zebra" ||
		selectedOption.textContent === "Paris"
	) {
		selectedOption.classList.add("correct")
		correctAnswers++
	} else {
		selectedOption.classList.add("incorrect")
		const correctOption = currentQuestion.querySelector(".correct")
		correctOption.classList.add("correct")
	}
	score.textContent = correctAnswers
	const currentButton = e.target
	currentButton.disabled = true
}

const selectOption = e => {
	const currentOption = e.target
	const currentQuestion = currentOption.parentNode
	const options = currentQuestion.querySelectorAll(".option")

	options.forEach(option => {
		option.classList.remove("selected")
	})
	currentOption.classList.add("selected")
}

const resetQuiz = () => {
	correctAnswers = 0
	score.textContent = correctAnswers

	questions.forEach(question => {
		const options = question.querySelectorAll(".option")
		options.forEach(option => {
			option.disabled = false
			option.classList.remove("selected", "correct", "incorrect")
		})
	})
	submitButtons.forEach(button => {
		button.disabled = false;
	  });
}

submitButtons.forEach(button => {
	button.addEventListener("click", checkAnswer)
})

questions.forEach(question => {
	const options = question.querySelectorAll(".option")
	options.forEach(option => {
		option.addEventListener("click", selectOption)
	})
})

playAgain.addEventListener("click", resetQuiz)
