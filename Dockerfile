FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . /app

RUN npm run build

CMD ["npm", "start"]
