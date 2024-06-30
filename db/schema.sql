USE edu;

CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) DEFAULT NULL,
  `password` text,
  PRIMARY KEY (`id`)
);

CREATE TABLE `file` (
  `id` varchar(200) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `date` varchar(200) DEFAULT NULL,
  `file_type` varchar(200) DEFAULT NULL,
  `file_size` varchar(200) DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_userId_idx` (`user_id`),
  CONSTRAINT `fk_userId` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
);