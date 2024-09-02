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
        const original = this.choices.slices(0);
        const nuevaLista = []
        while (this.choices.length>0){
            // console.log(this.choices)
            nuevaLista.push((this.choices.splice(Math.floor(Math.random()*this.choices.length),1))[0])
        }
        this.choices = nuevaLista
    }
}

let q1 = new Question ("question", ["choice1", "choice2", "choice3", "choice4", "choice5", "choice6", "choice7"], "ans", 2.3)
console.log(q1)
q1.shuffleChoices()

console.log(q1.choices.length)











// const arrOriginal = [1,2,3,4,5,6,7,8,9,10,]
// const nuevaLista =[]
// while (arrOriginal.length>0){
//     console.log(arrOriginal)
//     nuevaLista.push(arrOriginal.splice(Math.floor(Math.random()*arrOriginal.length),1))
// }
// console.log(nuevaLista)