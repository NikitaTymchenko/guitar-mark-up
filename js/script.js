// HAMBURGER MENU

const openHamburgerMenu = document.querySelector('.btn--open-menu');
const closeHamburgerMenu = document.querySelector('.btn--close-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const overlay = document.querySelector('.overlay');
const body = document.body;

openHamburgerMenu.addEventListener('click', function () {
	hamburgerMenu.classList.remove('hidden');
	overlay.classList.remove('hidden');
	body.classList.add('lock');
})

closeHamburgerMenu.addEventListener('click', function () {
	hamburgerMenu.classList.add('hidden');
	overlay.classList.add('hidden');
	body.classList.remove('lock');
})

overlay.addEventListener('click', function() {
	hamburgerMenu.classList.add('hidden');
	overlay.classList.add('hidden');
	body.classList.remove('lock');
})


// SPOILERS

// pages

const spoilerPagesTitle = document.querySelector('.pages__title');
const spoilerPagesContent = document.querySelector('.pages__links');

spoilerPagesTitle.addEventListener('click', function () {
	spoilerPagesContent.classList.toggle('hidden');
	spoilerPagesTitle.classList.toggle('spoiler-arrow--down');
	spoilerPagesTitle.classList.toggle('spoiler-arrow--up')
});

// product

const spoilerProductTitle = document.querySelector('.product__title');
const spoilerProductContent = document.querySelector('.product__links');

spoilerProductTitle.addEventListener('click', function () {
	spoilerProductContent.classList.toggle('hidden');
	spoilerProductTitle.classList.toggle('spoiler-arrow--down');
	spoilerProductTitle.classList.toggle('spoiler-arrow--up')
});