document.addEventListener("DOMContentLoaded", function (event) {


    document.getElementById("button").addEventListener("click", function () {
        //parsing int
        let numOne = document.getElementById("textbox1").value;
        let numTwo = document.getElementById('textbox2').value);
        let numThree = document.getElementById('textbox3').value);

        //adding numbers
       let total =parseInt(numOne)+parseInt(numTwo)+parseInt(numThree);
       let answer =total/3;

        //display
        document.getElementById('output').innerHTML = answer;

        //document.getElementById("textbox1").value = "success";
    });//function
}); // DOMContentLoaded

