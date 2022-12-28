'use strict';

const markRead = document.querySelector('.mark-read');
const unread = document.querySelectorAll('.unread-indicator');
let unreadNum = document.querySelectorAll('.unread-indicator').length;
const unreadNotification = document.querySelectorAll('.unread-notification');

document.querySelector('.unread-number').textContent = unreadNum

markRead.addEventListener('click', () => {
   for (let el of unread) {
      el.style.display = 'none'
   }
   for (let el of unreadNotification) {
      el.classList.remove('unread-notification')
   }
   unreadNum = 0
   document.querySelector('.unread-number').textContent = unreadNum
})


