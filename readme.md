В папке проекта первый раз выполнить
docker build -t "vue-app" ./frontend
docker build -t "api-server" ./backend
Далее можно запускать командой
docker-compose up

Админка находится по адресу http://localhost:5173
В backend_url приложения указать http://localhost:5000/api
