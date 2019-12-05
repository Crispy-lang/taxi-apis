# TAXI 24

## About Taxi24

Taxi24 set of APIs that other companies can use to manage their fleet of drivers and
allocate drivers to passengers..

---

## API Spec

The preferred JSON object to be returned by the API should be structured as follows:

### Errors and Status Codes

### Other status codes:

401 for Unauthorized requests, when a request requires authentication but it isn't provided

403 for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action

404 for Not found requests, when a resource can't be found to fulfill the request

## Endpoints:

#### user's

    1. get users: ```GET /api/users/```
    2. get user by ID: ```GET /api/users/id/:id```
    3. get riders in driver's location: ```GET /api/users/riders/:driverId```
    4. get users within 3km: ```GET /api/users/location/available```

#### trips

    1. create trip: ```POST /api/trips/```
    2. list trips: ```GET /api/trips/:status```
    3. terminate trip: ```PUT /api/trips/:tripId/:status```

#### invoice

    1. pay invoice: ```PUT /api/invoices/pay/:invoiceId```
    2. list invoices: ```GET /api/invoices/```
    3. get invoice: ```GET /api/invoices/:id```
    4. get paid and unpaid invoices: ```GET /api/invoices/:id/:status```,
