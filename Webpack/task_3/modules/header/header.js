import './header.css';
import $ from "jquery";

$(() => {
  $('body').prepend('<h1>Holberton Dashboard</h1>');
  $('body').prepend("<div id='logo'></div>");

  console.log('Init header');
})
