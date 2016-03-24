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
        
    function filterProducts(searchTerm) {
	    var filtered = _.filter(products, function(p) {
		    return searchObject(searchTerm, p);
	    });
	
	    createProducts(filtered);
	    
    }
    
    function searchObject(searchTerm, obj) {
        
        return _.reduce(obj, function(memo, val) {
            if (memo === true) return true;
            
            if (Array.isArray(val) || typeof val === 'object')
                return searchObject(searchTerm, val);
                
            if (typeof val !== 'string') return memo;
            
            return (val.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
        }, false);
        
    }
        
    function createProducts(products) {
        
        var $products = $('#products');
        $products.empty();

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

        $products.append($lis);

    }    
        

        
        
    function init() {
        
        createProducts(products);
        
        $('#search').on('keyup', function(e) {
            var term = $(e.target).val();
            
            if (term.length >= 3)
                filterProducts(term);
            else
                createProducts(products);
                
        });
        
    }
    
})();