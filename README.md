## Тестовое задание React от Каналсервис

### Выполнил Сергей Жвакин scripscratch@mail.ru

---

Весь требуемый функционал добавлен, за исключением возвращения на страницу авторизации на мобильных устройствах - с этим возникли трудности, так как технологии React Native и Expo для меня новые. Чтобы не срывать сроки выполнения, сдаю как есть.

Выполненно:

- авторизация с сохранинеим в localhost и ReactContext (только веб);
- роутинг, запрещающий вход неавторизированному пользователю (только веб);
- анимация неправильного ввода при авторизации (веб и мобил);
- вывод по одному посту от каждого ползователя API (веб и мобил);
- верстка и стилизация согласно макету Figma (веб и мобил);
- pixel perfect при ширине экрана равной ширине макетов (только веб).

Также реализована единая концепция использования компонентов в веб и мобильной версии. Проекты в целом похожи, но для стилизации Header в мобильной версии пришлось отказаться от единого компонента Header, как в веб-версии, в силу специфики React Native.

Не использовал _axios_ и _Redux_, так как стараюсь обходиться без дополнительных библиотек без необходимости. Тем не менее все компоненты были стилизованы с
помощью _styled-components_, испытываю личную симпатию к этой библиотеке.

<br>

---

## Для проверки

Константы логин и пароль находятся в папке **utils** в обоих проектах.

```
login: admin
password: 1234
```

<br>

Создаем копию репозитория.

```
git clone https://github.com/scrip-scratch/test-task-kanalservice
```

Переходим в директории и устанавливаем необходимые зависимости для веб версии...

```
cd test-task-web
npm instal
```

... и запускаем проект после установки.

```
npm start
```

<br>

Тот же порядок действий выполняем для _мобильной версии_ приложения.

Для разработки использовал приложения Expo из AppStore.

Для запуска приложения на айфоне необходимо отсканировать камерой qr-код, который появится в терминале после запуска команды `npm start` из директории `test-task-mobile`.

---

### Благодарю за внимание!

<br>

Заданием доволен, повторил React и познакомился поближе с React Native.

Надеюсь на отбратную связь случае любой оценки работы. К сотрудничеству готов!
