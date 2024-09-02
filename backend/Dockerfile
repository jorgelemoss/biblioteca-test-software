FROM node:20 AS build

WORKDIR /server

COPY package*.json ./

RUN npm install -g pnpm

RUN pnpm install

COPY . .

RUN pnpm run build

EXPOSE 4000

CMD ["pnpm", "run", "start"]