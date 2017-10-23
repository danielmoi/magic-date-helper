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

// beautiful moment library
const adjust = (original, operator, value, unit) => {
  const result = moment(original)[operator](value, unit).toISOString();
  return result;
};

const buttons = document.getElementsByClassName('mdh-button');

// add click listeners
for (const button of buttons) {
  button.addEventListener('click', function magic() {
    // make the button clicked "active"
    removeActiveClasses();
    addActiveClass(this);

    // get input value
    const id = this.id;
    let value = document.getElementById('mdh-input').value;

    // convert millisecond timestamp string to type Number
    const numbersOnly = /^[0-9]*$/;
    if (value.match(numbersOnly)) {
      value = Number(value);
    }

    // adjust input value
    const deltaOperator = document.getElementById('mdh-delta-operator').value;
    const deltaValue = document.getElementById('mdh-delta-value').value;
    const deltaUnits = document.getElementById('mdh-delta-units').value;

    const adjusted = adjust(value, deltaOperator, deltaValue, deltaUnits);

    // generate display
    const display = getDisplay(id, adjusted);

    // render display
    document.getElementById('mdh-converted').textContent = display;
  });
}

/* --- Form Handler ------------------------ */
const form = document.getElementById('mdh-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
});
