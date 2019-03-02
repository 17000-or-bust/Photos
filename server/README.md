# 17001 || BUST: Reservations API v1.0

 ## <a style="color: #333333">Table of Contents</a>
* [**Photos.photos**](#photosphotos)
    * [GET /api/photos/:id](#get-apiphotosid)
    * [POST /api/photos](#post-apiphotos)
    * [PUT /api/photos/:id](#put-apiphotosid)
    * [DELETE /api/photos/:id](#delete-apiphotosid)
<hr>

 ## Photos.photos
### `GET /api/photos/:id`
Returns a `{ Photo }` at a given photo id.

 **URL Params**
  * `id` _(Number)_ : ID of the photo to retrieve all relevant details

 **Success Response:**
  * **Status Code:** 200
  * **Content:** `{ Photos }` conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`id`             |Number  |
   |`restaurant_id`  |Number  |
   |`image_url`      |String  |
   |`caption`        |String  |
   |`date_posted`    |Date    |
   |`username`       |String  |
   |`hover_data`     |String  |

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `POST /api/photos`
Returns the `id` of the photo created in the database.

 **Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`restaurant_id`  |Number  |
   |`image_url`      |String  |
   |`caption`        |String  |
   |`date_posted`    |Date    |
   |`username`       |String  |
   |`hover_data`     |String  |

 **Success Response:**
  * **Status Code:** 201
  * **Content:** `{ id }`

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `PUT /api/photos/:id`
Returns the `id` of the photo edited in the database.

 **URL Params**
  * `id` _(Number)_ : ID of the photo to update

 **Payload Params**
  * Valid `{ JSON }` object conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`id`             |Number  |
   |`restaurant_id`  |Number  |
   |`image_url`      |String  |
   |`caption`        |String  |
   |`date_posted`    |Date    |
   |`username`       |String  |
   |`hover_data`     |String  |

 **Success Response:**
  * **Status Code:** 201
  * **Content:** `{ id: id (Number) }`

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`

 ### `DELETE /api/photos/:id`
Returns the `{ Photo }` deleted from the database.

 **URL Params**
  * `id` _(Number)_ : ID of the photo to delete

 **Success Response:**
  * **Status Code:** 200
  * **Content:** `{ Photo }` conforming to the following format:

   |Key              |Type    |
   |:--------------- |:------ |
   |`id`             |Number  |
   |`restaurant_id`  |Number  |
   |`image_url`      |String  |
   |`caption`        |String  |
   |`date_posted`    |Date    |
   |`username`       |String  |
   |`hover_data`     |String  |

 **Error Response:**
  * **Code:** 400 Bad Request error
  * **Content:** `{ error : "Bad Request error" }`
<hr>
