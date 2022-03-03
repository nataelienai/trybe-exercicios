USE Pixar;

/*
1. Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e
internacionais (international_sales) de cada filme.
*/
SELECT id, title, domestic_sales, international_sales
FROM Movies
INNER JOIN BoxOffice ON BoxOffice.movie_id = Movies.id;

/*
2. Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para
cada filme que possui um número maior de vendas internacionais
(international_sales) do que vendas nacionais (domestic_sales). 
*/
SELECT id, title, domestic_sales, international_sales
FROM Movies
INNER JOIN BoxOffice ON BoxOffice.movie_id = Movies.id
WHERE international_sales > domestic_sales;

/*
3. Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua
avaliação (rating) em ordem decrescente.
*/
SELECT id, title, rating
FROM Movies
INNER JOIN BoxOffice ON BoxOffice.movie_id = Movies.id;

/*
4. Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos
cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados
dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em
ordem alfabética.
*/
SELECT *
FROM Theater
LEFT JOIN Movies ON Movies.theater_id = Theater.id
ORDER BY Theater.name;

/*
5. Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos
filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos
cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em
ordem alfabética.
*/
SELECT *
FROM Theater
RIGHT JOIN Movies ON Theater.id = Movies.theater_id
ORDER BY Theater.name;
