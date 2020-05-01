$(document).ready(function () {
    $("#introModal").modal("show");
});

$(document).ready(function () {
    var d = new Date();
    $.ajax({
        url: "https://kawalcovid19.harippe.id/api/summary",
        success: function (result) {
            $("#kasus").html(result.confirmed.value);
            $("#sembuh").html(result.recovered.value);
            $("#perawatan").html(result.activeCare.value);
            $("#meninggal").html(result.deaths.value);
            $("#date").html(result.metadata.lastUpdatedAt);
        }
    });
});

$.ajax({
        method: "GET",
        url: "https://api.kawalcorona.com/positif/",
        dataType: "json"
    })
    .done(result => {
        const data = result
        // console.log("dataGlobalPositif", data)

        let htmlPosi = `
      <p class="card-title text-center text-white"><strong>${data.name}</strong></p>
      <p class="card-text h4 text-center text-white">${data.value} orang</p>`

        $("#global-positif").html(htmlPosi)
    })

$.ajax({
        method: "GET",
        url: "https://api.kawalcorona.com/sembuh/",
        dataType: "json"
    })
    .done(result => {
        const data = result
        // console.log("dataGlobalSembuh", data)

        let htmlSem = `
          <p class="card-title text-center text-white"><strong>${data.name}</strong></p>
          <p class="card-text h4 text-center text-white">${data.value} orang</p>`

        $("#global-sembuh").html(htmlSem)
    })

$.ajax({
        method: "GET",
        url: "https://api.kawalcorona.com/meninggal/",
        dataType: "json"
    })
    .done(result => {
        // console.log("dataGlobalMeninggal", result)

        let htmlMen = `
          <p class="card-title text-center text-white"><strong>${result.name}</strong></p>
          <p class="card-text h4 text-center text-white">${result.value} orang</p>`

        $("#global-meninggal").html(htmlMen);
    })

function globalCovid() {
    $.getJSON('https://api.kawalcorona.com/', function (data) {
        $.each(data, function (i, data) {
            $('#global-covid').append('<tr><td>' + data.attributes.Country_Region + '</td><td class="text-center">' + data.attributes.Confirmed + '</td><td class="text-center">' + data.attributes.Recovered + '</td><td class="text-center">' + data.attributes.Deaths + '</td></tr>');
        });
    });
}
globalCovid();

$.ajax({
        method: "GET",
        url: "https://api.kawalcorona.com/indonesia/",
        dataType: "json"
    })
    .done(result => {
        const data = result[0];
        let indoMeni = `
          <p class="card-title text-center text-white"><strong>Total Meninggal</strong></p>
          <p class="card-text h5 text-center text-white">${data.meninggal} orang</p>
          `

        let indoPositif = `
          <p class="card-title text-center text-white"><strong>Total Positif</strong></p>
          <p class="card-text h5 text-center text-white">${data.positif} orang</p>
          `

        let indoSembuh = `
          <p class="card-title text-center text-white"><strong>Total Sembuh</strong></p>
          <p class="card-text h5 text-center text-white">${data.sembuh} orang</p>
          `

        $('#indonesia-total-meninggal').html(indoMeni)
        $('#indonesia-total-sembuh').html(indoSembuh)
        $('#indonesia-total-positif').html(indoPositif)
    })

function tampilkanCovid() {
    $.getJSON('https://api.kawalcorona.com/indonesia/provinsi/', function (data) {
        $.each(data, function (i, data) {
            $('#list-covid').append('<tr><td>' + data.attributes.Provinsi + '</td><td class="text-center">' + data.attributes.Kasus_Posi + '</td><td class="text-center">' + data.attributes.Kasus_Semb + '</td><td class="text-center">' + data.attributes.Kasus_Meni + '</td></tr>');
        });
    });
}
tampilkanCovid();

var covid = document.getElementById('covid');
var typewriter = new Typewriter(covid, {
    strings: ['COVID-19'],
    autoStart: true,
    loop: true,
});