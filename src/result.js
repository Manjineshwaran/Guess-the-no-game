import React from "react";
function Result({secretnumber, term}){
    let result;
    if(term){
    if (term>secretnumber){
        result ="higher";
    }
    else if(term<secretnumber){
        result="lower"
    }
    else if(term=secretnumber){
        result="correct";
    }
    else{
        result="enter valid input"
    }}
    return (
       <h3>You Guessed : {result}</h3>
)}
export default Result