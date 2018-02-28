(function($){
  /* ---------набор функций--------------- */

  //автоувеличение ширины инпута
  function resizeInput() {
    var l =  $(this).val().length
    $(this).css('width', (l*16)+3);
  }
  //автоувеличение ширины инпута

  //получить ральный верхний левый угол обьекта в рекурсии
  var cumulativeOffset = function(element) {
    var top = 0, left = 0;
    do {
      top += element.offsetTop  || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
    } while(element);

    return {
      top: top,
      left: left
    };
  }; 
  //получить ральный верхний левый угол обьекта в рекурсии

  /* биндим контекст */
  function bind(func, context) { // первое перменная - функция, второе контекст
    return function() { // возвращаем анаонимную функцию, при ее вызове выоветься func.apply с уже имеющимя контекстом из переменной context
      return func.apply(context, arguments); //arguments любое кол во аргументов. такой вызов свяжет функцию с ранее переданным аргументом
    };
  }

  /* ---------ннабор функций---------н */



  $(document).ready(function(){
    $("body").removeClass("pageload");

    //scroll-to  - прокрутчик
    $(".scroll-to").click(function() {
      var id = $(this).attr("rel");
      var to = $("#"+id).offset().top-10;
      $('html, body').animate({
        scrollTop: to
      }, 500);
    });

    //f-ajax   - отправка форм
    $('.f-ajax').on('submit', function(event){
      event.preventDefault();
      var $form = $(this);

      var data = $form.serialize();
      data['token'] = "tnbm567sgfg4556sdfDSg";

      $.ajax({
        url: $form.attr("action"),
        type: 'POST',
        data: '',
        success: function(result) {
          if(result == "OK"){
            alert("Заявка отправлена!");       
          }
          else
            alert("Произошла ошибка!");
        },
        error: function (xhr, ajaxOptions, thrownError) {
          alert("Произошла ошибка!");
        }
      });
    });

    

    
    

    
    

    
    

    
    

    
    

    
    

    
    ;(function(){

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

    })();

    
    

    
    

    
    

    
    

    
    

    
    

    
    

    
    
  });

})(jQuery)