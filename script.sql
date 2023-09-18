DROP DATABASE IF EXISTS taNaEpocaDB;
CREATE DATABASE taNaEpocaDB;
USE taNaEpocaDB;

DROP TABLE IF EXISTS frutas;
DROP TABLE IF EXISTS meses;
DROP TABLE IF EXISTS frutas_meses;

CREATE TABLE IF NOT EXISTS frutas (
  `fruta_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NULL,
  PRIMARY KEY (`fruta_id`)
);
CREATE TABLE IF NOT EXISTS meses (
  `mes_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `mes` VARCHAR(255) NULL,
  PRIMARY KEY (`mes_id`)
);
CREATE TABLE IF NOT EXISTS frutas_meses (
  `fruta_mes_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `fruta_id` INT UNSIGNED NOT NULL,
  `mes_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`fruta_mes_id`)
  FOREIGN KEY (`fruta_id`) REFERENCES frutas(`fruta_id`),
  FOREIGN KEY (`mes_id`) REFERENCES meses(`mes_id`),
);

INSERT INTO frutas (nome) VALUES
  ('ABACATE'),
  ('ABACAXI'),
  ('ACEROLA');
INSERT INTO meses (nome) VALUES
  ('JANEIRO'),
  ('FEVEREIRO'),
  ('MARCO'),
  ('ABRIL'),
  ('MAIO'),
  ('JUNHO'),
  ('JULHO'),
  ('AGOSTO'),
  ('SETEMBRO'),
  ('OUTUBRO'),
  ('NOVEMBRO'),
  ('DEZEMBRO');
  INSERT INTO frutas_meses (nome) VALUES
  (1,2),
  (1,3),
  (1,4),
  (1,5),
  (1,6),
  (1,7),
  (2,1),
  (2,9),
  (2,10),
  (2,11),
  (3,1),
  (3,2),
  (3,3),
  (3,4),
  (3,5),
  (3,10),
  (3,11),
  (3,12);