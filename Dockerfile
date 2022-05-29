# syntax=docker/dockerfile:1

FROM node:14.17.3

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY ["server.js", ".env", "./"]

EXPOSE 3001

CMD ["node", "server.js"]

