;(function () {

    var $container = $('.objects-list'),
        $link = $('.aside__link');
        

    $container.load("objects-ajax.html #electrical-works", function() {

        $('.objects-list__more').click(function (e) {
            e.preventDefault();
            
            var $this = $(this);

            var images = $this.siblings('.all-images').children('.fancybox')

            $.fancybox.open(images, {
                arrows: true,
                toolbar: false,
            })
            return false;
        });

    });

    $link.on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            $anchor = $this.attr('data-href');

        if ($this.hasClass('active')) {
            console.log('Уже');
            return;
        };

        $link.removeClass('active');
        $this.addClass('active');
        
        $container.load("objects-ajax.html " + $anchor, function() {

            $('.objects-list__more').click(function (e) {
                e.preventDefault();

                var $this = $(this);

                var images = $this.siblings('.all-images').children('.fancybox')

                $.fancybox.open(images, {
                    arrows: true,
                    toolbar: false,
                })
                return false;

            });
        });
        


    });

})();
