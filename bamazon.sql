CREATE DATABASE Bamazon;
USE Bamazon;
CREATE TABLE products (
    item_id INT NOT NULL,
    product_name VARCHAR(250) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(10 , 2 ) NOT NULL,
    stock_quantity INT NOT NULL,
    UNIQUE KEY (item_id)
);
INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
VALUES (11234, 'Shark Kitty Bed', 'clothing', 59.99, 10),
       (11345, 'Vans Classic High Top - White', 'shoes', 69.99, 25),
       (12345, 'Duvet Cober', 'office Supplies', 89.99, 8),
       (23456, 'Glass Catch-all Dish', 'clothing', 15.99, 10),
       (34567, 'High Rise Skinny Jeans - Black', 'clothing', 19.99, 4),
       (45678, 'Mens knit Beanie - Blue', 'sporting goods', 21.99, 15),
       (56789, 'Spiked Dog Leash', 'animal', 25.99, 20),
       (67891, 'Mens Zip-up Hoodie', 'Kitchen', 15.99, 25),
       (76532, 'Dinosaur Hooded Bath Towel', 'clothing', 19.99, 30),
       (89123, 'Womens Bruce Springteen Baseball T-shirt', 'sporting gods', 25.99, 10);
       (91234, 'Striped Jersey Cotton Sheet - Queen', 'bedding', 59.99, 4),
       (99930, 'Mens Flannel Button up', 'clothing', 59.99, 20),

