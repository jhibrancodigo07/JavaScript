--comando para crear bases de datos 
CREATE DATABASE mibasededatos;
--comando para crear tablas
CREATE TABLE clientes(
  id_cliente         integer,
  nombre             text,
  saldo              numeric,
  email              text,
  telefono           text
)

--insertar datos 
INSERT INTO clientes VALUES(1, 'Abril', 20.5, 'abril@gmail.com', '5545475510')
INSERT INTO clientes(email, saldo, telefono, id_cliente, nombre)
     VALUES ('diego@hotmail.com', 100.5, '5547568940', 2, 'Diego')

INSERT INTO clientes(id_cliente, nombre, saldo, email, telefono) VALUES 
       (3, 'Gonzalo', 24.6, 'gonzalo@gmail.com', '5545209021'),
	   (4, 'Jhibran', 900.0, 'jhibran@gmail.com', '5539654782'),
       (5, 'Miranda', 1200.0, 'miranda@gmail.com', '5548585432')

	  
--Returning
INSERT INTO clientes(id_cliente, nombre, saldo, email, telefono) VALUES 
      (6, 'Mia', 64.6, 'mia@gmail.com', '5545209457')
	  RETURNING id_cliente

--Actualizar
UPDATE clientes SET saldo = 600.0 WHERE id_cliente = 4;
UPDATE clientes SET saldo = 400.0 WHERE nombre = 'Mia'

UPDATE clientes SET saldo = saldo + 50 WHERE saldo = 600.0
UPDATE clientes SET saldo = saldo + 150 WHERE id_cliente = 6 RETURNING nombre, saldo;

--Borrar se tiene que ser muy especifico

DELETE FROM clientes WHERE id_cliente = 5 
	  
--consultar 
SELECT * FROM clientes
SELECT * FROM clientes ORDER BY id_cliente

SELECT * FROM clientes;
SELECT sum(saldo) FROM clientes 


--constantes-- datos que no cambian 
SELECT 42 AS edad
SELECT '42'::integer

--label 
SELECT 42.0 edad
SELECT 42.0 AS edad


--Castear--
SELECT '42'::integer
SELECT 5::nunmeric/2::numeric
SELECT age('01/07/2001'::date)

--funciones-- 
SELECT age('01/07/2001'::date)
SELECT age('24/10/2001'::date)
SELECT random()|