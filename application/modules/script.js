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

var data1;
var data2;

var ageFields = ["after55", "between25and29", "between30and39", "between40and49", "between50and55", "under25" ];
var compensationFields = ["withcompensation", "withoutcompensation"];
var environmentFields = ["menrural", "menurban", "totalurban", "womenrural", "womenurban"];
var genderFields = ["men", "women"];
var studiesFields = ["highschool", "middleschool", "postsecondary", "primaryschool", "university", "vocational", "withoutschool"];

var val1 = [];
var val2 = [];

var ageVal1 = [];
var compensationVal1 = [];
var environmentVal1 = [];
var genderVal1 = [];
var studiesVal1 = [];

var ageVal2 = [];
var compensationVal2 = [];
var environmentVal2 = [];
var genderVal2 = [];
var studiesVal2 = [];

var countyPeriod1;
var countyPeriod2;



//The way to get variables from php to this js
function getVarFromPhp() {


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
    for (i = 1; i <= months.length; i++) {
        if (month1 === months[i - 1])
            month1 = i;
        if (month2 === months[i - 1])
            month2 = i;

    }

    console.log("this are the vars: " + county1 + "..." + county2 + "..." + period1 + "..." + period2 + "..." + filter);

}

window.onload = async function methodCalls() {
    //method for assigning teh variables
    getVarFromPhp();

    //method for calling the api
    getData1();
    getData2();

    displayChart();

    displayDivDemo(filter);
}


var test;

async function getData1() {
    // let url = 'http://localhost:5000/details/environment/iasi/1/2021';

    let url = 'http://localhost:5000/details/' + filter + '/' + county1 + '/' + month1 + '/' + year1;

    console.log("url1 composed of: " + filter + '/' + county1 + '/' + month1 + '/' + year1);
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }

    });


    data1 = await response.json();

    console.log(data1);
    console.log("this is the JSON: " + data1["rows"][0]["after55"]);

    return data1;
}

async function getData2() {
    // let url = 'http://localhost:5000/details/environment/iasi/1/2021';
    let url = 'http://localhost:5000/details/' + filter + '/' + county2 + '/' + month2 + '/' + year2;

    console.log("url2 composed of: " + filter + '/' + county2 + '/' + month2 + '/' + year2);
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        headers: {
            'Content-Type': 'application/json'
        }

    });
    data2 = await response.json();
    console.log(data2);

    return data2;
}




//intr-un async : var result = await getData();
// !verificam daca mi-a dat rezultatul: cu console sau !=null

