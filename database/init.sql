
CREATE DATABASE IF NOT EXISTS elearning;
USE elearning;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'professor') DEFAULT 'student'
);

CREATE TABLE past_results (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    module_name VARCHAR(100),
    score INT,
    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE badges (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    badge_name VARCHAR(100),
    awarded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (username, password, role) VALUES ('student1', 'pass123', 'student');
INSERT INTO past_results (user_id, module_name, score) VALUES (1, 'Node.js Basics', 95);
