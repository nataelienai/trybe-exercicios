USE hr;

/*
1. Escreva uma query que exiba o maior salário da tabela.
*/
SELECT MAX(salary) FROM employees;

/*
2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
*/
SELECT MAX(salary) - MIN(salary) FROM employees;

/*
3. Escreva uma query que exiba a média salarial de cada JOB_ID , ordenando
pela média salarial em ordem decrescente.
*/
SELECT job_id, AVG(salary) FROM employees GROUP BY job_id;

/*
4. Escreva uma query que exiba a quantidade de dinheiro necessária para
realizar o pagamento de todas as pessoas funcionárias.
*/
SELECT SUM(salary) FROM employees;
