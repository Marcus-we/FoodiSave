import psycopg2
from psycopg2 import pool

DATABASE_URL = "postgresql://postgres:Hockey2013!@localhost/foodisave_db"

connection_pool = psycopg2.pool.SimpleConnectionPool(1, 20, DATABASE_URL)

def get_db():
    conn = connection_pool.getconn()
    try:
        yield conn
    finally:
        connection_pool.putconn(conn)

