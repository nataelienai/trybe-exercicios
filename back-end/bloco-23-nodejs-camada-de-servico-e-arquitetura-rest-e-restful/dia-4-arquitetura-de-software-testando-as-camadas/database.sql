DROP DATABASE IF EXISTS model_example;
CREATE DATABASE model_example;
USE model_example;

CREATE TABLE movies (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  directed_by VARCHAR(255) NOT NULL,
  release_year YEAR NOT NULL,
  CONSTRAINT PK_movies PRIMARY KEY (id)
);
