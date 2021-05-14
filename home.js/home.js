'use strict';

const open = document.getElementById('open');
const close = document.getElementById('close');

const menu = document.getElementById('menu');
const cover = document.getElementById('cover');

open.addEventListener('mouseover', () =>{
     menu.className = 'menu-open';
     cover.className = 'menu-open';
 });

 close.addEventListener('mouseleave', () =>{
     menu.className = '';
     cover.className = '';

 });

//  open.addEventListener('click', () =>{
//      menu.className = 'menu-open';
//      cover.className = 'menu-open';
//  });

//  close.addEventListener('click', () =>{
//      menu.className = '';
//      cover.className = '';

//  });
