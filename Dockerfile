FROM node:lts
RUN apt-get update 
RUN mkdir /app
COPY . /app/
WORKDIR /app
RUN yarn && yarn build-storybook
EXPOSE 6006
CMD yarn start-storybook -p 6006