USE Pixar;

/*
1. Utilizando o INNER JOIN , encontre as vendas nacionais (domestic_sales) e
internacionais (international_sales) de cada filme.
*/
SELECT id, title, domestic_sales, international_sales
FROM Movies
INNER JOIN BoxOffice ON BoxOffice.movie_id = Movies.id;

/*
2. Utilizando o INNER JOIN , faça uma busca que retorne o número de vendas para
cada filme que possui um número maior de vendas internacionais
(international_sales) do que vendas nacionais (domestic_sales). 
*/
SELECT id, title, domestic_sales, international_sales
FROM Movies
INNER JOIN BoxOffice ON BoxOffice.movie_id = Movies.id
WHERE international_sales > domestic_sales;
