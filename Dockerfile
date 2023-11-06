FROM node:18-alpine

WORKDIR /ttrpg-companion/

COPY public/ ./public
COPY src/ ./src
COPY package.json .
COPY tsconfig.json .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]