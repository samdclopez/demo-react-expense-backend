# FROM node:20-alpine
# WORKDIR /app
# COPY package*.json ./
# RUN npm install
# RUN npm i -g serve
# COPY . .
# EXPOSE 80
# CMD ["npm", "start"]

# FROM node:20-alpine

# WORKDIR /app

# COPY package.json .

# RUN npm install

# RUN npm i -g serve

# COPY . .

# RUN npm run build

# EXPOSE 3001

# CMD ["serve", "-s", "dist", "-l", "3001"]

FROM node:current-alpine
COPY . /app
WORKDIR /app
RUN npm install
EXPOSE  80
ENTRYPOINT ["npm", "start"]