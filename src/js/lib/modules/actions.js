import $ from '../core';

$.prototype.html = function(content) {
   for (let i = 0; i < this.length; i++) {
    if(content) {
        this[i].innerHTML = content;
    } else {
        return this[i].innerHTML;
    }
   }

   return this;
};

$.prototype.eq = function(i) { //найти элемент по номеру
    const swap = this[i];
    const objLength = Object.keys(this).length;

    for (let i=0; i < objLength; i++) {
        delete this[i];
    }

    this[0] = swap;
    this.length = 1;
    return this;
 };

 $.prototype.index = function() { //узнать какой номер по порядку
   
 };


 $.prototype.closest = function(selector) {
    let counter = 0;

    for (let i=0; i< this.length; i++) {
        this[i] = this[i].closest(selector);
        counter++;
    }

    const objLength = Object.keys(this).length;
    for (; counter < objLength; counter++) {
        delete this[counter];
    }

    return this;
 }
