FROM node:lts
RUN apt-get update 
RUN mkdir /app
COPY . /app/
WORKDIR /app
RUN npm install && npm run build-storybook
EXPOSE 6006
CMD npm run start-storybook -p 6006