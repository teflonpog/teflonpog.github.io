$(function() {
  var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

  // Code goes here!
// Exercise 1 : Avengers Assemble!

// Write and call a function that expects an array as an argument. Within this function, append a <ul> to the DOM with the ID avengers.
// Next, still within this function, write a loop that creates an <li> and appends it to the ul for each item in the array. For each item, add a class corresponding to the item's content. For example, the first item in the array should have an element that looks like <li class="iron-man">Iron Man</li>.

// Hint

// .split(), .join(), .toLowerCase() and .replace() are some useful functions you might investigate.

    function createAvenger(avenger) {
        var $li = $('<li>')
          .text(avenger);
          
        var kebab = avenger.toLocaleLowerCase().replace(" ", "-");
        $li.addClass(kebab);
        
        return $li;       
        
    }

    function createAvengers (avengers) {
        
      var $avengers = $('<ul>')
        .attr("id", "avengers");
        
      var $listItems = avengers.map(createAvenger);
        
      $avengers.append($listItems);
        
      $('body').append($avengers);
      
      $listItems.forEach(function($li, i) {
          $li
            .hide()
            .delay(i * 200)
            .fadeIn();
      });
        
    }
    //createAvengers(avengers);
    
    
// Exercise 2: Avengers Reassemble!
// Write and call a new function that removes the <li>s for Ant Man and Wasp, and adds an <li> for Captain America.

    function avengersReassemble() {
      var $avengers = $('#avengers');
      
      $('.ant-man, .wasp', $avengers).remove();
      
      var $captAmerica = createAvenger("Captain America");
    //   $('<li>')
    //     .addClass('captain-america')
    //     .text('Captain America');
        
        
        $avengers.append($captAmerica);
        
        $avengers.children().each(function(i, li) {
            $(li)
               .hide()
               .delay(i * 200)
               .fadeIn();
        });
        
        // $captAmerica
        //     .hide()
        //     .delay(($avengers.children().length - 1) * 200)
        //     .fadeIn();
    }
    //avengersReassemble();
    $('.avengers-assemble').on('click', function(event) {
        createAvengers(avengers);
    });
    $('.avengers-reassemble').on('click', function(event) {
        avengersReassemble(avengers);
    });
});