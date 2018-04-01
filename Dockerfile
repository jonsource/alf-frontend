FROM nginx:alpine

RUN apk add --no-cache tzdata
WORKDIR /app

COPY nginx ./nginx
RUN rm -f /etc/nginx/nginx.conf
RUN ln -s /app/nginx/nginx.conf /etc/nginx/nginx.conf

COPY dist ./dist

