FROM node:18-alpine 

WORKDIR /app
COPY . .
RUN sudo apt-get install libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb && npm install
CMD ["npm","run","cypress"]
