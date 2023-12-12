FROM node:alpine

ENV NODE_ENV docker

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm" , "start"]