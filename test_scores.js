const scores = [];

let score = 0;
let total = 0;
let count = 0;

do{
    score = parseInt(prompt("Input a score(-1 to end): "));

    if((score >= 0 || score<=100) && score!=-1){
        scores[scores.length]=score;
        total+=score;
        count++;
        document.write(`<p>Score ${count}: ${score}</p>`);
    }else{
        if(score!=-1){
        alert("Score must be a valid number from 0 through 100.");
        }
    }

}while(score!=-1);

if(scores.length>0)
{
    const average = parseInt(total/count);
    document.write(`<p>Average score is ${average}</p>`);
}