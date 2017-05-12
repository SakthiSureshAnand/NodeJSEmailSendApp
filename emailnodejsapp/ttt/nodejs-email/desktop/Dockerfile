FROM node:latest
COPY ./ /app
WORKDIR /app
RUN chmod +x /app/wait-for-it.sh && npm install
CMD ["npm","start"]