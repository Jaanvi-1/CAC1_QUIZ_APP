const quizData = [
    {
        question: "What is the purpose of feature scaling in machine learning?",
        options: ["Increase model complexity", "Normalize data to a standard range", "Improve model interpretability", "Reduce the number of features"],
        correctAnswer: "Normalize data to a standard range",
        funnyComment: "Not quite! Feature scaling serves a different purpose! 😄",
        cheerfulComment: "Exactly! Feature scaling normalizes data to a standard range! 📏"
    },
    
    {
        question: "What is the main programming language used in data science?",
        options: ["Java", "Python", "C++", "JavaScript"],
        correctAnswer: "Python",
        funnyComment: "Nice try, but that's not it! 😜",
        cheerfulComment: "Correct! Python is the king! 🐍"
    },
    {
        question: "What is the primary purpose of exploratory data analysis (EDA) in data science?",
        options: ["To build machine learning models", "To visualize and understand data patterns", "To perform hypothesis testing", "To clean and preprocess data"],
        correctAnswer: "To visualize and understand data patterns",
        funnyComment: "Not quite! Try again! 😝",
        cheerfulComment: "Absolutely right! EDA helps understand data patterns! 📊"
    },
    {
        question: "Which algorithm is commonly used for classification tasks in machine learning?",
        options: ["K-Means", "Decision Trees", "Linear Regression", "PCA"],
        correctAnswer: "Decision Trees",
        funnyComment: "Oops! Not this time! Better luck next time! 🤓",
        cheerfulComment: "Great job! Decision Trees are widely used for classification! 🌳"
    },
    {
        question: "What does the term 'Overfitting' refer to in machine learning?",
        options: ["Model fitting the training data well", "Model fitting noise in the data", "Model underperforming on test data", "Model not fitting the training data"],
        correctAnswer: "Model fitting noise in the data",
        funnyComment: "Almost there! Overfitting involves fitting noise! 🧐",
        cheerfulComment: "Correct! Overfitting occurs when the model fits noise in the data! 🎉"
    },
    {
        question: "In statistics, what is the purpose of p-value?",
        options: ["Measure of central tendency", "Probability of observing the data given the null hypothesis is true", "Confidence interval", "Standard deviation"],
        correctAnswer: "Probability of observing the data given the null hypothesis is true",
        funnyComment: "Nice try! P-value has a different role! 🤔",
        cheerfulComment: "Well done! P-value indicates the probability under the null hypothesis! 📈"
    },
    {
        question: "What is the purpose of a confusion matrix in classification?",
        options: ["Evaluate model performance", "Visualize data distribution", "Calculate correlation", "Normalize data"],
        correctAnswer: "Evaluate model performance",
        funnyComment: "Not quite! Confusion matrix is for model evaluation! 😄",
        cheerfulComment: "Exactly! Confusion matrix helps assess model performance! 🤩"
    },
    {
        question: "What is the main goal of dimensionality reduction in machine learning?",
        options: ["Increase computation time", "Decrease model complexity", "Improve data visualization", "Enhance feature importance"],
        correctAnswer: "Decrease model complexity",
        funnyComment: "Oops! Not this time! Dimensionality reduction has a different goal! 😅",
        cheerfulComment: "Spot on! It aims to reduce model complexity and computation! 🚀"
    },
    {
        question: "What is the purpose of regularization in machine learning?",
        options: ["Enhance model interpretability", "Reduce model overfitting", "Increase model bias", "Improve model accuracy"],
        correctAnswer: "Reduce model overfitting",
        funnyComment: "Nice try! Regularization helps with something else! 😜",
        cheerfulComment: "Correct! Regularization helps prevent overfitting! 🛡️"
    },
    {
        question: "Which programming language is commonly used for data analysis and visualization in data science?",
        options: ["Java", "R", "C#", "Swift"],
        correctAnswer: "R",
        funnyComment: "Almost there! Another language is more common in data science! 🤓",
        cheerfulComment: "Well done! R is widely used for data analysis and visualization! 📊"
    }
];

let currentQuestion = 0;
let score = 0;

const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const resultContainer = document.getElementById("result-container");
const nextButton = document.getElementById("next-btn");

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.innerText = currentQuizData.question;
    optionsContainer.innerHTML = "";

    currentQuizData.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option, currentQuizData.correctAnswer));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        score++;
        resultContainer.innerHTML = `<p>${quizData[currentQuestion].cheerfulComment}</p>`;
    } else {
        resultContainer.innerHTML = `<p>${quizData[currentQuestion].funnyComment}</p>`;
    }

    nextButton.style.display = "block";
    optionsContainer.style.pointerEvents = "none";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
        resultContainer.innerHTML = "";
        nextButton.style.display = "none";
        optionsContainer.style.pointerEvents = "auto";
    } else {
        showFinalResult();
    }
}

function showFinalResult() {
    let resultMessage = "";
    if (score === quizData.length) {
        resultMessage = "Congratulations! You're a data science genius! 🎉";
    } else if (score >= Math.floor(quizData.length / 2)) {
        resultMessage = "Not bad! You've got some data science knowledge! 😄";
    } else {
        resultMessage = "Oops! Data science might be a bit tricky for you! 😅";
    }

    questionContainer.innerText = `Your Score: ${score} out of ${quizData.length}`;
    optionsContainer.innerHTML = "";
    resultContainer.innerHTML = `<p>${resultMessage}</p>`;
    nextButton.style.display = "none";
}

loadQuestion();
nextButton.addEventListener("click", nextQuestion);