const renderNowDates = () => {
  document.getElementById('now-local').textContent = new Date().toString();
  document.getElementById('now-iso').textContent = new Date().toISOString();
  document.getElementById('now-utc').textContent = new Date().toUTCString();
  document.getElementById('now-milli').textContent = new Date().getTime();
};

document.addEventListener('DOMContentLoaded', () => {
  renderNowDates();
});

document.getElementById('to-utc').addEventListener('click', () => {
  const value = document.getElementById('input').value;
  document.getElementById('converted').textContent = new Date(value).toUTCString();
});

document.getElementById('to-local').addEventListener('click', () => {
  const value = document.getElementById('input').value;
  document.getElementById('converted').textContent = new Date(value);
});

document.getElementById('to-iso').addEventListener('click', () => {
  const value = document.getElementById('input').value;
  document.getElementById('converted').textContent = new Date(value).toISOString();
});

document.getElementById('to-milli').addEventListener('click', () => {
  const value = document.getElementById('input').value;
  document.getElementById('converted').textContent = new Date(value).getTime();
});
