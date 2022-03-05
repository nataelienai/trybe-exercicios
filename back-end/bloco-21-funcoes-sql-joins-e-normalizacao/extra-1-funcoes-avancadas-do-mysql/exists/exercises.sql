USE hotel;

/*
1. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos
livros que ainda não foram emprestados.
*/
SELECT id, title
FROM Books
WHERE NOT EXISTS (
	SELECT book_id
    FROM Books_Lent
    WHERE book_id = id
);

/*
2. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos
livros estão atualmente emprestados e que contêm a palavra "lost" no título.
*/
SELECT id, title
FROM Books
WHERE title LIKE '%lost%' AND EXISTS (
	SELECT book_id
    FROM Books_Lent
    WHERE book_id = id
);

/*
3. Usando a tabela carsales e customers, exiba apenas o nome dos clientes
que ainda não compraram um carro.
*/
SELECT name
FROM Customers
WHERE NOT EXISTS (
	SELECT customerId
    FROM CarSales
    WHERE CarSales.customerId = Customers.customerId
);

/*
4. Usando o comando EXISTS em conjunto com JOIN e as tabelas cars, customers
e carsales, exiba o nome do cliente e o modelo do carro de todos os clientes
que fizeram compras de carros.
*/
SELECT Customers.name, Cars.name
FROM Customers
INNER JOIN CarSales ON CarSales.customerId = Customers.customerId
INNER JOIN Cars ON Cars.Id = CarSales.carId;

# Utilizar o INNER JOIN, nesse caso, dispensa o uso de EXISTS.
