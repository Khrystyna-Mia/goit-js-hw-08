import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = "feedback-form-state";

const refForm = document.querySelector('.feedback-form');
const refEmail = document.querySelector('input');
const refTextarea = document.querySelector('textarea');
const formData = {}

refForm.addEventListener('input', throttle(onInputEntry, 500));
refForm.addEventListener('submit', onFormSubmit);

saveFormData();

function onInputEntry(evt) {
    formData[evt.target.name] = evt.target.value;

    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

    evt.currentTarget.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function saveFormData() {
    const saveData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (saveData) {
        refEmail.value = saveData.email;
        refTextarea.value = saveData.message;
    } 
}
   
