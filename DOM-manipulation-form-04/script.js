let formContainer = createDomElement('div', 'form-container');

let form = createDomElement('form', 'main-form');
form.setAttribute('onSubmit', 'submitForm(event)');

//form title
let labelFormTitleContainer = createDomElement('div', 'form-title');

let labelFormMainTitle = createDomElement('span', 'form-main-title');
labelFormMainTitle.innerText = 'Info Form';

let labelFormSubTitle = createDomElement('span', 'form-sub-title');
labelFormSubTitle.innerText = 'Please fill in this Info. Table will be displayed below the Form once submitted.';

labelFormTitleContainer.append(labelFormMainTitle, labelFormSubTitle);


//First Name config
let labelFirstName = createDomElement('label', 'form-label');
labelFirstName.innerText = 'First Name :';
labelFirstName.setAttribute('for', 'input-first-name');

let firstNameInputContainer = createDomElement('div', 'form-content');

let firstNameInput = createDomElement('input', 'form-input', 'input-first-name');
firstNameInput.type = 'text';
firstNameInput.setAttribute('placeholder', 'First Name');
firstNameInput.setAttribute('required', true);

firstNameInputContainer.append(firstNameInput);


//last Name config
let labelLastName = createDomElement('label', 'form-label');
labelLastName.innerText = 'Last Name :';
labelLastName.setAttribute('for', 'input-last-name');

let lastNameInputContainer = createDomElement('div', 'form-content');

let lastNameInput = createDomElement('input', 'form-input', 'input-last-name');
lastNameInput.type = 'text';
lastNameInput.setAttribute('placeholder', 'Last Name');
lastNameInput.setAttribute('required', true);

lastNameInputContainer.append(lastNameInput);


//address config
let labelAddress = createDomElement('label', 'form-label');
labelAddress.innerText = 'Address :';
labelAddress.setAttribute('for', 'input-address');

let addressInputContainer = createDomElement('div', 'form-content');

let addressInput = createDomElement('input', 'form-input', 'input-address');
addressInput.type = 'text';
addressInput.setAttribute('placeholder', 'Address');
addressInput.setAttribute('required', true);

addressInputContainer.append(addressInput);


//pincode config
let labelPincode = createDomElement('label', 'form-label');
labelPincode.innerText = 'Pincode :';
labelPincode.setAttribute('for', 'input-pincode');

let pincodeInputContainer = createDomElement('div', 'form-content');

let pincodeInput = createDomElement('input', 'form-input', 'input-pincode');
pincodeInput.type = 'number';
pincodeInput.setAttribute('placeholder', 'Pincode');
pincodeInput.setAttribute('required', true);

pincodeInputContainer.append(pincodeInput);


//Gender config
let labelGender = createDomElement('label', 'form-label');
labelGender.innerText = 'Gender :';
labelGender.setAttribute('for', 'input-gender');

let genderInputContainer = createDomElement('div', 'form-content gender-container');

let maleGenderInput = createDomElement('input', 'form-input gender-select', 'input-gender', 'input-male-gender');
maleGenderInput.type = 'radio';
maleGenderInput.setAttribute('required', true);
maleGenderInput.value = 'Male';

let labelMaleGender = createDomElement('label', 'radio-label');
labelMaleGender.innerText = 'Male';
labelMaleGender.setAttribute('for', 'input-male-gender');

let femaleGenderInput = createDomElement('input', 'form-input gender-select', 'input-gender', 'input-female-gender');
femaleGenderInput.type = 'radio';
femaleGenderInput.value = 'Female';

let labelFemaleGender = createDomElement('label', 'radio-label');
labelFemaleGender.innerText = 'Female';
labelFemaleGender.setAttribute('for', 'input-female-gender');

genderInputContainer.append(maleGenderInput, labelMaleGender, femaleGenderInput, labelFemaleGender);


//state config
let labelState = createDomElement('label', 'form-label');
labelState.innerText = 'State :';
labelState.setAttribute('for', 'input-state');

