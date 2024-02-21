FROM node:20

ARG PORT
ARG NEXT_PORT
ARG NEXT_HOST
ARG DB_HOST
ARG DB
ARG DB_USER
ARG DB_PASSWORD

COPY . /opt/techniche

WORKDIR /opt/techniche

RUN npm ci

RUN npm run build

ENTRYPOINT npm start
