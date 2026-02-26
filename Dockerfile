# Use lightweight Nginx
FROM nginx:alpine

# Remove default Nginx page
RUN rm -rf /usr/share/nginx/html/*

# Copy all project files into Nginx html folder
COPY . /usr/share/nginx/html

# Tell Nginx to use four.html as default
RUN mv /usr/share/nginx/html/four.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]