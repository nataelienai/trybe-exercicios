USE Pixar;

/*
1. Utilizando o INNER JOIN , encontre as vendas nacionais (domestic_sales) e
internacionais (international_sales) de cada filme.
*/
SELECT id, title, domestic_sales, international_sales
FROM Movies
INNER JOIN BoxOffice ON BoxOffice.movie_id = Movies.id;
