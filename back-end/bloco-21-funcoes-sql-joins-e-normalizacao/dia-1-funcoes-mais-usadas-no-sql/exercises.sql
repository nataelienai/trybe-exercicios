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

/*
5. Escreva uma query que exiba quatro informações: o maior salário,
o menor salário, a soma de todos os salários e a média dos salários.
Todos os valores devem ser formatados para ter apenas duas casas
decimais.
*/
SELECT MAX(salary), MIN(salary), SUM(salary), AVG(salary) FROM employees;

/*
6. Escreva uma query que exiba a quantidade de pessoas que trabalham
como pessoas programadoras ( IT_PROG ).
*/
SELECT COUNT(*) FROM employees WHERE job_id = 'IT_PROG';

/*
7. Escreva uma query que exiba a quantidade de dinheiro necessária
para efetuar o pagamento de cada profissão ( JOB_ID ).
*/
SELECT job_id, SUM(salary) FROM employees GROUP BY job_id;

/*
8. Utilizando a query anterior, faça as alterações para que seja
exibido somente a quantidade de dinheiro necessária para cobrir
a folha de pagamento das pessoas programadoras ( IT_PROG ).
*/
SELECT job_id, SUM(salary) FROM employees WHERE job_id = 'IT_PROG';
