# Vue2 Test

Это тестовый проект интернет-магазина, реализованный на Vue 2 (Options API)

## Функционал

- **Главная страница** с отображением списка товаров.
- **Поиск товаров** по названию.
- **Кнопка "Купить"** с анимацией состояния:
  - При нажатии кнопка меняется на "Обрабатывается" на 2 секунды.
  - Затем состояние переключается на "В корзине".
- **Сохранение состояния корзины** в LocalStorage: товары, добавленные в корзину, сохраняются после перезагрузки страницы.
- **Модальное окно** с подробной информацией о товаре.
- **Мобильная версия** с адаптивным дизайном для экранов от 360px и бургер-меню:
  - Бургер-меню, выезжающее справа, с вертикальной навигацией.
  - Закрытие меню по клику вне него и по клику на пункты меню.
- **Слайдер товаров** (опционально, используется [vue-carousel](https://github.com/SSENSE/vue-carousel)).

## Структура проекта

```
vue2-test/
├── public/
│ ├── favicon.ico
│ ├── images/ # Статические изображения товаров и иконок
│ └── index.html
├── src/
│ ├── assets/
│ │ ├── fonts/ # Шрифты
│ │ └── scss/ # SCSS файлы
│ ├── components/ # Vue-компоненты
│ ├── data/ # Файлы с данными (placeholder)
│ ├── mixins/
│ ├── App.vue
│ └── main.js
├── package.json
├── vue.config.js
└── README.md
```

## Установка

1. **Клонируйте репозиторий:**

   ```bash
   git clone https://github.com/pestov-web/vue2-test.git
   cd vue2-test
   ```

2. **Установите зависимости:**

   ```bash
   npm install
   ```

## Скрипты

- **Запуск в режиме разработки:**

  ```bash
  npm run serve
  ```

  Приложение будет доступно по адресу [http://localhost:8080](http://localhost:8080).

- **Сборка для продакшена:**

  ```bash
  npm run build
  ```

  Результат сборки окажется в папке `dist`.

- **Запуск линтера:**

  ```bash
  npm run lint
  ```

## Технологии

- **Vue 2 (Options API)**
- **SCSS с миксинами для брейкпоинтов**
- **Iconify** ([Iconify](https://iconify.design/) для Vue2)
- **LocalStorage** для сохранения состояния корзины
- [**vue-carousel**](https://github.com/SSENSE/vue-carousel) (опционально, для слайдера товаров)
