USE hr;

/*
1. Escreva uma query SQL para alterar na tabela locations o nome da coluna
street_address para address, mantendo o mesmo tipo e tamanho de dados.
*/
ALTER TABLE locations CHANGE STREET_ADDRESS ADDRESS VARCHAR(40);

/*
2. Escreva uma query SQL para alterar na tabela regions o nome da coluna
region_name para region, mantendo o mesmo tipo e tamanho de dados.
*/
ALTER TABLE regions CHANGE REGION_NAME REGION VARCHAR(25);
