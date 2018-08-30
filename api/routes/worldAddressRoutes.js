'use strict';

module.exports = function(app) {
    let worldAddressList = require('../controllers/worldAddressController');

    // worldAddress Routes
    app.route('/addressInfo')
        .get(worldAddressList.addressInfo);

    app.route('/autocompleteAddress')
        .get(worldAddressList.autocompleteAddress);

    app.route('/getAddressByLatLng')
        .get(worldAddressList.getAddressByLatLng);

    app.route('/getNearbyInfo')
        .get(worldAddressList.getNearbyInfo);

};