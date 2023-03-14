FROM node:16-alpine

ENV NODE_ENV=development

WORKDIR /app

COPY . .


RUN npm install --production


EXPOSE 5252

CMD [ "npm","start" ]