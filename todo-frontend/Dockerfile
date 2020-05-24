FROM node:12.16.0-alpine

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
