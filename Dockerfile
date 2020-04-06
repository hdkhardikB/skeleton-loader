FROM mhart/alpine-node:latest

ARG NPM_TOKEN
ARG NPM_REGISTRY

RUN mkdir /app
COPY . /app/
WORKDIR /app
RUN npm install
ENV NPM_TOKEN=${NPM_TOKEN}
ENV NPM_REGISTRY=${NPM_REGISTRY}
CMD npm run storybook