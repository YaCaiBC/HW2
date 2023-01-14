document.addEventListener("DOMContentLoaded", function (event) {


    document.getElementById("button").addEventListener("click", function () {
        //parsing int
        let numOne = parseInt(document.getElementById('textbox1').value);
        let numTwo = parseInt(document.getElementById('textbox2').value);
        let numThree = parseInt(document.getElementById('textbox3').value);


        //adding numbers
        let answer = (numOne + numTwo + numThree) / 3;

        //display
        document.getElementById('output').innerHTML = answer;

        //document.getElementById("textbox1").value = "success";
    });//function
}); // DOMContentLoaded

