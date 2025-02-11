import pandas as pd
import psycopg2
from psycopg2 import sql
import os

# Database connection parameters
db_params = {
    'dbname': 'foodisave_db',
    'user': 'postgres',
    'password': 'Hockey2013!',
    'host': 'localhost',
    'port': '5432'
}

# Read the CSV file
df = pd.read_csv('food.csv')

# Add a new column 'num_of_ingredients' to the dataset
df['num_of_ingredients'] = df['Ingredients'].apply(lambda x: len(x.split(',')))

# Connect to the PostgreSQL database
conn = psycopg2.connect(**db_params)
cur = conn.cursor()

# Create table if not exists
create_table_query = """
CREATE TABLE IF NOT EXISTS recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,    
    ingredients TEXT,
    instructions TEXT,
    image_name TEXT,
    num_of_ingredients INT
);
"""
cur.execute(create_table_query)
conn.commit()

# Insert data into the table
insert_query = """
INSERT INTO recipes (title, ingredients, instructions, image_name, num_of_ingredients)
VALUES (%s, %s, %s, %s, %s)
"""

for index, row in df.iterrows():
    cur.execute(insert_query, (row['Title'], row['Ingredients'], row['Instructions'], row["Image_Name"], row['num_of_ingredients']))

# Commit the transaction
conn.commit()

# Close the cursor and connection
cur.close()
conn.close()

print("Data inserted successfully.")

