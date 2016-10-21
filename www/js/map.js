alert("Test");
    var div = document.getElementsById("map_canvas");
    alert(div);
    var map = plugin.google.maps.Map.getMap(div);
    alert(map);
    map.on(plugin.google.maps.event.MAP_READY, onMapReady);

function onMapReady(map) {
    // do nothing right now
}


