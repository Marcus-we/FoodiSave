from fastapi import FastAPI, Depends, HTTPException
from db import get_db
from fastapi.middleware.cors import CORSMiddleware
from random import randint

app = FastAPI()

origins = [
    "http://localhost:3000",  # React app URL
    "http://localhost:8000",  # FastAPI app URL
    "http://localhost:5173",  # FastAPI app URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, db = Depends(get_db)):
    with db.cursor() as cursor:
        cursor.execute("SELECT * FROM recipes WHERE id = %s", (item_id,))
        item = cursor.fetchone()
    return {"item": item}

@app.get("/recipe")
def read_item(db = Depends(get_db)):
    with db.cursor() as cursor:
        cursor.execute("SELECT * FROM recipes WHERE id = %s", (randint(1,13000),))
        title = cursor.fetchall()
    return {"title": title[0][1], "id": title[0][0], "ingredients": title[0][2], "instructions": title[0][3], "image": title[0][4], "num_of_ingredints": title[0][5]}



@app.get("/search")
def search_recipes(name: str, db = Depends(get_db)):
    with db.cursor() as cursor:
        cursor.execute("SELECT * FROM recipes WHERE title ILIKE %s LIMIT 10", (f"%{name}%",))
        recipes = cursor.fetchall()
    if not recipes:
        raise HTTPException(status_code=404, detail="No recipes found")
    return [
        {
            "title": recipe[1],
            "id": recipe[0],
            "ingredients": recipe[2],
            "instructions": recipe[3],
            "image": recipe[4],
            "num_of_ingredients": recipe[5]
        }
        for recipe in recipes
    ]