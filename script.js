let currentQuestion = 0;

function nextQuestion() {
    const quizSet = document.getElementById('quizset');
    
    // Trigger the swipe-left animation
    quizSet.classList.add('swipe-left');
    
    // After the animation ends, update the content and swipe in the new question
    setTimeout(() => {
        currentQuestion++;
        updateQuestion();
        quizSet.classList.remove('swipe-left');
        quizSet.classList.add('swipe-in');
        
        // Remove the swipe-in class after the animation completes
        setTimeout(() => {
            quizSet.classList.remove('swipe-in');
        }, 500);
    }, 500);
}

function updateQuestion() {
    const questionElement = document.getElementById('question');
    const options = document.querySelectorAll('.options .button');

    // Update the question text and options here
    // This is a placeholder, you should load the next question data
    questionElement.textContent = "Question " + (currentQuestion + 1) + " Text";

    options.forEach((option, index) => {
        option.textContent = "Option " + (index + 1);
    });
}
