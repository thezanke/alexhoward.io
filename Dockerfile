# build environment
FROM node:latest as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN npm i --silent --production
COPY . /usr/src/app
RUN npm run build

# production environment
FROM steebchen/nginx-spa:stable
COPY --from=builder /usr/src/app/build/ /app
EXPOSE 80
CMD ["nginx"]
