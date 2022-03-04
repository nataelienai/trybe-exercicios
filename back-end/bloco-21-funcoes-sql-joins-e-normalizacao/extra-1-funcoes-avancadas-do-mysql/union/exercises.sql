USE sakila;

/*
1. Todos os funcionários foram promovidos a atores. Monte uma query que exiba
a união da tabela staff com a tabela actor, exibindo apenas o nome e o
sobrenome. Seu resultado não deve excluir nenhum funcionário ao unir as tabelas.
*/
(SELECT first_name, last_name FROM staff)
UNION ALL
(SELECT first_name, last_name FROM actor);

/*
2. Monte uma query que una os resultados das tabelas customer e actor, exibindo
os nomes que contêm a palavra "tracy" na tabela customer e os que contêm "je" na
tabela actor. Exiba apenas os resultados únicos. 
*/
(SELECT first_name FROM customer WHERE first_name LIKE '%tracy%')
UNION
(SELECT first_name FROM actor WHERE first_name LIKE '%je%');
