/* global _ */
(function () {
    
    var products;
    
    $.ajax('data/product.json')
        .done(function (result, status, request) {
            products = result;
            console.log(products);
            init();
        })
        .fail(function (request, status, error) {
            console.log(status + ": " + error);
        });
        
    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
    function init() {

        var $ul = $('<ul>').attr('id', 'products');

        var $lis = _.map(products, function(p) {

            var $li = $('<li>');

            var $id = $('<p>').text('ID: ' + p.id);
            var $type = $('<p>').text('Type: ' + p.type);
            var $image = $('<img>').attr('src', "img/product/thumbs/" + p.image);
            var $desc = $('<p>').text('Description: ' + p.desc);
            var $price = $('<p>').text('Price: ' + p.price);
            var $color = $('<p>').text('Color: ' + p.color);
            var $availableColors = $('<p>').text('Available Colors: ' + p.availableColors);
            var $specs = $('<p>').text('Specifications: ' + p.specs);           
            var $stock = $('<p>').text('Stock: ' + p.stock);             
            
            $li.append([$id, $type, $image, $desc, $price, $color, $availableColors, $specs, $stock]);

            return $li;

        });

        $ul.append($lis);

        $('body').append($ul);       
        
    }
    
})();