# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm i`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

I have made 2 decisions and they are in different branches:

### -> stop-watch-on-hooks

### -> stop-watch-rxjs

Реализовать секундомер, который подсчитывает время в формате «HH: MM: SS»

Секундомер должен иметь следующие кнопки:

- «Start / Stop» - запуск / остановка отсчета времени, останавливает и обнуляет значение секундомера.

- «Wait» - работает на двойной клик (время между нажатиями не более 300 мс!) секундомер должен прекратить отсчет времени; если после него нажать старт, то возобновляется отсчет.

- «Reset» - сброс секундомера на 0. Обнуляет секундомер и снова начинает отсчет.

Требования:

- используйте Observables в коде

- RxJS подход

- функциональный подход

- нам важнее всего увидеть Ваше умение писать код

- 300млс – это не DoubleClick
