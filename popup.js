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


// add click listeners
document.getElementById('mdh-to-utc').addEventListener('click', () => {
  let value = document.getElementById('mdh-input').value;
  const numbersOnly = /^[0-9]*$/;
  if (value.match(numbersOnly)) {
    value = Number(value);
  }
  document.getElementById('mdh-converted').textContent = new Date(value).toUTCString();
});

document.getElementById('mdh-to-local').addEventListener('click', () => {
  let value = document.getElementById('mdh-input').value;
  const numbersOnly = /^[0-9]*$/;
  if (value.match(numbersOnly)) {
    value = Number(value);
  }
  document.getElementById('mdh-converted').textContent = new Date(value);
});

document.getElementById('mdh-to-iso').addEventListener('click', () => {
  let value = document.getElementById('mdh-input').value;
  const numbersOnly = /^[0-9]*$/;
  if (value.match(numbersOnly)) {
    value = Number(value);
  }
  document.getElementById('mdh-converted').textContent = new Date(value).toISOString();
});

document.getElementById('mdh-to-milli').addEventListener('click', () => {
  let value = document.getElementById('mdh-input').value;
  const numbersOnly = /^[0-9]*$/;
  if (value.match(numbersOnly)) {
    value = Number(value);
  }
  document.getElementById('mdh-converted').textContent = new Date(value).getTime();
});

const buttons = document.getElementsByClassName('mdh-button');
for (const button of buttons) {
  button.addEventListener('click', function () {
    removeActiveClasses();
    addActiveClass(this);
  });
}

