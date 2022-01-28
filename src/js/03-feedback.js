import throttle from "lodash.throttle";

const LOCALSTORAGE_KEY = "feedback-form-state";

const refs = {
    form: document.querySelector('.feedback-form'),
    textarea: document.querySelector('.feedback-form textarea')
 }

const formData = {}
 
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputEntry, 500));
saveData();


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

function saveData() {
    const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

}
