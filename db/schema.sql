DROP DATABASE IF EXISTS blog_db;

CREATE DATABASE blog_db;

USE blog_db;

CREATE TABLE `user`(
    `user_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY COMMENT 'User ID',
    `user_name` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL
);

CREATE TABLE `post`(
    `post_id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `contents` TEXT NOT NULL,
    `creator_id` INT NOT NULL,
    `created_date` DATETIME NOT NULL,
    FOREIGN KEY(`creator_id`) REFERENCES `user`(`user_id`)
    ON UPDATE CASCADE
    ON DELETE CASCADE
);

CREATE TABLE `comments`(
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `post_id` INT NOT NULL,
    `creator_id` INT NOT NULL,
    `created_date` DATETIME NOT NULL,
    FOREIGN KEY(`post_id`) REFERENCES `post`(`post_id`)
    ON DELETE CASCADE,
    FOREIGN KEY(`creator_id`) REFERENCES `user`(`user_id`)
    ON DELETE CASCADE
);