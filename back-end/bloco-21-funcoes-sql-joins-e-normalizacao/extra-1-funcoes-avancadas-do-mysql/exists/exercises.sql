USE hotel;

/*
1. Usando o EXISTS na tabela books_lent e books, exiba o id e título dos
livros que ainda não foram emprestados.
*/
SELECT id, title
FROM Books
WHERE id NOT IN (
	SELECT book_id
    FROM Books_Lent
);

/*
2. Usando o EXISTS na tabela books_lent e books , exiba o id e título dos
livros estão atualmente emprestados e que contêm a palavra "lost" no título.
*/
SELECT id, title
FROM Books
WHERE title LIKE '%lost%' AND id IN (
	SELECT book_id
    FROM Books_Lent
);

/*
3. Usando a tabela carsales e customers, exiba apenas o nome dos clientes
que ainda não compraram um carro. 
*/
SELECT name
FROM Customers
WHERE customerId NOT IN (
	SELECT DISTINCT customerId
    FROM CarSales
);
