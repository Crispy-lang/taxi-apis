# TAXI 24

## About Taxi24

Taxi24 set of APIs that other companies can use to manage their fleet of drivers and
allocate drivers to passengers..

---

## Endpoints:

#### user's

1. get users: `GET /api/users/`
2. get user by ID: `GET /api/users/id/:id`
3. get riders in driver's location: `GET /api/users/riders/:driverId`
4. get users within 3km: `GET /api/users/location/available`

#### trips

1. create trip: `POST /api/trips/`
2. list trips: `GET /api/trips/:status`, accepted status: `waiting`, `active`, `completed`
3. terminate trip: `PUT /api/trips/:tripId/:status`, accepted status: `active`, completed; accepted IDs are integers.

#### invoice

1. pay invoice:`PUT /api/invoices/pay/:invoiceId`, accepted IDs are integers
2. list invoices: `GET /api/invoices/`
3. get invoice: `GET /api/invoices/:id`, accepted IDs are integers
4. get paid and unpaid invoices: `GET /api/invoices/paid/:status`, accepted status: `true`, `flase`
