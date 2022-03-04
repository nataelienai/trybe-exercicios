USE sakila;

/*
1. Monte uma procedure que exiba os 10 atores mais populares, baseado em sua
quantidade de filmes. Essa procedure não deve receber parâmetros de entrada ou
saída e, quando chamada, deve exibir o id do ator ou atriz e a quantidade de
filmes em que atuaram.
*/
DELIMITER $$

CREATE PROCEDURE show_most_popular_actors()
BEGIN
	SELECT actor_id, COUNT(*) AS number_of_movies
    FROM film_actor
    GROUP BY actor_id
    ORDER BY number_of_movies DESC
    LIMIT 10;
END $$

DELIMITER ;

CALL show_most_popular_actors;

/*
2. Monte uma procedure que receba como parâmetro de entrada o nome da categoria
desejada em uma string e que exiba o id do filme, seu titulo, o id de sua
categoria e o nome da categoria selecionada. Use as tabelas film, film_category
e category para montar essa procedure.
*/
DELIMITER $$

CREATE PROCEDURE show_movies_by_category(IN category_name VARCHAR(25))
BEGIN
	SELECT film.film_id, film.title, category.category_id, category.name
    FROM film
    INNER JOIN film_category ON film.film_id = film_category.film_id
    INNER JOIN category ON category.category_id = film_category.category_id
    WHERE category.name = category_name;
END $$

DELIMITER ;

CALL show_movies_by_category('Sci-Fi');
