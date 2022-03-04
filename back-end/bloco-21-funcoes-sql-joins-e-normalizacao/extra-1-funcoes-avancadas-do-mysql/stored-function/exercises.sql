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
