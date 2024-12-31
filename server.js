const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors()); // Allow cross-origin requests

// MySQL connection configuration
const db = mysql.createConnection({
    host: '127.0.0.1', // Use 'localhost' or your specific host
    user: 'root',
    password: 'Nsht@1234', // Replace with your MySQL password
    database: 'food_ordering', // Ensure the database name matches your database
});

// Connect to MySQL
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        process.exit(1); // Exit the app if the database connection fails
    }
    console.log('Connected to the database!');
});

// API route to get all menu items
app.get('/api/menu', (req, res) => {
    const query = 'SELECT * FROM Menu';
    db.query(query, (err, result) => {
        if (err) {
            console.error('Database error:', err.message);
            return res
                .status(500)
                .json({ error: 'Database error while fetching menu items' });
        }
        res.status(200).json(result);
    });
});

// API route to place an order
app.post('/api/order', (req, res) => {
    const { customerID, menuItemID, quantity } = req.body;

    // Input validation
    if (!customerID || !menuItemID || !quantity) {
        return res
            .status(400)
            .json({ error: 'Missing required fields: customerID, menuItemID, quantity' });
    }

    console.log(
        `Received Order - CustomerID: ${customerID}, MenuItemID: ${menuItemID}, Quantity: ${quantity}`
    );

    // Fetch price from Menu
    const priceQuery = 'SELECT Price FROM Menu WHERE MenuItemID = ?';
    db.query(priceQuery, [menuItemID], (err, result) => {
        if (err) {
            console.error('Error fetching price:', err.message);
            return res.status(500).json({ error: 'Error fetching menu item price' });
        }

        if (result.length === 0) {
            return res.status(404).json({ error: 'Menu item not found' });
        }

        const price = result[0].Price;
        const totalPrice = price * quantity;

        // Insert order into Orders table
        const orderQuery =
            'INSERT INTO Orders (CustomerID, MenuItemID, Quantity, TotalPrice) VALUES (?, ?, ?, ?)';
        db.query(orderQuery, [customerID, menuItemID, quantity, totalPrice], (err) => {
            if (err) {
                console.error('Error inserting order:', err.message);
                return res.status(500).json({ error: 'Order could not be placed' });
            }
            console.log('Order placed successfully!');
            res.status(201).json({
                message: 'Order placed successfully!',
                customerID,
                menuItemID,
                quantity,
                totalPrice,
            });
        });
    });
});

// Handle 404 Errors for Undefined Routes
app.use('/',(req, res) => {
    res.status(404).json({ error: 'Endpoint not found' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error('Unexpected error:', err.message);
    res.status(500).json({ error: 'An unexpected error occurred' });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

