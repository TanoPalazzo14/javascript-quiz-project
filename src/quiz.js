class Quiz {
    // YOUR CODE HERE:
    //
    constructor (questions, timeLimit, timeRemaining){
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    getQuestion(){
        return this.questions[this.currentQuestionIndex]
    }
    
    moveToNextQuestion(){
        this.currentQuestionIndex++;
    }

    shuffleQuestions(){
        const nuevaLista = []
        const copyOriginal = this.questions.slice(0)
        while (copyOriginal.length>0){
            nuevaLista.push((copyOriginal.splice(Math.floor(Math.random()*copyOriginal.length),1))[0])
        }
        this.questions = nuevaLista
    }

    checkAnswer(answer){
        if (answer === this.questions[this.currentQuestionIndex]["answer"]){
            this.correctAnswers++;
        }
    }

    hasEnded(){
        if (this.currentQuestionIndex>=this.questions.length){
            return true
        }
        else if (this.currentQuestionIndex<this.questions.length){
            return false
        }
    }
    filterQuestionsByDifficulty(diff){
        if (diff === 1 || diff === 2 || diff === 3){
            this.questions = this.questions.filter((question) => question.difficulty === diff)
            console.log(this.questions)
        }
    }
    averageDifficulty(){
        let suma = this.questions.reduce((resultado,index) => resultado + index.difficulty,0)
        console.log(suma)
        let promedio = suma / this.questions.length
        console.log(promedio)
        return promedio
    }
}