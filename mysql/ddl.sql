create database onlineshop;
use onlineshop;
CREATE TABLE `cliente` (
  `cedula` INT NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `direccion` varchar(200) NOT NULL,
  `telefono` varchar(40) NOT NULL,
  PRIMARY KEY (`cedula`)
);
CREATE TABLE `beneficio` (
  `idBeneficio` INT NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `costo` INT NOT NULL,
  PRIMARY KEY (`idBeneficio`)
);
CREATE TABLE `cliente_beneficio` (
  `cliente_cedula` INT NOT NULL,
  `beneficio_idBeneficio` INT NOT NULL
);
ALTER TABLE `cliente_beneficio`
ADD CONSTRAINT `cliente_beneficio_fk0` FOREIGN KEY (`cliente_cedula`) REFERENCES `cliente`(`cedula`);
ALTER TABLE `cliente_beneficio`
ADD CONSTRAINT `cliente_beneficio_fk1` FOREIGN KEY (`beneficio_idBeneficio`) REFERENCES `beneficio`(`idBeneficio`);