$(document).ready(function() {
    $('#titleWeb').text(CONFIG.titleWeb)
    $('body').css('background-image', 'url(./assets/imagescute/' + CONFIG.background + ')')

    for (let i = 1; i <= 6; i++)
        $('#min' + i).css('background-image', 'url(./assets/imagescute/' + CONFIG['min' + i] + ')')

    for (let i = 1; i <= 6; i++)
        $('#max' + i).css('background-image', 'url(./assets/imagescute/' + CONFIG['max' + i] + ')')
})