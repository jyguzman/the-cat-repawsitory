# syntax=docker/dockerfile:1

FROM node:14.17.3

ENV REACT_APP_NODE_ENV production
ENV WDS_SOCKET_PORT 0

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 3000

CMD ["npm", "start"]