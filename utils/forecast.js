const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=835eba8d1d23700f369c9f09eb59eda2&query=' + latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connnect to weather service', undefined);
        } else if (body.error) {
            callback('Unable to connect to location services', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' fahrenheit out. It feels like ' + body.current.feelslike + ' fahrenheit out.');
        }
    })
}

module.exports = forecast;