-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema edu
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema edu
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `edu` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `edu` ;

-- -----------------------------------------------------
-- Table `edu`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `edu`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NULL DEFAULT NULL,
  `password` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 31
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `edu`.`file`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `edu`.`file` (
  `id` VARCHAR(200) NOT NULL,
  `file_path` VARCHAR(200) NULL DEFAULT NULL,
  `name` VARCHAR(200) NULL DEFAULT NULL,
  `date` VARCHAR(200) NULL DEFAULT NULL,
  `file_type` VARCHAR(200) NULL DEFAULT NULL,
  `file_size` VARCHAR(200) NULL DEFAULT NULL,
  `user_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_userId_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_userId`
    FOREIGN KEY (`user_id`)
    REFERENCES `edu`.`users` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
