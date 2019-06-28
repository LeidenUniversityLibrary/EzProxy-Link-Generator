$(document).ready(function () {
    //NOTE Insert your institution's URL here. Usually something like https://ezproxy.someuniv.com:443/
    var ezProxy = "https://**INSERT_YOUR_EZPROXY_URL_HERE**/login?URL=";
    var doi = "http://dx.doi.org/";

    //SECTION  generate urls
    $('#doiBtn').on('click', function (event) {

        if ($('#insDoi').val() == '') {
            alert('Please insert the DOI'); }
            else {

                $('#doiUrl').val(ezProxy + doi + $('#insDoi').val());
            }
    });

    $('#permaBtn').on('click', function (event) {

        if ($('#insPerma').val() == '') {
            alert('Please insert the Permalink');
        } else {
            $('#permaUrl').val(ezProxy + $('#insPerma').val());
        }
    });

    //FIXME  refuse empty fields

    $('#insDoi').blur(function () {
        if (!this.value) {
            $(this).parents('p').addClass('warning');
        }
    });
});