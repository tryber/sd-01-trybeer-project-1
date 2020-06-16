CREATE DATABASE IF NOT EXISTS trybeer;
USE trybeer;

CREATE TABLE IF NOT EXISTS users (
  id_user INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  name VARCHAR(80) NOT NULL,
  password VARCHAR(64) NOT NULL,
  email VARCHAR(50) NOT NULL,
  role VARCHAR(20) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS products (
  id_product INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  name_product VARCHAR(255) NOT NULL,
  price DOUBLE NOT NULL,
  image VARCHAR(100) NOT NULL
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS orders (
  id_order INT NOT NULL AUTO_INCREMENT UNIQUE PRIMARY KEY,
  id_user INT NOT NULL,
  data TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  address VARCHAR(255) NOT NULL,
  status TINYINT DEFAULT 0,
  FOREIGN KEY (id_user) REFERENCES trybeer.users (id_user)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS orders_products (
  id_order INT NOT NULL,
  id_product INT NOT NULL,
  quantity INT NOT NULL,
  FOREIGN KEY (id_order) REFERENCES trybeer.orders (id_order),
  FOREIGN KEY (id_product) REFERENCES trybeer.products (id_product)
) ENGINE = InnoDB;

INSERT INTO products (name_product, price, image)
VALUES
('Skol Lata 250ml', 2.20, 'http://localhost:3001/skol-lata-350ml.jpg'),
('Heineken 600ml', 7.50, 'http://localhost:3001/heineken-600ml.jpg'),
('Antarctica Pilsen 300ml', 2.49, 'http://localhost:3001/antarctica-pilsen-300ml.jpg'),
('Brahma 600ml', 7.50, 'http://localhost:3001/brahma-600ml.jpg'),
('Skol 269ml', 2.19, 'http://localhost:3001/skol-269ml.jpg'),
('Skol Beats Senses 313ml', 4.49, 'http://localhost:3001/skol-beats-senses-313ml.jpg'),
('Becks 330ml', 4.99, 'http://localhost:3001/becks-330ml.jpg'),
('Brahma Duplo Malte 350ml', 2.79, 'http://localhost:3001/brahma-duplo-malte-350ml.jpg'),
('Becks 600ml', 8.89, 'http://localhost:3001/becks-600ml.jpg'),
('Skol Beats Senses 269ml', 3.57, 'http://localhost:3001/skol-beats-senses-269ml.jpg'),
('Stella Artois 275ml', 3.49, 'http://localhost:3001/stella-artois-275ml.jpg');

INSERT INTO users (name, password, email, role)
VALUES
('Henrique', 123456, 'henrique@gmail.com', 'admin');

INSERT INTO orders (id_user, address)
VALUES
(1, 'Belo Horizonte'),
(1, 'São Paulo');

INSERT INTO orders_products (id_order, id_product, quantity)
VALUES
(1, 1, 12),
(1, 5, 6),
(2, 3, 2);

USE trybeer;
SELECT P.name_product, P.price, OP.quantity, P.price * OP.quantity AS Total
FROM products AS P
INNER JOIN orders_products AS OP
ON P.id_product = OP.id_product
INNER JOIN orders AS O
ON O.id_order = OP.id_order
WHERE O.id_order = 2;
