# FadeIn и FadeOut на чистом JavaScript

Эта программа предоставляет функции `fadeIn` и `fadeOut` для плавного появления и исчезновения HTML-элементов на странице с использованием чистого JavaScript.
Функции поддерживают анимацию с разными временными интервалами и easing-функциями для создания различных эффектов анимации.

## Особенности

- **`fadeIn`** — плавно делает элемент видимым, увеличивая его прозрачность от 0 до 1.
- **`fadeOut`** — плавно скрывает элемент, уменьшая его прозрачность от 1 до 0.
- Поддержка easing-функций (например, `linear`, `easeIn`, `easeOut`, `easeInOut`).
- Easing-функция по умолчанию — `easeOut`.
- Возможность настройки длительности анимации и начального свойства `display`.

## Установка и использование

### Подключение скрипта

Просто скопируйте код JavaScript в свой проект или подключите его как внешний файл.

### Пример HTML:

```html
<button onclick="fadeIn(document.getElementById('myElement'))">Показать элемент</button>
<button onclick="fadeOut(document.getElementById('myElement'))">Скрыть элемент</button>
<div id="myElement" style="width: 100px; height: 100px; background-color: red; display: none; opacity: 0;">Привет!</div>
```

### Пример JavaScript:

```javascript
fadeIn(document.getElementById('myElement'), 1000); // Плавное появление за 1 секунду
fadeOut(document.getElementById('myElement'), 500); // Плавное исчезновение за 0.5 секунды
```

### Функции

#### `fadeIn`

**Синтаксис:**

```javascript
fadeIn(element, duration = 400, display = "block", easingFunction = easings.easeOut);
```

**Параметры:**

- `element` — HTML-элемент, который нужно сделать видимым.
- `duration` — Длительность анимации в миллисекундах (по умолчанию: 400).
- `display` — Значение CSS-свойства `display` (по умолчанию: `block`).
- `easingFunction` — Функция плавности анимации (по умолчанию: `easeOut`).

#### `fadeOut`

**Синтаксис:**

```javascript
fadeOut(element, duration = 400, easingFunction = easings.easeOut);
```

**Параметры:**

- `element` — HTML-элемент, который нужно скрыть.
- `duration` — Длительность анимации в миллисекундах (по умолчанию: 400).
- `easingFunction` — Функция плавности анимации (по умолчанию: `easeOut`).

### Поддерживаемые easing-функции

1. **`linear`** — Линейная анимация.
2. **`easeIn`** — Ускорение в начале.
3. **`easeOut`** — Замедление в конце.
4. **`easeInOut`** — Ускорение и замедление.

Пример использования кастомной easing-функции:

```javascript
fadeIn(document.getElementById('myElement'), 1000, "block", easings.easeInOut);
```

## Преимущества

- Реализовано без использования библиотек (например, jQuery).
- Высокая производительность благодаря `requestAnimationFrame`.
- Легко интегрируется в существующие проекты.

## Лицензия

Эта программа предоставляется "как есть". Вы можете использовать и модифицировать её в своих проектах без ограничений.
