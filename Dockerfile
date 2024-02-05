FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
ENV DATABASEURL mongodb://localhost/restful_blog_app
CMD ["node", "app.js"]
EXPOSE 3000
