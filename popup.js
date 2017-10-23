/* --- Now Panel ------------------------ */
const renderNowDates = () => {
  document.getElementById('mdh-now-local').textContent = new Date().toString();
  document.getElementById('mdh-now-iso').textContent = new Date().toISOString();
  document.getElementById('mdh-now-utc').textContent = new Date().toUTCString();
  document.getElementById('mdh-now-milli').textContent = new Date().getTime();
};

document.addEventListener('DOMContentLoaded', () => {
  renderNowDates();
});


/* --- Convert Panel ------------------------ */
// helpers
const removeActiveClasses = () => {
  const buttons = document.getElementsByClassName('mdh-button');
  for (const button of buttons) {
    button.classList.remove('mdh-button--active');
  }
};

const addActiveClass = (el) => {
  el.classList.add('mdh-button--active');
};

const getDisplay = (id, value) => {
  switch (id) {
    case 'mdh-to-utc': return new Date(value).toUTCString();
    case 'mdh-to-local': return new Date(value);
    case 'mdh-to-iso': return new Date(value).toISOString();
    case 'mdh-to-milli': return new Date(value).getTime();
    default: return '';
  }
};

// add click listeners
const buttons = document.getElementsByClassName('mdh-button');

const addHours = (date, hours) => {
  const msDelta = hours * 60 * 60 * 1000;
  const initial = new Date(date).getTime();
  const result = initial + msDelta;
  console.log('🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶');
  console.log('result:', result);
  return result;
};

console.log('moment().format():', moment().format());

for (const button of buttons) {
  button.addEventListener('click', function magic() {
    removeActiveClasses();
    addActiveClass(this);
    let value = document.getElementById('mdh-input').value;
    console.log('🍆🍆🍆🍆🍆🍆🍆🍆🍆🍆🍆🍆🍆🍆🍆🍆🍆🍆');
    console.log('value:', value);
    const numbersOnly = /^[0-9]*$/;
    if (value.match(numbersOnly)) {
      value = Number(value);
    }
    const id = this.id;

    const deltaOperator = document.getElementById('mdh-delta-operator').value;
    console.log('🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩🍩');
    console.log('deltaOperator:', deltaOperator);
    const answer = addHours(value, 1);
    console.log('🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶');
    console.log('answer:', answer);

    const answer2 = addHours(value, 0);
    console.log('🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶🌶');
    console.log('answer2:', answer2);

    const display = getDisplay(id, value);
    document.getElementById('mdh-converted').textContent = display;
  });
}

/* --- Form Handler ------------------------ */
const form = document.getElementById('mdh-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
