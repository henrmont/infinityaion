/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import '../css/style.css';
import '../css/painel.css';
import '../css/buttons.css';
import '../css/forms.css';
import '../css/login.css';


// JS
import '../js/main.js';
import '../js/painel.js';

//Vendors
import '../vendor/font-awesome/css/font-awesome.min.css';

// Need jQuery or Bootstrap? Install it with "yarn add jquery", then uncomment to import it.
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

console.log('Hello Webpack Encore! Edit me in assets/js/app.js');