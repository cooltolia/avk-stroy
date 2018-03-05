$('.objects-list__more').click(function (e) {
    e.preventDefault();
    var $this = $(this);
    
    var images = $this.siblings('.all-images').children('.fancybox')
    
    $.fancybox.open(images, {
        arrows: true,
        toolbar: false,
    }) 
    return false;
})
