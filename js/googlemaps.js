function initMap() {
    var uluru = { lat: -32.03825676, lng: -52.08694419 };
    var map = new google.maps.Map(document.querySelector('#map'), {
        zoom: 13,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}