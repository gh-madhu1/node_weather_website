const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/forecast?access_key=a5ba34f7cdac1b4fb40ac24de2f98e96&query=' + latitude + ',' + longitude + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined,
                body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees. The humidity is '+ body.current.humidity+'%.'
            )
        }
    })

}

module.exports = forecast