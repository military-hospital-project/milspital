FROM node:18-alpine

WORKDIR /src

COPY package.json .

RUN yarn install
# or
# RUN npm install 

COPY . .

EXPOSE 5173

CMD [ "yarn", "dev" ]