# node-world-address-api

Access to the [Google Map API](https://cloud.google.com/maps-platform/) [API](https://developers.google.com/maps/documentation/).

node-world-address-api is a RESTful API built with Node.js to obtain world address with [Google Map API](https://cloud.google.com/maps-platform/) integration


## Installation

node-stripe-payment-api requires [Node.js](https://nodejs.org/) v6+ and [npm](https://www.npmjs.com/) installed to run.

First, you need to create a .env file in the root directory. The file contain the public and private keys of your Google Map API:

```sh
    GOOGLE_API_KEY=YOUR_PRIVATE_KEY_HERE
```

Run the following command to download all the node dependencies:

```sh
    npm install
```

To start the server:

```sh
    npm start
```

The world address application will be running on port 3000


## API calls documentation

Admin required for all routes!

### Address Information

- GET `/addressInfo?address=ADDRESS` - Find information of an address

		address (REQUIRE): The full address


### Auto-complete an Address

- GET `/autocompleteAddress?address=ADDRESS` - Get a list of complete addresses of a given address

		address (REQUIRE): Part of address


### Obtain Address By Latitude and Longitude

- GET `/getAddressByLatLng?lat=LATITUDE&lng=LONGITUDE` - Get a list of complete addresses from given longitude and latitude

		lat (REQUIRE): The latitude of the address

		lng (REQUIRE): The longitude of the address

### Get Nearby Information of an address

- GET `/getNearbyInfo?lat=LATITUDE&lng=LONGITUDE&radius=RADIUS&type=TYPE&keyword=KEYWORDS` - List all payments

		lat (REQUIRE): The latitude of the address

		lng (REQUIRE): The longitude of the address
		
		radius (Optional): The radius from the given polint in number, defaul is 1500

		type (Optional): Ex. Restaurant, Hotel, etc
		
		keyword (Optional): Ex. Stack

## TODO
 - Add authentication
 - For more, see the [issue tracker](http://github.com/Wrinth/node-world-address-api/issues).


## Author

Hoyeung Lai (johnl4112@gmail.com).


License
----

MIT