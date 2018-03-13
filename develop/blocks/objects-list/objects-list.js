;(function () {

    var $container = $('.objects-list'),
        $link = $('.aside__link'),
        $trigger = $('.objects__link'); // переключатель объектовы выполненных/в работе
        

    $container.load("activeObjects-ajax.html #electrical-works", function() {

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

    $trigger.on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            type = $this.attr('data-href');

        if ($this.hasClass('active')) {
            console.log('Уже');
            return;
        };

        $trigger.removeClass('active');
        $this.addClass('active');

        var $activeLink = $link.filter('.active'),
            $anchor = $activeLink.attr('data-href');

        $container.load( type + "Objects-ajax.html " + $anchor, function () {

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

    $link.on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            $anchor = $this.attr('data-href'),
            $activeTrigger = $trigger.filter('.active'),
            type = $activeTrigger.attr('data-href');

        if ($this.hasClass('active')) {
            console.log('Уже');
            return;
        };

        $link.removeClass('active');
        $this.addClass('active');
        
        $container.load(type + "Objects-ajax.html " + $anchor, function() {

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
