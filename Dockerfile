FROM node

WORKDIR /app

COPY . .

RUN npm i && npm run build && npm prune --production

CMD npm run start