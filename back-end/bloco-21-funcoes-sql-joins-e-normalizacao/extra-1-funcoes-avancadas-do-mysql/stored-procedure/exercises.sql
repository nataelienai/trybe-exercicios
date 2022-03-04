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
