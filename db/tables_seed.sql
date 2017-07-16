
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    middle_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    phone VARCHAR(15),
    address TEXT,
    city TEXT,
    state TEXT,
    zipcode TEXT,
    bio VARCHAR(255),
    attending BOOLEAN,
    photo TEXT
);

DROP TABLE IF EXISTS stripe_records;

CREATE TABLE stripe_records (
    id SERIAL PRIMARY KEY,
    record VARCHAR(255)
);

CREATE TABLE classmates (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    found BOOLEAN
);


INSERT INTO users (first_name, last_name, email, password) VALUES
('Jon', 'Myrick', 'jon@gmail.com', '123'),
('Sara', 'Johnson', 'sara@gmail.com', '123');

INSERT INTO stripe_records (record) VALUES
('this is a stripe record');

INSERT INTO classmates (first_name, last_name, found) VALUES
('Travis', 'Pastrana', false);