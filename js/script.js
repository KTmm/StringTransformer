function transformString(){
    var input = document.getElementById("input").value;
    var message = switchCaseFor5thElement(input);
    document.getElementById("content").innerHTML = message;
}

function switchCaseFor5thElement(input){
    var newString = "Result: ";
    var length = input.length;
    var letterCount = 0;
    for(i = 0; i < length; i++){
        if(isLetter(input.charAt(i))){
            letterCount += 1;
            if(letterCount % 5 == 0){

                var newLetter = switchCaseForLetter(input.charAt(i));
                newString += newLetter;
            } else {
                newString += input.charAt(i);}
        } else {
            newString += input.charAt(i);
            }
    }
    return newString;
}

function isLetter(letter){
    return letter.toUpperCase() != letter.toLowerCase();
}

function switchCaseForLetter(letter){
    if(letter == letter.toUpperCase()){
        return letter.toLowerCase();
        } else {
        return letter.toUpperCase();
        }
}

document.querySelector("button").addEventListener("click",transformString)
