document.getElementById("btnAdd").addEventListener('click', function() {
    let newInput = document.createElement('input');
        newInput.className = "newInput";
        newInput.type = "number";

    let newTxt = document.createElement('span');
        newTxt.innerText = "X";

        //activates the X button
        newTxt.addEventListener('click', function() {
            sNewList.remove();
        });
        
    var sNewList = document.createElement('li');       
        sNewList.className ="liGrade";
        sNewList.append( newInput, newTxt );

        document.querySelector("ul").append(sNewList);
})

document.getElementById("btnSave").addEventListener('click', function() {
    
    
    let batchDiv = document.createElement('div');
        batchDiv.className ="lower-section";
    
    // for the average
    var newInputElements = document.querySelectorAll('.newInput');
    let sum = 0;
    let count = 0;

    newInputElements.forEach(function(inputElement) {
        let grade = Number(inputElement.value);
        
        if (!isNaN(grade)) {
            sum += grade;
            count++;
        }
    });

    let averageText = "";
    if (count !== 0) {
        let average = sum / count;
        averageText = " - Average: " + average.toFixed(2);
    }

    // Validation: Check if there are less than 2 number input fields
    if (newInputElements.length < 3) {
        alert("Please input at least three grades.");
        return;
    }

    // student name + the average
    let studentNameValue = document.getElementById("studentName").value;
    let studentNameDiv = document.createElement('div');
    studentNameDiv.innerText = studentNameValue + averageText;
    batchDiv.appendChild(studentNameDiv);

    // grades to display
    var newInputElements = document.querySelectorAll('.newInput');
//         newInputElements.forEach(function(inputElement, index) {
//             let gradeDiv = document.createElement('div');
//             gradeDiv.innerText = "Grade " + (index + 1) + ": " + inputElement.value; // Using index for the grade number
//             batchDiv.appendChild(gradeDiv);
// });
    for(let i = 0; i < newInputElements.length; i++) {
        let gradeDiv = document.createElement('div');
        gradeDiv.innerText = "Grade " + (i + 1) + ": " + newInputElements[i].value;
        batchDiv.appendChild(gradeDiv);
    }

    // Validation: Check if studentNameValue is empty
    if (!studentNameValue.trim()) {
        alert("Please input student name.");
        return;
    }

    document.querySelector(".lower-container").appendChild(batchDiv);

    //remove the list items on ul when data are added on lower-section
    let listItems = document.querySelectorAll('.liGrade');
        listItems.forEach(function(listItem) {
        listItem.remove();
    });

    
    //clear input field name when grades are added on div lower-section
    document.querySelector("#studentName").value = "";
    document.querySelector("#studentName").focus();
});





