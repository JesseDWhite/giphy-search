import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function () {
    $('form#giphy').submit(function (event) {
        event.preventDefault();
        const search = $(".displayGiphy").val();

        let request = new XMLHttpRequest();
        const url = `https://api.giphy.com/v1/gifs/search?api_key=9pAbu98pQ7GwDQtjPDXSvpNZ6ytaidRY&q=${search}&limit=25&offset=0&rating=g&lang=en${process.env.API_KEY}`;

        request.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                const response = JSON.parse(this.responseText);
                getElements(response);
            }
        };

        request.open("GET", url, true);
        request.send();


        function getElements(response) {
            $('.display').html(`${response.data[0].original}`);
        }
    });
});