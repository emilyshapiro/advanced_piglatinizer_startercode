/* global $ */

// Pig Latin takes the first consonant (or consonant cluster) of an English 
// word, moves it to the end of the word and suffixes an ay, or if a word
// begins with a vowel you just add way to the end. For example, pig becomes
// igpay, banana becomes ananabay, and aadvark becomes aadvarkway.

$(document).ready(function() {
function startsWithVowel(word){
    $("#pig").append(word + "yay");
    }
  
function startsWithConsonant(word){
    
     
     $("#pig").append(word.charAt(1) + word.substring(0)+ "ay");
    }
    
    
    $("button").click(function(){
        var word =$("input").val();
         $("#pig").empty();
  
   if (word.charAt(0) === "a" || word.charAt(0) === "e" || word.charAt(0) === "i" || word.charAt(0) === "o"|| word.charAt(0) === "u"){
            startsWithVowel(word);
      
       }
    else {
        startsWithConsonant(word);
    }
    
    
    });




/*----------------------- Exercise 4-----------------------*/
// Moves the first consonant to the end of the word, appends "ay" to the end of the word,
// and returns the word.
// (coding --> odingcay)
//function convertWordWithConsonant(word) {

//}


    
    
//Math.random();
    // This function should return true if the input word starts with a vowel,
    // otherwise it should return false.
    //function wordStartsWithVowel(word) {
        

   // }

    // Appends "way" to the end of the word
   // function wordStartsWithVowelTransformation(word) {

    //}

    // Moves the first consonant to the end of the word and appends "ay" to the end of the word
    //function wordStartsWithConsonantTransformation(word) {

    //}

    // If the word starts with a vowel return the result the wordStartsWithVowelTransformation function.
    // Otherwise return the result of the wordStartsWithVowelTransformation.
    //function toPigLatinWord(word) {

    //}

    //Iterates through all the words in the sentence and transforms each word to pig latin
    //function toPigLatinSentence(sentence) {

    //}

    // Create a click handler that takes in the value from the input box.
        // Gets a sentence from an input
        // transfrom the sentence to pig latin
        // Displays the result on the screen in the output element
});
