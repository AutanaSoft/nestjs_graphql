# Development stage
FROM mcr.microsoft.com/devcontainers/typescript-node:1-22-bookworm

WORKDIR /usr/src/app

# Install pnpm
RUN npm i -g pnpm@latest

# Copy package files first for better caching
COPY package*.json pnpm-lock.yaml* ./

# Install all dependencies (including dev dependencies for development)
RUN pnpm install --frozen-lockfile

# Copy source code
COPY . .

# Create non-root user for security
RUN addgroup --gid 1001 nodejs && \
    adduser --uid 1001 --gid 1001 --disabled-password nestjs

# Change ownership
RUN chown -R nestjs:nodejs /usr/src/app

# Switch to non-root user
USER nestjs

# Expose port
EXPOSE 3000

# Development command with hot reload
CMD ["pnpm", "run", "start:dev"]