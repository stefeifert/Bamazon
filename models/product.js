DROP DATABASE if exists bamazon;
CREATE DATABASE bamazon;
USE bamazon;
	

CREATE DATABASE Bamazon;

USE Bamazon;

CREATE TABLE Products(
    ItemID MEDIUMINT AUTO_INCREMENT NOT NULL,
    ProductName VARCHAR(100) NOT NULL,
    DepartmentName VARCHAR(50) NOT NULL,
    Price DECIMAL(10,2) NOT NULL,
    StockQuantity INT(10) NOT NULL,
    primary key(ItemID)
);

select * from Products;
	

	INSERT INTO Products (ProductName,DepartmentName,Price,StockQuantity)
	VALUES ("Boxing Gloves","SPORTS",113.00,5),	
	("Facial Cream", "BEAUTY",43.50,5),
	("Cat Collar", "PETS", 12.95,15),
	("Soccer Ball", "SPORTS", 54.00, 2),
	("Playstation 4", "GAMING", 289.00, 4),
	("Chanel Perfume", "BEAUTY", 150.00, 3),
	("Dog Collar", "PETS", 19.95, 15),
    ("Last of Us", "GAMING", 37.50, 2),
    ("Adidas Track Shoes", "SPORTS", 99.99, 3),
	("Fancy Notebooks", "OFFICE", 17.99, 20);

	CREATE TABLE Departments(
		DepartmentID MEDIUMINT AUTO_INCREMENT NOT NULL,
		DepartmentName VARCHAR(50) NOT NULL,
		OverHeadCosts DECIMAL(10,2) NOT NULL,
		TotalSales DECIMAL(10,2) NOT NULL,
		PRIMARY KEY(DepartmentID));
	
	INSERT INTO Departments(DepartmentName, OverHeadCosts, TotalSales)
	VALUES ('PETS', 50000.00, 15000.00),
		('GAMING', 20000.00, 12000.00),
		('OFFICE', 30000.00, 15000.00),
		('BEAUTY', 3000.00, 12000.00),
		('GROCERY', 1200.00, 15000.00),
		('KIDS', 40000.00, 12000.00),
		('CLOTHING', 35000.00, 15000.00),
		('SPORTS', 12000.00, 12000.00);
	

	