let stateInputContainer = createDomElement('div', 'form-content');

let stateInput = createDomElement('input', 'form-input', 'input-state');
stateInput.type = 'text';
stateInput.setAttribute('placeholder', 'State');
stateInput.setAttribute('required', true);

stateInputContainer.append(stateInput);

//country config
let labelCountry = createDomElement('label', 'form-label');
labelCountry.innerText = 'State :';
labelCountry.setAttribute('for', 'input-state');

let countryInputContainer = createDomElement('div', 'form-content');

let countryInput = createDomElement('input', 'form-input', 'input-state');
countryInput.type = 'text';
countryInput.setAttribute('placeholder', 'Country');
countryInput.setAttribute('required', true);

countryInputContainer.append(countryInput);


//Choice of Food config
let labelFoodChoice = createDomElement('label', 'form-label');
labelFoodChoice.innerText = 'Choice Of Food :';
labelFoodChoice.setAttribute('for', 'food-select');

let selectFoodContainer = createDomElement('div', 'form-content food-select-container');

let foodOptions1 = createDomElement('input', 'food-choice', 'food-choice1', 'food-choice1');
foodOptions1.type = 'checkbox';
foodOptions1.value = 'Indian Food';

let labelFoodChoice1 = createDomElement('label', 'form-select');
labelFoodChoice1.innerText = 'Indian Food';
labelFoodChoice1.setAttribute('for', 'food-choice1');


let foodOptions2 = createDomElement('input', 'food-choice', 'food-choice2', 'food-choice2');
foodOptions2.type = 'checkbox';
foodOptions2.value = 'Chinese Food';

let labelFoodChoice2 = createDomElement('label', 'form-select');
labelFoodChoice2.innerText = 'Chinese Food';
labelFoodChoice2.setAttribute('for', 'food-choice2');

let foodOptions3 = createDomElement('input', 'food-choice', 'food-choice3', 'food-choice3');
foodOptions3.type = 'checkbox';
foodOptions3.value = 'Italian Food';

let labelFoodChoice3 = createDomElement('label', 'form-select');
labelFoodChoice3.innerText = 'Italian Food';
labelFoodChoice3.setAttribute('for', 'food-choice3');

let foodOptions4 = createDomElement('input', 'food-choice', 'food-choice4', 'food-choice4');
foodOptions4.type = 'checkbox';
foodOptions4.value = 'French Food';

let labelFoodChoice4 = createDomElement('label', 'form-select');
labelFoodChoice4.innerText = 'French Food';
labelFoodChoice4.setAttribute('for', 'food-choice4');

let foodOptions5 = createDomElement('input', 'food-choice', 'food-choice5', 'food-choice5');
foodOptions5.type = 'checkbox';
foodOptions5.value = 'Persian Food';

let labelFoodChoice5 = createDomElement('label', 'form-select');
labelFoodChoice5.innerText = 'Persian Food';
labelFoodChoice5.setAttribute('for', 'food-choice5');


selectFoodContainer.append(foodOptions1, labelFoodChoice1);
selectFoodContainer.append(foodOptions2, labelFoodChoice2);
selectFoodContainer.append(foodOptions3, labelFoodChoice3);
selectFoodContainer.append(foodOptions4, labelFoodChoice4);
selectFoodContainer.append(foodOptions5, labelFoodChoice5);


//Submit btn config
let submitBtnContainer = createDomElement('div', 'submit-btn');

let submitBtn = createDomElement('input', 'button');
submitBtn.setAttribute('type', 'submit');
submitBtn.setAttribute('value', 'Submit');

submitBtnContainer.append(submitBtn);


//Adding all the elements in the form
form.append(labelFirstName, firstNameInputContainer);
form.append(labelLastName, lastNameInputContainer);
form.append(labelAddress, addressInputContainer);
form.append(labelPincode, pincodeInputContainer);
form.append(labelGender, genderInputContainer);
form.append(labelFoodChoice, selectFoodContainer);
form.append(labelState, stateInputContainer);
form.append(labelCountry, countryInputContainer);
form.append(submitBtnContainer);

