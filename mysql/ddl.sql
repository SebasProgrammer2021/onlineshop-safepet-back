create database onlineshop;
use onlineshop;
CREATE TABLE `Cliente` (
	`cedula` INT NOT NULL,
	`nombre` varchar(100) NOT NULL,
	`apellido` varchar(100) NOT NULL,
	`direccion` varchar(200) NOT NULL,
	`telefono` varchar(40) NOT NULL,
	`plan_idPlan` INT NOT NULL,
	PRIMARY KEY (`cedula`)
);

CREATE TABLE `Beneficio` (
	`idBeneficio` INT NOT NULL AUTO_INCREMENT,
	`nombre` varchar(255) NOT NULL,
	`costo` INT NOT NULL,
	PRIMARY KEY (`idBeneficio`)
);

CREATE TABLE `plan_beneficio` (
	`plan_idPlan` INT NOT NULL,
	`beneficio_idBeneficio` INT NOT NULL
);

CREATE TABLE `Plan` (
	`idPlan` INT NOT NULL AUTO_INCREMENT,
	`copago` INT NOT NULL,
	`valor` INT NOT NULL,
	PRIMARY KEY (`idPlan`)
);

CREATE TABLE `Beneficiario` (
	`idBeneficiario` INT NOT NULL AUTO_INCREMENT,
	`nombre` varchar(50) NOT NULL,
	`edad` INT NOT NULL,
	`raza` varchar(150) NOT NULL,
	`cliente_idCliente` INT NOT NULL,
	`plan_idPlan` INT NOT NULL,
	PRIMARY KEY (`idBeneficiario`)
);

CREATE TABLE `Prestacion` (
	`idPrestacion` INT NOT NULL AUTO_INCREMENT,
	`nombre` varchar(200) NOT NULL,
	`fecha` DATETIME NOT NULL,
	`evaluacion` tinyint NOT NULL,
	`cliente_ClienteCedula` INT NOT NULL,
	`beneficio_idBeneficio` INT NOT NULL,
	PRIMARY KEY (`idPrestacion`)
);

ALTER TABLE `Cliente` ADD CONSTRAINT `Cliente_fk0` FOREIGN KEY (`plan_idPlan`) REFERENCES `Plan`(`idPlan`);

ALTER TABLE `plan_beneficio` ADD CONSTRAINT `plan_beneficio_fk0` FOREIGN KEY (`plan_idPlan`) REFERENCES `Plan`(`idPlan`);

ALTER TABLE `plan_beneficio` ADD CONSTRAINT `plan_beneficio_fk1` FOREIGN KEY (`beneficio_idBeneficio`) REFERENCES `Beneficio`(`idBeneficio`);

ALTER TABLE `Beneficiario` ADD CONSTRAINT `Beneficiario_fk0` FOREIGN KEY (`cliente_idCliente`) REFERENCES `Cliente`(`cedula`);

ALTER TABLE `Beneficiario` ADD CONSTRAINT `Beneficiario_fk1` FOREIGN KEY (`plan_idPlan`) REFERENCES `Plan`(`idPlan`);

ALTER TABLE `Prestacion` ADD CONSTRAINT `Prestacion_fk0` FOREIGN KEY (`cliente_ClienteCedula`) REFERENCES `Cliente`(`cedula`);

ALTER TABLE `Prestacion` ADD CONSTRAINT `Prestacion_fk1` FOREIGN KEY (`beneficio_idBeneficio`) REFERENCES `Beneficio`(`idBeneficio`);