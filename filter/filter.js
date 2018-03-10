const $search = $('.search');
const $a = $('a')

$search.keyup(function(event) {
  const value = $search.val().toLowerCase();
  $a.show();
  if (value !== '') {
    $a.not('[title*="' + value + '"]').hide();
  }
});
