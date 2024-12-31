-- Drop tables if they already exist
DROP TABLE IF EXISTS Orders, Menu, Customers;

-- Create Customers table
CREATE TABLE Customers (
    CustomerID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Address VARCHAR(255),
    Contact VARCHAR(15)
);

-- Create Menu table
CREATE TABLE Menu (
    MenuItemID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(100) NOT NULL,
    Price DECIMAL(10, 2) NOT NULL,
    Category VARCHAR(50)
);

-- Create Orders table
CREATE TABLE Orders (
    OrderID INT AUTO_INCREMENT PRIMARY KEY,
    CustomerID INT,
    MenuItemID INT,
    Quantity INT NOT NULL,
    TotalPrice DECIMAL(10, 2),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (MenuItemID) REFERENCES Menu(MenuItemID)
);

-- Insert sample data
INSERT INTO Customers (Name, Address, Contact) VALUES
    ('John Doe', '123 Elm Street', '1234567890'),
    ('Jane Smith', '456 Oak Street', '0987654321');

INSERT INTO Menu (Name, Price, Category) VALUES
    ('Burger', 5.99, 'Fast Food'),
    ('Pizza', 8.99, 'Fast Food'),
    ('Salad', 4.99, 'Healthy');

INSERT INTO Orders (CustomerID, MenuItemID, Quantity, TotalPrice) VALUES
    (1, 1, 2, 11.98),
    (2, 2, 1, 8.99);
