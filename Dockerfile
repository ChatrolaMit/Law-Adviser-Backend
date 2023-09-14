FROM node:18

WORKDIR /home/aliveo47/Programing/NodeJS-Backend/law-adviser/Law-Adviser-Backend
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000
CMD [ "npm" , "start"]