FROM python:3.8

RUN mkdir -p /usr/src/app && mkdir -p /usr/src/app/backend

WORKDIR /usr/src/app/backend

EXPOSE 80

COPY . .

RUN pip install -r requirements.txt
