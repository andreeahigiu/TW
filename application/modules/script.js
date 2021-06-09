const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

window.onload = function() {
    var users = JSON.parse(sessionStorage.getItem("users"));
    console.log(users);
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active')
    })
})


function showDiv() {
    var x = document.getElementById('save--options');
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

var chart1 = document.getElementById('myChart');
console.log(chart1);
var myChart = new Chart(chart1, {
    type: 'bar',
    data: {
        labels: ['Arad', 'Iași', 'Cluj', 'Oradea', 'Bacău', 'Alba', 'Arad', 'Argeș', 'Bacău', 'Bihor', 'Bistrița Năsăud', 'Botoșani',
            'Brăila', 'Brașov', 'Buzău', 'Călărași', 'Caraș-Severin', 'Cluj', 'Constanța', 'Covasna', 'Dâmbovița', 'Dolj', 'Galați', 'Giurgiu',
            'Gorj', 'Harghita', 'Hunedoara', 'Ialomița', 'Iași', 'Ilfov', 'Maramureș', 'Mehedinti', 'București', 'Mureș', 'Neamț', 'Olt', 'Prahova',
            'Sălaj', 'Satu Mare', 'Sibiu', 'Suceava', 'Teleorman', 'Timiș', 'Tulcea', 'Vâlcea', 'Vaslui', 'Vrancea'
        ],
        datasets: [{
            label: 'Rata somajului pe tpate județele',
            data: [20, 15, 12, 50, 41, 12, 33, 24, 14, 66, 23, 14, 25, 66, 87, 12, 34, 22, 12, 3, 10, 12, 56, 1, 3, 8, 13, 43, 77, 87, 23, 43, 65, 78, 15, 65, 9, 33, 65, 72, 44, 51, 62],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const chart = document.getElementById("secondChart");
console.log(chart);
let lineChart = new Chart(chart, {
    type: 'line',
    data: {
        labels: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai"],
        datasets: [{
            label: ["Rata șomajului feminină"],
            fill: false,
            lineTension: 0.1,
            data: [65, 59, 80, 81, 56],
            fill: false,
            borderColor: 'rgb(175, 48, 184)',
        }, {
            label: ["Rata șomajului masculină"],
            fill: false,
            lineTension: 0.1,
            data: [77, 53, 18, 1, 66],
            fill: false,
            borderColor: 'rgb(85, 172, 192)',
        }, {
            label: "Șomeri îndemnizați",
            fill: false,
            lineTension: 0.1,
            data: [77, 83, 8, 17, 36],
            fill: false,
            borderColor: 'rgb(225, 136, 55)',
        }, {
            label: "Șomeri neîndemnizați",
            fill: false,
            lineTension: 0.1,
            data: [19, 8, 22, 33, 66],
            fill: false,
            borderColor: 'rgb(85, 138, 68)',
        }]
    }
});