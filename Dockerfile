FROM node:20-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i -g pnpm@latest

RUN pnpm i

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["pnpm", "run", "start:dev"] 