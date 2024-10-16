FROM node:22.9.0
RUN mkdir -p /home/app
WORKDIR /home/app
COPY . .
EXPOSE 3000
CMD [ "node", "index.js" ]