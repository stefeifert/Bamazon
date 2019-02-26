module.exports = 
    Products [
    {
        product_name: "Chanel Chance Perfume",
        department_name: "Beauty",
        price: 150.00,
        stock_quantity: 25
    },
    {
        product_name: "Throw Pillow",
        department_name: "Home",
        price: 19.99,
        stock_quantity: 78
    },
    {
        product_name: "Rhinestone Cat Collar",
        department_name: "Pets",
        price: 12.99,
        stock_quantity: 3
    },
    {
        product_name: "'Butch' Spiked Leather Dog Collar",
        department_name: "Pets",
        price: 24.99,
        stock_quantity: 23
    },
    {
        product_name: "Soccer Ball",
        department_name: "Sports",
        price: 10.00,
        stock_quantity: 56
    },
    {
        product_name: "Women's Gummy Vitamins",
        department_name: "Health",
        price: 18.99,
        stock_quantity: 77
    },
    {
        product_name: "Coleman LED Lantern",
        department_name: "Outdoor",
        price: 44.99,
        stock_quantity: 21
    },
    {
        product_name: "Motorhead Tee",
        department_name: "Clothing",
        price: 29.99,
        stock_quantity: 4
    },
    {
        product_name: "54 in. LED Flat-Screen Smart TV",
        department_name: "Electronics",
        price: 124.99,
        stock_quantity: 13
    },
    {
        product_name: "All-Weather Rubber Floor Mats, Set of 4",
        department_name: "Auto",
        price: 19.99,
        stock_quantity:53
    }    
]

db.sequelize.sync({force: true}).then(function(){
    db.Products.bulkCreate(items)
    .then(function(rows){
        console.log("\n\nInserted into database\n\n");
        db.sequelize.close();
    }) .catch(function(err){
        console.log('\n\nError:', err);
    });
});



// INSERT INTO Products SET department_name="Beauty", product_name="Chanel Chance Perfume", price=150.00, stock_quantity=25, createdAt=NOW(), updatedAt=NOW();
// INSERT INTO Products SET department_name="Home", product_name="Throw Pillow", price=19.99, stock_quantity=78, createdAt=NOW(), updatedAt=NOW();
// INSERT INTO Products SET department_name="Pets", product_name="Rhinestone Cat Collar", price=12.99, stock_quantity=3, createdAt=NOW(), updatedAt=NOW();
// INSERT INTO Products SET department_name="Pets", product_name=""Butch" Spiked Leather Dog Collar", price=24.99, stock_quantity=23, createdAt=NOW(), updatedAt=NOW();
// INSERT INTO Products SET department_name="Sports", product_name="Soccer Ball", price=10.00, stock_quantity=56, createdAt=NOW(), updatedAt=NOW();
// INSERT INTO Products SET department_name="Health", product_name="Women's Gummy Vitamins", price=18.99, stock_quantity=77, createdAt=NOW(), updatedAt=NOW();
// INSERT INTO Products SET department_name="Outdoor", product_name="Coleman LED Lantern", price=44.99, stock_quantity=21, createdAt=NOW(), updatedAt=NOW();
// INSERT INTO Products SET department_name="Clothing", product_name="Motorhead Tee", price=12.99, stock_quantity=2, createdAt=NOW(), updatedAt=NOW();
// INSERT INTO Products SET department_name="Electronics", product_name=""54" LED Flat-Screen Smart TV", price=124.99, stock_quantity=13, createdAt=NOW(), updatedAt=NOW();
// INSERT INTO Products SET department_name="Auto", product_name="All-Weather Rubber Floor Mats, Set of 4", price=19.99, stock_quantity=53, createdAt=NOW(), updatedAt=NOW();