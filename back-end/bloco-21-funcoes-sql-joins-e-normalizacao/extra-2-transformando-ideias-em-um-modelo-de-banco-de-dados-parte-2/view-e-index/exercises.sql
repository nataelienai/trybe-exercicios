USE sakila;

/*
1. Crie uma view chamada film_with_categories utilizando as tabelas category,
film_category e film do banco de dados sakila. Essa view deve exibir o título
do filme, o id da categoria e o nome da categoria. Os resultados devem ser
ordenados pelo título do filme.
 */
CREATE VIEW film_with_categories AS
	SELECT f.title, c.category_id, c.name
    FROM category c
    INNER JOIN film_category fc ON fc.category_id = c.category_id
    INNER JOIN film f ON f.film_id = fc.film_id
    ORDER BY f.title;

SELECT * FROM film_with_categories;

/*
2. Crie uma view chamada film_info utilizando as tabelas actor, film_actor e
film do banco de dados sakila. Sua view deve exibir o actor_id, o nome completo
do ator ou da atriz em uma coluna com o ALIAS actor e o título dos filmes. Os
resultados devem ser ordenados pelos nomes de atores e atrizes.
*/
CREATE VIEW film_info AS
	SELECT a.actor_id, CONCAT(a.first_name, ' ', a.last_name) AS actor, f.title
    FROM actor a
    INNER JOIN film_actor fa ON a.actor_id = fa.actor_id
    INNER JOIN film f ON f.film_id = fa.film_id
    ORDER BY actor;

SELECT * FROM film_info;

/*
3. Crie uma view chamada address_info que faça uso das tabelas address e city
do banco de dados sakila. Sua view deve exibir o address_id, o address,
o district, o city_id e a city. Os resultados devem ser ordenados pelo nome das
cidades.
*/
CREATE VIEW address_info AS
	SELECT a.address_id, a.address, a.district, c.city_id, c.city
    FROM address a
    INNER JOIN city c ON a.city_id = c.city_id
    ORDER BY c.city;

SELECT * FROM address_info;

/*
4. Crie uma view chamada movies_languages, usando as tabelas film e language do
banco de dados sakila. Sua view deve exibir o título do filme, o id do idioma e
o idioma do filme, como na imagem a seguir.
*/
CREATE VIEW movies_languages AS
	SELECT f.title, l.language_id, l.name
    FROM film f
    INNER JOIN language l ON f.language_id = l.language_id;

SELECT * FROM movies_languages;

/*
5. Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados
sakila), adicionando-o na coluna name. Após ter adicionado o índice, mensure o
custo da query utilizando o execution plan. Após ter criado e mensurado o custo
da query, exclua o índice e mensure novamente esse custo.
*/
CREATE FULLTEXT INDEX category_name_index ON category(name);

# Query cost: 0.35
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');

DROP INDEX category_name_index ON category;

# Query cost: 1.85
SELECT *
FROM sakila.category
WHERE name LIKE '%action%';

/*
6. Verifique o impacto de um INDEX na tabela address (banco de dados sakila)
adicionando-o na coluna postal_code. Após ter adicionado o índice, mensure o
custo da query utilizando o execution plan. Após ter criado e mensurado o
custo da query, exclua o índice e mensure novamente esse custo. 
*/
CREATE INDEX address_postal_code_index ON address(postal_code);

# Query cost: 0.35
SELECT *
FROM sakila.address
WHERE postal_code = '36693';

DROP INDEX address_postal_code_index ON address;

# Query cost: 61.80
SELECT *
FROM sakila.address
WHERE postal_code = '36693';
