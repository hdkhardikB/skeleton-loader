FROM mhart/alpine-node:latest

ARG NPM_TOKEN
ARG NPM_REGISTRY

RUN mkdir /app
COPY . /app/
WORKDIR /app
RUN npm install && npm run build-storybook
ENV NPM_TOKEN=${NPM_TOKEN}
ENV NPM_REGISTRY=${NPM_REGISTRY}
EXPOSE 6006
CMD npm run storybook