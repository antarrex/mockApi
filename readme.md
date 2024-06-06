В папке проекта первый раз выполнить
docker build -t "vue-app" ./frontend
docker build -t "api-server" ./backend
Далее можно запускать командой
docker-compose up

В backend_url приложения указать localhost:5000/api
