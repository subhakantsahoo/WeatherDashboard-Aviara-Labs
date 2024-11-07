# Step 1: Set the base image to use for the build
FROM node:18 AS build

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (if you have it) to the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application code to the container
COPY . .

# Step 6: Build the React app for production
RUN npm run build

# Step 7: Use a smaller image to serve the built app
FROM nginx:alpine

# Step 8: Copy the build files from the previous step to the nginx directory
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose the port that nginx will run on
EXPOSE 80

# Step 10: Start nginx server to serve the React app
CMD ["nginx", "-g", "daemon off;"]