formContainer.append(labelFormTitleContainer, form);



//Create Elements and set properties classname , Id, name
function createDomElement(elem, elemClass = '', elemName = '', elemId = '') {
    let element = document.createElement(elem);
    (elemClass !== '') && element.setAttribute('class', elemClass);
    (elemName !== '') && element.setAttribute('name', elemName);
    (elemId !== '') && element.setAttribute('id', elemId);
    return element;
}


//On form Submit 
function submitForm(event) {
    let selectedValues = getSelectedCheckboxValue('food-choice');
    if (selectedValues.length < 2) {
        alert('You should select atleast two options in food section');
    } else {
        document.querySelector('.display-grid-table').style.display = 'grid';
        let col1 = firstNameInput.value;
        let col2 = lastNameInput.value;
        let col3 = addressInput.value;
        let col4 = pincodeInput.value;
        let col5 = document.querySelector('input[name=input-gender]:checked').value;
        let col6 = selectedValues.join("<br>");
        let col7 = stateInput.value;
        let col8 = countryInput.value;
        addValuesToTheTable(col1, col2, col3, col4, col5, col6, col7, col8);
        alert('Data submitted Successfully');
    }
    event.preventDefault();
}

//Get selected values of checkbox
function getSelectedCheckboxValue(className) {
    let checkedValue = [];
    let inputElements = document.querySelectorAll(`.${className}`);
    for (var i = 0; inputElements[i]; ++i) {
        if (inputElements[i].checked) {
            checkedValue.push(inputElements[i].value);
        }
    }
    return checkedValue;
}

//Creating a grid container to show the values
let displayGridContainer = createDomElement('div', 'display-grid-table');


//Create a grid row and return
function getDisplayGridRow() {
    let displayGridRow = createDomElement('div', 'display-grid-row');
    return displayGridRow;
}

//Create a grid column and return
function getDisplayGridColumn() {
    let displayGridColumn = createDomElement('div', 'display-grid-column');
    return displayGridColumn;
}

//Create table with column title
addValuesToTheTable('First name', 'Last name', 'Address', 'Pincode', 'Gender', 'Choice of foods', 'State', 'Country');

//Creating and adding values to the table 
function addValuesToTheTable(col1, col2, col3, col4, col5, col6, col7, col8) {
    let row = getDisplayGridRow();
    let column1 = getDisplayGridColumn();
    column1.innerHTML = col1;
    let column2 = getDisplayGridColumn();
    column2.innerHTML = col2;
    let column3 = getDisplayGridColumn();
    column3.innerHTML = col3;
    let column4 = getDisplayGridColumn();
    column4.innerHTML = col4;
    let column5 = getDisplayGridColumn();
    column5.innerHTML = col5;
    let column6 = getDisplayGridColumn();
    column6.innerHTML = col6;
    let column7 = getDisplayGridColumn();
    column7.innerHTML = col7;
    let column8 = getDisplayGridColumn();
    column8.innerHTML = col8;
    row.append(column1, column2, column3, column4, column5, column6, column7, column8);
    displayGridContainer.append(row);
}

//Instruction Box
let instructionContainer = createDomElement('div', 'instruction-container');

let instructionTitle = createDomElement('div', 'instruction-title');
instructionTitle.innerText = 'Instructions';

let instructionContent = createDomElement('div', 'instruction-content');
instructionContent.innerHTML = '1. Enter The Valid Form Data to submit.<br>2. All fields are mandatory <br>3. Its also manadatory to select atleast 2 of 5 available choices in food section.<br> 4. The table will be displayed below after the data is submitted.';

instructionContainer.append(instructionTitle, instructionContent);

document.body.append(instructionContainer, formContainer, displayGridContainer);


