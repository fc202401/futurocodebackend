# Use a lighter version of Node as a parent image
FROM node:16-slim

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./


RUN npm install


# Copy the rest of your application's code
COPY . .

# Expose the port the app runs on
EXPOSE 3000


CMD ["node", "app.js"]
