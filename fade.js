// Объект с easing-функциями
const easings = {
  linear: (t) => t,
  easeIn: (t) => t * t,
  easeOut: (t) => 1 - Math.pow(1 - t, 2),
  easeInOut: (t) => (t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2),
};

// fadeIn с easing-функцией по умолчанию (easeOut)
function fadeIn(element, duration = 400, display = 'block', easingFunction = easings.easeOut) {
  if (element.style.display === display && parseFloat(element.style.opacity) === 1) return;

  element.style.opacity = 0;
  element.style.display = display;

  const startTime = performance.now();

  function animate(currentTime) {
    const elapsedTime = currentTime - startTime; // Время с начала анимации
    const progress = Math.min(elapsedTime / duration, 1); // Прогресс от 0 до 1

    element.style.opacity = easingFunction(progress); // Применяем easing-функцию

    if (progress < 1) {
      requestAnimationFrame(animate); // Продолжаем анимацию
    }
  }

  requestAnimationFrame(animate); // Запуск
}

// fadeOut с easing-функцией по умолчанию (easeOut)
function fadeOut(element, duration = 400, easingFunction = easings.easeOut) {
  if (parseFloat(element.style.opacity) === 0) return;

  const startTime = performance.now();

  function animate(currentTime) {
    const elapsedTime = currentTime - startTime;
    const progress = Math.min(elapsedTime / duration, 1);

    element.style.opacity = 1 - easingFunction(progress); // Применяем easing-функцию

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      element.style.opacity = 0;
      element.style.display = 'none';
    }
  }

  requestAnimationFrame(animate);
}
