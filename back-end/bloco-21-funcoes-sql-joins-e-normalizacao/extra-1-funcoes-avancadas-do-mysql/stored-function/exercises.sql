USE sakila;

/*
1. Utilizando a tabela sakila.payment, monte uma function que retorna a
quantidade total de pagamentos feitos até o momento por um determinado
customer_id. 
*/
DELIMITER $$

CREATE FUNCTION get_amount_of_payments_by_customer_id(customer_id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE number_of_payments INT;
    SELECT COUNT(*)
    FROM payment
    WHERE payment.customer_id = customer_id
    INTO number_of_payments;
    RETURN number_of_payments;
END $$

DELIMITER ;

SELECT get_amount_of_payments_by_customer_id(3);

/*
2. Crie uma function que, dado o parâmetro de entrada inventory_id,
retorna o nome do filme vinculado ao registro de inventário com esse id.
*/
DELIMITER $$

CREATE FUNCTION get_movie_title_by_inventory_id(inventory_id INT)
RETURNS VARCHAR(128) READS SQL DATA
BEGIN
	DECLARE movie_title VARCHAR(128);
    SELECT title
    FROM film
    WHERE film_id IN (
		SELECT film_id
        FROM inventory
        WHERE inventory.inventory_id = inventory_id
    )
    INTO movie_title;
    RETURN movie_title;
END $$

DELIMITER ;

SELECT get_movie_title_by_inventory_id(10);

/*
3. Crie uma function que receba uma determinada categoria de filme em
formato de texto (ex: 'Action' , 'Horror' ) e retorna a quantidade total
de filmes registrados nessa categoria. 
*/
DELIMITER $$

CREATE FUNCTION get_number_of_movies_from_category(category_name VARCHAR(25))
RETURNS INT READS SQL DATA
BEGIN
	DECLARE number_of_movies INT;
    SELECT COUNT(*)
	FROM film
	INNER JOIN film_category ON film.film_id = film_category.film_id
	INNER JOIN category ON category.category_id = film_category.category_id
	WHERE category.name = category_name
	INTO number_of_movies;
    RETURN number_of_movies;
END $$

DELIMITER ;

SELECT get_number_of_movies_from_category('Action');
