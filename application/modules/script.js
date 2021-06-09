const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')
var county1;
var county2;
var period1;
var period2;

var month1;
var year1;
var month2;
var year2;
var filter;

//The way to get variables from php to this js
function getVarFromPhp(){
    

    county1 = document.getElementById("county1").value;
    county2 = document.getElementById("county2").value;
    period1 = document.getElementById("period1").value;
    period2 = document.getElementById("period2").value;
    filter = document.getElementById("filter").value;

    var p1 = period1.split(" ");
    var p2 = period2.split(" ");

    month1 = p1[0];
    year1 = p1[1];

    month2 = p2[0];
    year2 = p2[1];

    var months = ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "Noiembrie", "Decembrie"];
    for(i=1; i <= months.length; i++){
        if(month1 === months[i-1])
            month1 = i;
        if(month2 === months[i-1])
            month2 = i;

    }

    console.log("this are the vars: " + county1 + "..." + county2 + "..." + period1 + "..." + period2 + "..." + filter);

}

window.onload = async function methodCalls(){
    //method for assigning teh variables
    getVarFromPhp();

    //method for calling the api
   getData1();
   getData2();

   checking();
}

async function getData1(){
    // let url = 'http://localhost:5000/details/environment/iasi/1/2021';

    let url = 'http://localhost:5000/details/' + filter + '/' + county1 + '/' + month1 +'/' + year1;

    console.log("url1 composed of: " + filter + '/' + county1 + '/' + month1 +'/' + year1);
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
        
    });
    

    let data1 = await response.json();

    console.log(data1);

    // calling some functions


    return data1;
}

async function getData2(){
    // let url = 'http://localhost:5000/details/environment/iasi/1/2021';
    let url = 'http://localhost:5000/details/' + filter + '/' + county2 + '/' + month2 + '/' + year2;

    console.log("url2 composed of: " + filter + '/' + county2 + '/' + month2 +'/' + year2);
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }
        
    });
    let data2 = await response.json();
    console.log( data2);

    // calling some functions


    return data2;
}

function checking() {
    console.log("just checking " + county2);
}

//intr-un async : var result = await getData();
// !verificam daca mi-a dat rezultatul: cu console sau !=null


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