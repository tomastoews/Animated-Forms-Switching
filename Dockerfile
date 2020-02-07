FROM nginx:alpine

RUN mkdir usr/share/nginx/html/animated-forms-switching
COPY /dist/ usr/share/nginx/html/animated-forms-switching

EXPOSE 80