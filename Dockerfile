FROM node:7.8.0

MAINTAINER giovibal@gmail.com

# The base node image sets a very verbose log level.
#ENV NPM_CONFIG_LOGLEVEL warn

# Copy all local files into the image.
ADD build build

# Build for production.
#RUN npm run build --production

# Install `serve` to run the application.
RUN npm install -g serve

# Set the command to start the node server.
CMD serve -s build

# Tell Docker about the port we'll run on.
EXPOSE 5000