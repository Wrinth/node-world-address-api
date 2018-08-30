'use strict';

// A zero-dependency module that loads environment variables from a .env file into process.env
require('dotenv').config();

// Google API Secret Key
const googleApiKey = process.env.GOOGLE_API_KEY;

// Promise based HTTP client for node.js
const axios = require('axios');

exports.addressInfo = (req, res) =>
{
    let address = encodeURIComponent(decodeURIComponent(req.query.address));
    let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${googleApiKey}`;

    axios.get(geocodeUrl).then((response) =>
    {
        if(response.data.status)
        {
            res.json(response.data);
        } else {
            res.json('Not infomartion matched.');
        }
    }).catch((e) =>
    {
        res.json(e);
    });
};

exports.autocompleteAddress = (req, res) =>
{
    let address = encodeURIComponent(decodeURIComponent(req.query.address));

    let geocodeUrl = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${address}&key=${googleApiKey}`;//&session_token=1234567890`
    console.log(geocodeUrl);

    axios.get(geocodeUrl).then((response) =>
    {
        let result = [];
        if(response.data.status) {
            for (let count = 0; count < response.data.predictions.length; count++)
            {
                result.push(response.data.predictions[count].description);
            }
        } else {
            result = 'No address matched.';
        }
        res.json(result);
    }).catch((e) =>
    {
        res.json(e);
    });
};

exports.getAddressByLatLng = (req, res) =>
{
    let lat = encodeURIComponent(decodeURIComponent(req.query.lat));
    let lng = encodeURIComponent(decodeURIComponent(req.query.lng));
    let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${googleApiKey}`;
    // console.log(geocodeUrl);
    axios.get(geocodeUrl).then((response) => {
        let result = [];
        if(response.data.status)
        {
            for (let count = 0; count < response.data.results.length; count++)
            {
                result.push(response.data.results[count].formatted_address);
            }
        } else {
            result = 'No address found.';
        }
        res.json(result);
    }).catch((e) =>
    {
        res.json(e);
    });
};

exports.getNearbyInfo = (req, res) =>
{
    let lat = encodeURIComponent(decodeURIComponent(req.query.lat));
    let lng = encodeURIComponent(decodeURIComponent(req.query.lng));
    let radius = (req.query.radius || 1500);
    let type = '';
    if(req.query.type)
    {
        type = '&type=' + req.query.type;
    }
    let keyword = '';
    if(req.query.keyword)
    {
        type = '&keyword=' + req.query.keyword;
    }
    let geocodeUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${lat},${lng}&radius=${radius}${type}${keyword}&key=${googleApiKey}`

    axios.get(geocodeUrl).then((response) => {
        if(response.data.status)
        {
            res.json(response.data);
        } else {
            res.json('No places matched.');
        }
    }).catch((e) =>
    {
        res.json(e);
    });
};
