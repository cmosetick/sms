//require the Twilio module and create a REST client
var client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);

//Send an SMS text message
client.sendMessage({

    to: (process.env.TO_NUMBER), // Any number Twilio can deliver to
    from: '+12062070805', // A number you bought from Twilio and can use for outbound communication
    body: 'Build, Test and Deploy code faster with Distelli.com - Chris Mosetick' // body of the SMS message

}, function(err, responseData) { //this function is executed when a response is received from Twilio

    if (!err) { // "err" is an error received during the request, if any

        // "responseData" is a JavaScript object containing data received from Twilio.
        // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
        // http://www.twilio.com/docs/api/rest/sending-sms#example-1

        console.log(responseData.from); // outputs "+12068499088"
        console.log(responseData.body); // outputs "word to your mother."

    }
});
