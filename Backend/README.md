
````markdown
# 🚗 Ride Booking API Documentation

This backend API supports a ride-booking system, including user and captain management, map utilities, and ride operations. Authentication is managed using JWT tokens.

---

## 🧑‍💼 Users

### 📌 POST `/users/register`
Registers a new user.

#### Request Body
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john@example.com",
  "password": "secure123"
}
````

#### Response

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "secure123"
  },
  "token": "JWT_TOKEN"
}
```

---

### 📌 POST `/users/login`

Authenticates a user.

#### Request Body

```json
{
  "email": "john@example.com",
  "password": "secure123"
}
```

#### Response

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "secure123"
  },
  "token": "JWT_TOKEN"
}
```

---

### 📌 GET `/users/profile`

Retrieves authenticated user's profile.

#### Headers

```
Authorization: Bearer <token>
```

#### Response

```json
{
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com"
  }
}
```

---

### 📌 GET `/users/logout`

Logs out the user and blacklists the token.

#### Headers

```
Authorization: Bearer <token>
```

#### Response

```json
{
  "message": "Logout successfully."
}
```

---

## 👨‍✈️ Captains

### 📌 POST `/captains/register`

Registers a new captain.

#### Request Body

```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane@captain.com",
  "password": "secure123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Response

```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane@captain.com",
    "password": "secure123",
    "vehicle": {
      "color": "Red",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "JWT_TOKEN"
}
```

---

### 📌 POST `/captains/login`

Authenticates a captain.

#### Request Body

```json
{
  "email": "jane@captain.com",
  "password": "secure123"
}
```

#### Response

```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane@captain.com",
    "password": "secure123",
    "vehicle": {
      "color": "Red",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  },
  "token": "JWT_TOKEN"
}
```

---

### 📌 GET `/captains/profile`

Retrieves authenticated captain's profile.

#### Headers

```
Authorization: Bearer <token>
```

#### Response

```json
{
  "captain": {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Smith"
    },
    "email": "jane@captain.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC1234",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

---

### 📌 GET `/captains/logout`

Logs out the captain and blacklists the token.

#### Headers

```
Authorization: Bearer <token>
```

#### Response

```json
{
  "message": "Logout successfully."
}
```

---

## 🗺️ Maps

### 📌 GET `/maps/get-coordinates`

Get coordinates for a given address.

#### Query Parameters

* `address` (string, required)

#### Example

```
GET /maps/get-coordinates?address=1600+Amphitheatre+Parkway
```

#### Response

```json
{
  "ltd": 37.4224764,
  "lng": -122.0842499
}
```

---

### 📌 GET `/maps/get-distance-time`

Get distance and travel time between two locations.

#### Query Parameters

* `origin` (string, required)
* `destination` (string, required)

#### Example

```
GET /maps/get-distance-time?origin=New+York&destination=Los+Angeles
```

#### Response

```json
{
  "distance": {
    "text": "2,789 miles",
    "value": 4486540
  },
  "duration": {
    "text": "1 day 18 hours",
    "value": 154800
  }
}
```

---

### 📌 GET `/maps/get-suggestions`

Autocomplete address input.

#### Query Parameters

* `input` (string, required)

#### Example

```
GET /maps/get-suggestions?input=1600+Amphitheatre
```

#### Response

```json
[
  "1600 Amphitheatre Parkway, Mountain View, CA, USA",
  "1600 Amphitheatre Pkwy, Mountain View, CA 94043, USA"
]
```

---

## 🚕 Rides

### 📌 POST `/rides/create`

Creates a new ride request.

#### Headers

```
Authorization: Bearer <token>
```

#### Request Body

```json
{
  "pickup": "1600 Amphitheatre Parkway",
  "destination": "1 Infinite Loop",
  "vehicleType": "car"
}
```

#### Response

```json
{
  "ride": {
    "user": "USER_ID",
    "pickup": "1600 Amphitheatre Parkway",
    "destination": "1 Infinite Loop",
    "fare": 75,
    "status": "pending",
    "duration": 1800,
    "distance": 15000,
    "otp": "123456"
  }
}
```

---

### 📌 GET `/rides/get-fare`

Get fare estimates between two addresses.

#### Headers

```
Authorization: Bearer <token>
```

#### Query Parameters

* `pickup` (string, required)
* `destination` (string, required)

#### Example

```
GET /rides/get-fare?pickup=1600+Amphitheatre+Parkway&destination=1+Infinite+Loop
```

#### Response

```json
{
  "auto": 50.0,
  "car": 75.0,
  "moto": 40.0
}
```

---

## 🔐 Authentication

All protected routes require a valid **JWT token** in the request header:

```
Authorization: Bearer <token>
```

---

## ❌ Error Responses (General Format)

```json
{
  "message": "Error message"
}
```

* `400 Bad Request`: Missing or invalid input
* `404 Not Found`: Resource not found
* `500 Internal Server Error`: Server error

---

## 📬 Contact

For support or queries, reach out at [Gmail](mailto:rg967029@gmail.com)

---

**License:** MIT
**Version:** 1.0.0

```

