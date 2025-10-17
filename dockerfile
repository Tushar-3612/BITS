# Use official PHP image with Apache
FROM php:8.2-apache

# Install dependencies and PHP extensions
RUN apt-get update && apt-get install -y \
    libzip-dev unzip git libonig-dev libxml2-dev \
    && docker-php-ext-install zip mbstring mysqli pdo pdo_mysql

# Enable Apache rewrite module (optional)
RUN a2enmod rewrite

# Copy all files from your repo to the container's web directory
COPY . /var/www/html/

# Set correct permissions
RUN chown -R www-data:www-data /var/www/html

# Optional: install Composer if you use PHPMailer via composer
COPY --from=composer:2.6 /usr/bin/composer /usr/bin/composer

# Expose port 80 for the web server
EXPOSE 80
