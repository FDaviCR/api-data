use performace_analisys;

CREATE TABLE PEOPLE(
	Id INT NOT NULL AUTO_INCREMENT,
    Name VARCHAR(500),
    Gender VARCHAR(500),
    Email VARCHAR(500),
    Job VARCHAR(500),
    Phone VARCHAR(500),
    PRIMARY KEY (Id)
);

ALTER TABLE people 
ADD createdAt datetime,
ADD updatedAt datetime;