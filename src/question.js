class Question {
    constructor(text, choices, answer, difficulty){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
        if (difficulty<1){
            this.difficulty = 1
        }
        else if (difficulty>3){
            this.difficulty = 3
        }
        else {
        this.difficulty = Math.round(difficulty);
        }
    }
    shuffleChoices(){
        const nuevaLista = []
        const copyOriginal = this.choices.slice(0)
        while (copyOriginal.length>0){
            nuevaLista.push((copyOriginal.splice(Math.floor(Math.random()*copyOriginal.length),1))[0])
        }
        this.choices = nuevaLista
    }
}