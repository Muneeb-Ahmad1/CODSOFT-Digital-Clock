function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const amPM = hours >= 12 ? 'PM' : 'AM';
  hours = (hours % 12) || 12;

  document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;
  document.getElementById('ampm').innerText = amPM;
}

// Update the clock every second
setInterval(updateClock, 1000);

// Initial call to display the clock immediately
updateClock();