function displayDivDemo(id) {
    document.getElementById(id).style.display = 'flex';
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


async function displayChart(){
    // data1["rows"][0]["after55"]
    var request1 = await getData1();
    var request2 = await getData2();
    var fields = [];

    console.log("ohno " + request1);
    console.log("ohno " + request1["rows"][0]["after55"]);


    if(filter === "age")
    {
        for(i = 0; i < ageFields.length; i++){
            val1.push(request1["rows"][0][ageFields[i]]);
            fields = ageFields;
        }
    }else if (filter == "compensation"){
        for(i = 0; i < compensationFields.length; i++){
            val1.push(request1["rows"][0][compensationFields[i]]);
            fields = compensationFields;
        }
    }else if (filter == "gender"){
        for(i = 0; i < genderFields.length; i++){
            val1.push(request1["rows"][0][genderFields[i]]);
            fields = genderFields;
        }
    }else if (filter == "studies"){
        for(i = 0; i < studiesFields.length; i++){
            val1.push(request1["rows"][0][studiesFields[i]]);
            fields = studiesFields;
        }
    }else if (filter == "environment"){
        for(i = 0; i < environmentFields.length; i++){
            val1.push(request1["rows"][0][environmentFields[i]]);
            fields = environmentFields;
        }
    }

    if(county2 == 'unset'){
        val2.push(0);
    }
    else
    if(filter === "age")
    {
        for(i = 0; i < ageFields.length; i++){
            val2.push(request2["rows"][0][ageFields[i]]);
            fields = ageFields;
        }
    }else if (filter == "compensation"){
        for(i = 0; i < compensationFields.length; i++){
            val2.push(request2["rows"][0][compensationFields[i]]);
            fields = compensationFields;
        }
    }else if (filter == "gender"){
        for(i = 0; i < genderFields.length; i++){
            val2.push(request2["rows"][0][genderFields[i]]);
            fields = genderFields;
        }
    }else if (filter == "studies"){
        for(i = 0; i < studiesFields.length; i++){
            val2.push(request2["rows"][0][studiesFields[i]]);
            fields = studiesFields;
        }
    }else if (filter == "environment"){
        for(i = 0; i < environmentFields.length; i++){
            val2.push(request2["rows"][0][environmentFields[i]]);
            fields = environmentFields;
        }
    }

    console.log("The first fields are as follows " + val1);
    console.log("The second fields are as follows " + val2);
  


    //displaying the Chart for the values extracted from the API

var chart1 = document.getElementById('myChart');
console.log(chart1);
var myChart = new Chart(chart1, {
    type: 'bar',
    data: {
        labels: fields,
        datasets: [{
            label: 'Rata somajului pe tpate județele',
            //data: [20, 15, 12, 50, 41, 12, 33, 24, 14, 66, 23, 14, 25, 66, 87, 12, 34, 22, 12, 3, 10, 12, 56, 1, 3, 8, 13, 43, 77, 87, 23, 43, 65, 78, 15, 65, 9, 33, 65, 72, 44, 51, 62],
            data: getRowsForData1(),
            label: county1 + '-' + period1,
            data: val1,
            backgroundColor: [
                'rgba(100, 96, 170, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)'

            ],
            borderWidth: 1
        },
        {
            label: county2 + '-' + period2,
            data: val2,
            backgroundColor: [
                'rgba(255, 99, 136, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
              position: 'top',
            },
            title: {
              display: true,
              verticalAlign: "center",
              text: 'Diagrama 1'
            }
          }
    }
});

var labelChart2=[];
labelChart2.push(county1+'-'+period1);
labelChart2.push(county2+'-'+period2);

const chart2 = document.getElementById("secondChart");
console.log(chart2);
let pieChart = new Chart(chart2, {
    type: 'pie',
    // title:{
    //     display:true,
    //     text: "Title on bottom left",
    //     verticalAlign: "center",
    //     horizontalAlign: "center",
    //   },
    data: {
        labels: fields,
        datasets: [
          {
            label: county1,
            data: val1,
            backgroundColor: ['rgba(228, 98, 62, 1)',  'rgba(181, 62, 228, 1)', 'rgba(104, 242, 182, 1)', 'rgba(104, 233, 242, 1)', 'rgba(134, 116, 235, 1)', 'rgba(242, 47, 112, 1)', 'rgba(245, 245, 111, 1)'],
          },
          {
            label: county2,
            data: val2,
            backgroundColor: ['rgba(228, 98, 62, 1)',  'rgba(181, 62, 228, 1)', 'rgba(104, 242, 182, 1)', 'rgba(104, 233, 242, 1)', 'rgba(134, 116, 235, 1)', 'rgba(242, 47, 112, 1)', 'rgba(245, 245, 111, 1)'],
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            verticalAlign: "center",
            text: 'Diagrama 2'
          }
        }
      },
      
    //   options: {
    //     plugins: {
    //         plugins: {
    //             datalabels: {
    //               display: true,
    //               backgroundColor: '#ccc',
    //               borderRadius: 3,
    //               font: {
    //                 color: 'red',
    //                 weight: 'bold',
    //               }
    //             },
    //             doughnutlabel: {
    //               labels: [{
    //                 text: '550',
    //                 font: {
    //                   size: 20,
    //                   weight: 'bold'
    //                 }
    //               }, {
    //                 text: 'total'
    //               }]
    //             }
    //           }
    //         }
    //     }
});

const chart3 = document.getElementById("thirdChart");
//console.log(chart3);
let lineChart = new Chart(chart3, {
    type: 'bar',
    data: {
        labels: fields,
        datasets: [{
            label: county1 + '-' + period1,
            data: val1,
            backgroundColor: [
                'rgba(228, 98, 62, 1)'
            ],
            borderColor: [
                'rgba(228, 98, 62, 1)'

            ],
            borderWidth: 1
        },
        {
            label: county2 + '-' + period2,
            data: val2,
            backgroundColor: [
                'rgba(181, 62, 228, 1)'
            ],
            borderColor: [
                'rgba(181, 62, 228, 1)'
            ],
            borderWidth: 1
        }]
    }
});

function getRowsForData1() {

    if (filter == 'age') {
        const rows = [
            [county1, month1 + "-" + year1, "after55", data1["rows"][0]["after55"]],
            [county1, month1 + "-" + year1, "between25and29", data1["rows"][0]["between25and29"]],
            [county1, month1 + "-" + year1, "between30and39", data1["rows"][0]["between30and39"]],
            [county1, month1 + "-" + year1, "between40and49", data1["rows"][0]["between40and49"]],
            [county1, month1 + "-" + year1, "between50and55", data1["rows"][0]["between50and55"]],
            [county1, month1 + "-" + year1, "under25", data1["rows"][0]["under25"]]
        ];
        return rows;
    } else if (filter == 'gender') {
        const rows = [
            [county1, month1 + "-" + year1, "men", data1["rows"][0]["men"]],
            [county1, month1 + "-" + year1, "women", data1["rows"][0]["women"]]
        ];
        return rows;
    } else if (filter == 'studies') {
        const rows = [
            [county1, month1 + "-" + year1, "highschool", data1["rows"][0]["highschool"]],
            [county1, month1 + "-" + year1, "middleschool", data1["rows"][0]["middleschool"]],
            [county1, month1 + "-" + year1, "postsecondary", data1["rows"][0]["postsecondary"]],
            [county1, month1 + "-" + year1, "primaryschool", data1["rows"][0]["primaryschool"]],
            [county1, month1 + "-" + year1, "university", data1["rows"][0]["university"]],
            [county1, month1 + "-" + year1, "vocational", data1["rows"][0]["vocational"]],
            [county1, month1 + "-" + year1, "withoutschool", data1["rows"][0]["withoutschool"]]
        ];
        return rows;
    } else if (filter == 'environment') {
        const rows = [
            [county1, month1 + "-" + year1, "menrural", data1["rows"][0]["menrural"]],
            [county1, month1 + "-" + year1, "womenrural", data1["rows"][0]["womenrural"]],
            [county1, month1 + "-" + year1, "totalrural", data1["rows"][0]["totalrural"]],
            [county1, month1 + "-" + year1, "menurban", data1["rows"][0]["menurban"]],
            [county1, month1 + "-" + year1, "womenurban", data1["rows"][0]["womenurban"]],
            [county1, month1 + "-" + year1, "totalurban", data1["rows"][0]["totalurban"]]
        ];
        return rows;
    } else if (filter == 'compensation') {
        const rows = [
            [county1, month1 + "-" + year1, "withcompensation", data1["rows"][0]["withcompensation"]],
            [county1, month1 + "-" + year1, "withoutcompensation", data1["rows"][0]["withoutcompensation"]]
        ];
        return rows;
    }

}

function getRowsForData2() {
    if (filter == 'age') {
        const rows = [
            [county2, month2 + "-" + year2, "after55", data2["rows"][0]["after55"]],
            [county2, month2 + "-" + year2, "between25and29", data2["rows"][0]["between25and29"]],
            [county2, month2 + "-" + year2, "between30and39", data2["rows"][0]["between30and39"]],
            [county2, month2 + "-" + year2, "between40and49", data2["rows"][0]["between40and49"]],
            [county2, month2 + "-" + year2, "between50and55", data2["rows"][0]["between50and55"]],
            [county2, month2 + "-" + year2, "under25", data2["rows"][0]["under25"]]
        ];
        return rows;
    } else if (filter == 'gender') {
        const rows = [
            [county2, month2 + "-" + year2, "men", data2["rows"][0]["men"]],
            [county2, month2 + "-" + year2, "women", data2["rows"][0]["women"]]
        ];
        return rows;
    } else if (filter == 'studies') {
        const rows = [
            [county2, month2 + "-" + year2, "highschool", data2["rows"][0]["highschool"]],
            [county2, month2 + "-" + year2, "middleschool", data2["rows"][0]["middleschool"]],
            [county2, month2 + "-" + year2, "postsecondary", data2["rows"][0]["postsecondary"]],
            [county2, month2 + "-" + year2, "primaryschool", data2["rows"][0]["primaryschool"]],
            [county2, month2 + "-" + year2, "university", data2["rows"][0]["university"]],
            [county2, month2 + "-" + year2, "vocational", data2["rows"][0]["vocational"]],
            [county2, month2 + "-" + year2, "withoutschool", data2["rows"][0]["withoutschool"]]
        ];
        return rows;
    } else if (filter == 'environment') {
        const rows = [
            [county2, month2 + "-" + year2, "menrural", data2["rows"][0]["menrural"]],
            [county2, month2 + "-" + year2, "womenrural", data2["rows"][0]["womenrural"]],
            [county2, month2 + "-" + year2, "totalrural", data2["rows"][0]["totalrural"]],
            [county2, month2 + "-" + year2, "menurban", data2["rows"][0]["menurban"]],
            [county2, month2 + "-" + year2, "womenurban", data2["rows"][0]["womenurban"]],
            [county2, month2 + "-" + year2, "totalurban", data2["rows"][0]["totalurban"]]
        ];
        return rows;
    } else if (filter == 'compensation') {
        const rows = [
            [county2, month2 + "-" + year2, "withcompensation", data2["rows"][0]["withcompensation"]],
            [county2, month2 + "-" + year2, "withoutcompensation", data2["rows"][0]["withoutcompensation"]]
        ];
        return rows;
    }

}

function exportToCsv() {
    var rows;
    if (data1 != 'undefined' && JSON.stringify(data2) != "\{\"message\":\"Statistic Not Found\"\}") {
        console.log("Data2 is: " + JSON.stringify(data2));
        rows = getRowsForData1().concat(getRowsForData2());
    } else if (data1 != null) {
        rows = getRowsForData1();
    }
    var processRow = function(row) {
        var finalVal = '';
        for (var j = 0; j < row.length; j++) {
            var innerValue = row[j] === null ? '' : row[j].toString();
            if (row[j] instanceof Date) {
                innerValue = row[j].toLocaleString();
            };
            var result = innerValue.replace(/"/g, '""');
            if (result.search(/("|,|\n)/g) >= 0)
                result = '"' + result + '"';
            if (j > 0)
                finalVal += ',';
            finalVal += result;
        }
        return finalVal + '\n';
    };

    var csvFile = '';
    for (var i = 0; i < rows.length; i++) {
        csvFile += processRow(rows[i]);
    }

    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, "statisctics.csv");
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", "statisctics.csv");
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}

function exportToPdf() {
    var columns = ['County', 'Date', 'Category', 'Numbers'];
    var rows;
    if (data1 != 'undefined' && JSON.stringify(data2) != "\{\"message\":\"Statistic Not Found\"\}") {
        console.log("Data2 is: " + JSON.stringify(data2));
        rows = getRowsForData1().concat(getRowsForData2());
    } else if (data1 != null) {
        rows = getRowsForData1();
    }

    const doc = new jsPDF()
    console.log("1", rows);
    console.log("2", columns);
    doc.autoTable(columns, rows);
    doc.save('statistic.pdf');
};

document.getElementById("save-CSV").addEventListener('click', exportToCsv);
document.getElementById("save-PDF").addEventListener('click', exportToPdf);

    },
    options: {
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Diagrama 3'
          }
        }
      },
});

}

