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
