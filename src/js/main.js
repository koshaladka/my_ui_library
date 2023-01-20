import './lib/lib';
import $ from './lib/lib';

$('button').click(function() {
    $(this).toggleClass('active');
});

console.log($('button').html());


