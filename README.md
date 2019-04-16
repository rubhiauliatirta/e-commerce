
# User 

## Register Customer

Melakukan register customer

**URL** : `/users/register`

**Method** : `POST`

**Auth Required** : NO

**Request Body**
```json
    {
        "name": "Gellert Grindelwald",
        "email": "gellert.g@dumstrang.com",
        "password": "password",
    }
```

**Success Status Code** : 201

**Success Response**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2IzYmM0OTMzZDg5OTczNDBkODhjOTIiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNTU1MjgzMDE3LCJleHAiOjE1NTUzMDEwMTd9.DWZ0b0t_jm9HJeg9_J2oVqCweuWj1fEhXM-co4DW6U8",
    "name": "Gellert Grindelwald",
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFExj43vNWFXXhr4_S6vYSGqFzjC77uObABaR7mk1biI9Y4eK"
}
```
## Register Admin

Melakukan register admin pada app e-commerce ini

**URL** : `/users/regadmin`

**Method** : `POST`

**Auth Required** : NO

**Request Body**
```json
    {
        "name": "Admin2",
        "email": "admin2@email.com",
        "password": "password",
        "admin_password" : "adminasik"
    }
```

**Success Status Code** : 201

**Success Response**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2IzYmM0OTMzZDg5OTczNDBkODhjOTIiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNTU1MjgzMDE3LCJleHAiOjE1NTUzMDEwMTd9.DWZ0b0t_jm9HJeg9_J2oVqCweuWj1fEhXM-co4DW6U8",
    "name": "Gellert Grindelwald",
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFExj43vNWFXXhr4_S6vYSGqFzjC77uObABaR7mk1biI9Y4eK"
}
```

## Login

Melakukan login

**URL** : `/users/login`

**Method** : `POST`

**Auth Required** : NO

**Request Body**
```json
    {
        "email": "harrypotter@hogwarts",
        "password": "password",
    }
```

**Success Status Code** : 200

**Success Response**
```json
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Y2IzYmM0OTMzZDg5OTczNDBkODhjOTIiLCJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNTU1MjgzMDE3LCJleHAiOjE1NTUzMDEwMTd9.DWZ0b0t_jm9HJeg9_J2oVqCweuWj1fEhXM-co4DW6U8",
    "name": "Harry Potter",
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFExj43vNWFXXhr4_S6vYSGqFzjC77uObABaR7mk1biI9Y4eK"
}
```
## Logout
Untuk logout

**URL** : `/users/logout`

**Method** : `POST`

**Auth Required** : YES

**Success Status Code** : 200

**Request Body**

**Success Response**
```json
{
    "message": "Successfully logout",
    "accountType": "default"
}
```

## Get Profile

Untuk mendapatkan informasi login user dengan menggunakan token yang di simpan pada browser

**URL** : `/users/profile`

**Method** : `GET`

**Auth Required** : YES

**Success Status Code** : 200

**Success Response**
```json
{
    "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFExj43vNWFXXhr4_S6vYSGqFzjC77uObABaR7mk1biI9Y4eK",
    "accountType": "default",
    "_id": "5cb3bc4933d8997340d88c92",
    "name": "antonio",
    "email": "test@gmail.com",
    "__v": 0
}
```

## Add Product to Cart
JANGAN LUPA MASUKKAN DOKUMENTASI UNTUK MEMASUKKAN KEDALAM CART

# Products

## Get Products

Mendapat list barang yang di jual

**URL** : `/products`

**Method** : `GET`

**Auth Required** : NO

**Success Status Code** : 200

**Success Response**
```json
[
    {
        "_id":"pdokapofea0284u2",
        "product_image":"http://img.adkaklaaefaef/aef/aefaefhua",
        "product_name": "Loose Sweater",
        "price":100000,
        "product_description": "Product ini adalah bakjebaieufbaoubfaef"
    },
    {
        "_id":"pdokapofea0284u2",
        "product_image":"http://img.adkaklaaefaef/aef/aefaefhua",
        "product_name": "Loose Sweater",
        "price":100000,
        "product_description": "Product ini adalah bakjebaieufbaoubfaef"
    },
    {
        "_id":"pdokasdaofe284u2",
        "product_image":"http://img.adkaklaaefaef/aef/aefaefhua",
        "product_name": "Boxy Sweater",
        "price":70000,
        "product_description": "Producasdkat ini adalah bakjebaieufbaoubfaef"
    },
]
```

## Post Product

Menambahkan produk kedalam database

**URL** : `/products`

**Method** : `POST`

**Auth Required** : YES (Admin Only)

**Success Status Code** : 201

**Request Body**
```json
    {
        "product_image":"http://img.adkaklaaefaef/aef/aefaefhua",
        "product_name": "Loose Sweater",
        "price":100000,
        "product_description": "Product ini adalah bakjebaieufbaoubfaef"
    }
```

**Success Response**
```json

    {
        "_id":"pdokapofea0284u2",
        "product_image":"http://img.adkaklaaefaef/aef/aefaefhua",
        "product_name": "Loose Sweater",
        "price":100000,
        "product_description": "Product ini adalah bakjebaieufbaoubfaef"
    }

```

## Edit Product

Mengedit produk kedalam database

**URL** : `/products/:productId`

**Method** : `PATCH`

**Auth Required** : YES (Admin Only)

**Request Body**
```json
    {
        "product_image":"http://img.adkaklaaefaef/aef/aefaefhua",
        "product_name": "Loose Sweater Bagus Sekali",
        "price":100000,
        "product_description": "Product ini adalah bakjebaieufbaoubfaef"
    }
```

**Success Status Code** : 200


**Success Response**
```json

    {
        "_id":"pdokapofea0284u2",
        "product_image":"http://img.adkaklaaefaef/aef/aefaefhua",
        "product_name": "Loose Sweater Bagus Sekali",
        "price":100000,
        "product_description": "Product ini adalah bakjebaieufbaoubfaef"
    }

```

## DELETE Product

Menambahkan produk kedalam database

**URL** : `/products/:productId`

**Method** : `DELETE`

**Auth Required** : YES (Admin Only)

**Success Status Code** : 200

**Success Response**
```json

    {
        "message" : "Successfully delete product"
    }

```



