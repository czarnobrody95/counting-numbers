document.getElementById('number-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    const counter = document.getElementById('counter');
    const value = parseInt(e.target.value);
    animateValue(counter, 0, value, 5000);
  }
});

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const easeOutCubic = (t) => --t * t * t + 1; // Funkcja ease-out-cubic
    obj.innerHTML = Math.floor(easeOutCubic(progress) * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}