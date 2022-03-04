USE betrybe_automoveis;

/*
1. Crie um TRIGGER que, a cada nova inserção feita na tabela carros, defina
o valor da coluna data_atualizacao para o momento do ocorrido, a acao para
'INSERÇÃO' e a coluna disponivel_em_estoque para 1. 
*/
DELIMITER $$
CREATE TRIGGER before_carros_insert
	BEFORE INSERT ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'INSERÇÃO',
		NEW.disponivel_em_estoque = 1;
END $$
DELIMITER ;

/*
2. Crie um TRIGGER que, a cada atualização feita na tabela carros, defina o
valor da coluna data_atualizacao para o momento do ocorrido e a acao para
'ATUALIZAÇÃO'.
*/
DELIMITER $$
CREATE TRIGGER before_carros_update
	BEFORE UPDATE ON carros
    FOR EACH ROW
BEGIN
	SET NEW.data_atualizacao = NOW(),
		NEW.acao = 'ATUALIZAÇÃO';
END $$
DELIMITER ;
