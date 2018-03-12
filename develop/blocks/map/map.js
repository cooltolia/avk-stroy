;(function(){
    var zoom = 15;
    var adress = [59.91463756420445, 30.4163985];

    ymaps.ready(function () {
        var myMap;
        
        ymaps.geocode(adress).then(function (res) {
            myMap = new ymaps.Map('map', {
                center: res.geoObjects.get(0).geometry.getCoordinates(),
                zoom: zoom
            });
            var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Октябрьская набережная, 6В',
                //balloonContent: 'Это красивая метка'
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
            myMap.behaviors.disable('scrollZoom');
        });

    });
})();