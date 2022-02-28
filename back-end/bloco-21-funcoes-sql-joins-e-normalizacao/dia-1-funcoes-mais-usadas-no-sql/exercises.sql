USE hr;

/*
1. Escreva uma query que exiba o maior salário da tabela.
*/
SELECT MAX(salary) FROM employees;

/*
2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
*/
SELECT MAX(salary) - MIN(salary) FROM employees;
