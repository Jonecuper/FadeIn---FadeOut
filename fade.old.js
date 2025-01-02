function fadeIn(element, duration = 500) {
  // Устанавливаем начальное состояние элемента
  element.style.opacity = 0;
  element.style.display = 'block';

  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;

    const progress = Math.min((timestamp - startTime) / duration, 1);
    element.style.opacity = progress;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  }

  window.requestAnimationFrame(step);
}

function fadeOut(element, duration = 500) {
  // Устанавливаем начальное состояние элемента
  element.style.opacity = 1;

  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;

    const progress = Math.min((timestamp - startTime) / duration, 1);
    element.style.opacity = 1 - progress;

    if (progress < 1) {
      window.requestAnimationFrame(step);
    } else {
      element.style.display = 'none'; // Скрываем элемент после завершения анимации
    }
  }

  window.requestAnimationFrame(step);
}
