function update() {

    $('#date').html(new Date().toLocaleString());

    $.get('https://api.thingspeak.com/channels/154597/feeds.json?results=1', function (data) {
        var entry = data.feeds[0];

        $('#title').html(data.channel.name);
        $('#lastUpdate').html(data.channel.updated_at);
        $('#temp').html(entry.field1);
        $('#humid').html(entry.field2);
        $('#press').html(entry.field3);
        $('#light').html(entry.field4);

        Thermometer.SonicGauge('val', parseFloat(entry.field1));
        Hygrometer.SonicGauge('val', parseFloat(entry.field2));
        Pressuremeter.SonicGauge('val', parseFloat(entry.field3));
        Lightmeter.SonicGauge('val', parseFloat(entry.field4));
    });

    $.get('https://gist.githubusercontent.com/raspikuku/51f792d4e3d07b21ad182e9ee178e9fb/raw', function (data) {
        $('#pic').attr('src', data + '&dl=1');
        $('#picLink').attr('href', data);
    });
}
update();
setInterval(update, 10000);
