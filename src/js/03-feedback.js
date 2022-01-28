import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea')
 }

const formData = {}
 
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputEntry, 500));
saveFormData();


refs.form.addEventListener('input', evt => {
    formData[evt.target.name] = evt.target.value;
});

function onFormSubmit(evt) {
    evt.preventDefault();

    console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));

    evt.target.reset();
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onInputEntry() {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function saveFormData() {
    const saveData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

    if (saveData) {
       form.elements.value = saveData.email ? saveData.email : saveData.value;
       form.elements.value = saveData.message ? saveData.message : saveData.value;
    }
    // if (saveData) {
    //     form.elements = saveData.email ?? saveData.value;
    //     form.elements = saveData.message ?? saveData.value;
    // }
}
