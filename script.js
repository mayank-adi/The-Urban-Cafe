
let buttons = document.querySelectorAll('.filter-btn');


let items = document.querySelectorAll('.menu-item');

buttons.forEach(function(btn) {
  btn.addEventListener('click', function() {
    let category = btn.getAttribute('data-category');

    items.forEach(function(item) {
      let itemCategory = item.getAttribute('data-category');

      if (category === 'all') {
        item.style.display = 'block';
      } else {
        if (itemCategory === category) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
});
