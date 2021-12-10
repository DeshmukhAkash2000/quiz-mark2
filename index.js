var readline=require("readline-sync")
score=0



var userName=readline.question("Enter your name ")
console.log("hey welcome ",userName,"\nplay this game and check your knowledge about international realtion")



function play(question,answer){
    var Answer=readline.question(question);
    if (Answer.toUpperCase()===answer.toUpperCase()){
        console.log('Right')
        console.log("----------")
        score+=1
    }else{
        console.log('Wrong')
        console.log("----------")
    }
};



var questi = [{
  question: "Who is father of Realism. \n1.Henry kissinger \n2. Joe Biden \n3. Hans morgenthau \n4.Narendra Modi  \n",
  answer: '3'
}, {
  question: "when was treaty of westphalia happened . \n1. 1648  \n2. 1857  \n3. 1950  \n4. 2000\n",
  answer: '1'
}, {
  question: "who is writer of on way india. \n1. s. jayashankar \n2. Ajit Dobhal  \n3. Rajnath Singh  \n4.Shushma Swaraj \n",
  answer: '1'
}, {
  question: "how many countries has veto power in united nation. \n1. 5 \n2. 6 \n3. 7 \n4.8 \n ",
  answer: "1"
},{
  question: "when was second world war started? \n1.1930 \n2.1939 \n3.1945 \n4.1950 \n",
  answer:"2"
}
];

// Use Loop for call function

for (var i=0;i<questi.length;i++){
    var queslist=questi[i]
    play(queslist.question,queslist.answer)
};

// For Print Output

console.log(userName,"Your final Score is ",score)
