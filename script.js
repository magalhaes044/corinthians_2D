// script.js

const toggleSwitch = document.querySelector('#dark-mode-toggle');
const body = document.querySelector('body');

toggleSwitch.addEventListener('change', () => {
  if (toggleSwitch.checked) {
      body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
              }
              });
              