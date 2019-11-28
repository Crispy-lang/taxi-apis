# TAXI 24

## About Taxi24

Taxi24 set of APIs that other companies can use to manage their fleet of drivers and
allocate drivers to passengers..

---

## API Spec

The preferred JSON object to be returned by the API should be structured as follows:

### Errors and Status Codes

If a request fails any validations, expect errors in the following format:

```source-json
{
  "errors":{
    "body": [
      "can't be empty"
    ]
  }
}
```

### Other status codes:

401 for Unauthorized requests, when a request requires authentication but it isn't provided

403 for Forbidden requests, when a request may be valid but the user doesn't have permissions to perform the action

404 for Not found requests, when a resource can't be found to fulfill the request

## Endpoints:
