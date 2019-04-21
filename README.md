
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
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFExj43vNWFXXhr4_S6vYSGqFzjC77uObABaR7mk1biI9Y4eK",
    
}
```
## Register Admin

Melakukan register admin pada app e-commerce ini

**URL** : `/users/register`

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
    "imgSrc": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFExj43vNWFXXhr4_S6vYSGqFzjC77uObABaR7mk1biI9Y4eK",
    "role": "customer",
   "hackpay": 100000
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
   "accountType": "default",
   "imageUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfFExj43vNWFXXhr4_S6vYSGqFzjC77uObABaR7mk1biI9Y4eK",
   "name": "rubhi",
   "role": "customer",
   "hackpay": 1000000
}
```

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
      "_id": "5cb9c8441448fb65ada06974",
      "name": "sepatu mahal 1",
      "image": "https://storage.googleapis.com/hackommerce/1555679299045file.png",
      "price": 1000000,
      "stock": 10
   },
   {
      "_id": "5cb9c89f711f0f65ff4d3d09",
      "name": "sepatu mahal 2",
      "image": "https://storage.googleapis.com/hackommerce/1555679390186file.png",
      "price": 1000000,
      "stock": 10
   }
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
        "image":"http://img.adkaklaaefaef/aef/aefaefhua",
        "name": "Loose Sweater",
        "price":100000,
        "stok" : 52,
        "description": "Product ini adalah bakjebaieufbaoubfaef"
    }
```

**Success Response**
```json

{
    "_id": "5cbc7bcf40c85b25bfbc0e26",
    "name": "Sepatu Bola",
    "image": "https://storage.googleapis.com/hackommerce/1555856333256spatubola1.jpg",
    "price": 1234324,
    "stock": 52
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
        "image":"http://img.adkaklaaefaef/aef/aefaefhua",
        "name": "Loose Sweater Bagus Sekali",
        "price":100000,
        "stocl":30
    }
```

**Success Status Code** : 200


**Success Response**
```json

    {
        "_id":"pdokapofea0284u2",
        "image":"http://img.adkaklaaefaef/aef/aefaefhua",
        "name": "Loose Sweater Bagus Sekali",
        "price":100000,
        "stock":30
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
   "message": "Delete Success"
}

```


# CART

## Get Carts

Mendapatkan list chart ynag dimiliki oleu user

**URL** : `/carts`

**Method** : `GET`

**Auth Required** : YES 

**Success Status Code** : 200

**Success Response**
```json
[
    {
        "isCheckout": false,
        "count": 0,
        "_id": "5cbcf79bf99e5852811590e1",
        "userId": "5cb4c821a973d115caa052fb",
        "product": {
            "_id": "5cbbc48bacf09669b1dc2ea9",
            "name": "Sepatu 1",
            "image": "https://storage.googleapis.com/hackommerce/1555809418759sepatu1.jpeg",
            "price": 1242545,
            "stock": 20
        }
    },
    {
        "isCheckout": false,
        "count": 0,
        "_id": "5cbcf9a47d3bd753c7b0adcc",
        "userId": "5cb4c821a973d115caa052fb",
        "product": {
            "_id": "5cbbe3911bd8d70b1964f68d",
            "name": "Sepatu 2",
            "image": "https://storage.googleapis.com/hackommerce/1555817359976sepatu2.jpeg",
            "price": 121425,
            "stock": 20
        }
    }
]
```

## Post Product

Menambahkan produk kedalam database

**URL** : `/carts`

**Method** : `POST`

**Auth Required** : YES (Customer Only)

**Success Status Code** : 201 / 200

**Request Body**
```json
{
    "count": 10,
    "product": "5cb9c8441448fb65ada06975",
}
```

**Success Response 201**
```json
{
   "isCheckout": false,
   "count": 0,
   "_id": "5cbcfc5aedb3035681f5b3e4",
   "userId": "5cb4c91945915a17560764bc",
   "product": "5cb9c8441448fb65ada06975"
}

```

**Success Response 200**
```json
{
     "message":"Already exist in user cart"
}




## Edit Product

Mengedit produk kedalam database

**URL** : `/products/:productId`

**Method** : `PATCH`

**Auth Required** : YES (Admin Only)

**Request Body**
```json
    {
        "isCheckout": true,
        "count": 20,
    }
```

**Success Status Code** : 200


**Success Response**
```json
{
   "isCheckout": false,
   "count": 0,
   "_id": "5cbcfc5aedb3035681f5b3e4",
   "userId": "5cb4c91945915a17560764bc",
   "product": "5cb9c8441448fb65ada06975"
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
   "message": "Delete Success"
}

```
#ERROR

## Error
Semua error pada API ini memiliki pola yang sama, yaitu memiliki key:
- error = object error
- source = bagian yang memberikan error
- message = pesan error
- statusCode = kode respon

**Contoh**
```json
{
    "error": {
        "errors": {
            "email": {
                "message": "Email already exists",
                "name": "ValidatorError",
                "properties": {
                    "message": "Email already exists",
                    "type": "user defined",
                    "path": "email",
                    "value": "test@gmail.com"
                },
                "kind": "user defined",
                "path": "email",
                "value": "test@gmail.com"
            }
        },
        "_message": "User validation failed",
        "message": "User validation failed: email: Email already exists",
        "name": "ValidationError"
    },
    "source": "database",
    "message": "User validation failed: email: Email already exists",
    "statusCode": 400
}

```
```json
{
   "error": {
      "message": "Item id not found",
      "name": "Error"
   },
   "source": "node",
   "message": "Item id not found",
   "statusCode": 400
}
```
```json
{
   "error": {
      "message": "Token is undefined",
      "name": "Error"
   },
   "source": "node",
   "message": "Token is undefined",
   "statusCode": 403
}
```
```json
{
   "error": {
      "message": "Not Authorized",
      "name": "Error"
   },
   "source": "node",
   "message": "Not Authorized",
   "statusCode": 401
}
```
**CODE RESPONSE**

403 => diakibatkan oleh email/password salah, token tidak valid yang membuat aplikasi logout.

401 => request tidak memiliki authorisasi

400 => Bad Request, kesalahan dari client

500 => Error berasal dari internal server


