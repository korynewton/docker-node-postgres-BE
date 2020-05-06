FROM node:alpine

#establish working directory in container
WORKDIR /app

#copy package.json and package-lock.json
COPY package.json .

#install npm packages
RUN npm install

#copy files from local directory to working directory in container
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

