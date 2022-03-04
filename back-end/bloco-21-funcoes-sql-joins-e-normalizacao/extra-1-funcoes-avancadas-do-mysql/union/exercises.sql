USE sakila;

/*
1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba
a união da tabela staff com a tabela actor, exibindo apenas o nome e o
sobrenome. Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
*/
(SELECT first_name, last_name FROM staff)
UNION ALL
(SELECT first_name, last_name FROM actor);
