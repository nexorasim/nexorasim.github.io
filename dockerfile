# Stage 1: Build the application
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install --frozen-lockfile

# Copy project files and build
COPY . .
RUN npm run build

# Stage 2: Production image with Nginx
FROM nginx:1.25-alpine
WORKDIR /usr/share/nginx/html

# Copy built assets from builder stage
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/server ./.next/server

# Copy Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy start script
COPY start.sh /start.sh
RUN chmod +x /start.sh

# Health check
HEALTHCHECK --interval=30s --timeout=5s \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

EXPOSE 3000
CMD ["/start.sh"]
