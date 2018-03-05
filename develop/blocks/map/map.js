/* ;(function(){
    var zoom = 17;

    if ( $(window).width() < 480 ) {
        zoom = 16;
    }

    var adress;
    adress = [59.9315411964636, 30.351687840589967];

    ymaps.ready(function () {
        var myMap;
        var pointA = "Санкт-Петербург, метро Маяковская",
            pointB = adress,
            multiRoute = new ymaps.multiRouter.MultiRoute({
                referencePoints: [
                    pointA,
                    pointB
                ],
                params: {
                    //Тип маршрутизации - пешеходная маршрутизация.
                    routingMode: 'pedestrian',
                },
            }, {
                    // Автоматически устанавливать границы карты так, чтобы маршрут был виден целиком.
                    //boundsAutoApply: true
                    wayPointIconLayout: "none",
                    routeActivePedestrianSegmentStrokeStyle: "solid",
                    routeActivePedestrianSegmentStrokeColor: "#ff0000"
                });
        ymaps.geocode(adress).then(function (res) {
            myMap = new ymaps.Map('map', {
                center: res.geoObjects.get(0).geometry.getCoordinates(),
                zoom: zoom
            });
            var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#image',
                    // Своё изображение иконки метки.
                    iconImageHref: '../images/map-icon.png',
                    // Размеры метки.
                    iconImageSize: [30, 30],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-15, -30]
                });

            myMap.geoObjects.add(myPlacemark);
            myMap.geoObjects.add(multiRoute);
            myMap.behaviors.disable('scrollZoom');
        });

    });
})(); */