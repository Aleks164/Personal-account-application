<div align="center">
<h1><code>Personal-account-application</code></h1>   
</div>

<p align="center"><a href="https://html.spec.whatwg.org/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/> </a> <a href="https://www.typescriptlang.org/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="60" height="60"/> </a> <a href="https://reactjs.org/" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60"/> </a> <a href="https://redux.js.org" target="_blank"> 
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="60" height="60"/> </a>
   <a href="https://mui.com/" target="_blank"> 
  <img src="https://github.com/mui/material-ui/raw/master/docs/public/static/logo.svg" alt="material-ui" width="60" height="60"/> </a>
</p>

### О проекте

  Personal-account-application – это SPA, состоящее из формы аутентификации, где нужно ввести логин  и пароль или зарегистрироваться как новый пользователь и второй страницы, доступной только аутентифицированным пользователям, на которой находится список контактов, с возможность добавлять, удалять, редактировать и фильтровать их. 
  Фильтр реализован с использование debouncer’a, что позволяет фильтровать большие списки без лишних перерисовок, но при этом с быстрым откликом на запрос фильтрации.  
  Серверная часть приложения реализовано с помощью пакета json-server (https://github.com/typicode/json-server), ответственного за аутентификацию старых и регистрацию новых пользователей.  
  Визуальная часть реализована с помощью React UI библиотеки Material UI.  


### Установка

1. Клонируйте репозиторий

```
git clone https://github.com/Aleks164/Personal-account-application.git .
```
2. Установите NPM packages

```
npm install
```
3. Запустите проект

```
npm run start
```

### Полезная информация

1. Версия node v16.14.2.
1. При первом запуске нужно зарегистрироваться на страничке "Sign Up" или использовать мой логин и пароль ("name": "Aleks164", "password": "123")
1. Логин и пароль не должны быть пустыми строками, но об этом вы и так узнаете из всплывающих подсказок.
1. Фильтр на старинице "Contacts list" ("/") работает с debauncer'ом с задержкой в 600мс.
