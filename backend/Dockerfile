FROM dockerhub.b2b-center.ru/library/node:18.18.0-alpine
WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]