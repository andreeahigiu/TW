<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="shortcut icon" href="#">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/charts.css">
    <link rel="shortcut icon" href="#">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.2/dist/chart.min.js"></script>
    <script src="script.js" defer></script>

    <title>UnWe</title>
</head>

<body>
    <header class="sticky-header">
        <img src="assets/logo.png" class="logo-header" alt="logo">
        <a href="index.html">
            <img src="assets/home-btn.png" class="home-btn" alt="home-btn">
        </a>

    </header>

    <div class="back-btn">
        <a href="index.html">
            <img src="assets/back.png" alt="back">
        </a>
    </div>

    <main>
        <section class="searched-items">
            <div class="searched-items--first">
                <div class="searched-items-line">
                    <div class="searched-items--first--first">
                        <h4>Județ1:</h4>
                        <!--php cu get(ce s-a pus la judet)-->
                        <?php
                            if(isset($_GET["Judet"])) {
                                echo "<p>"  . $_GET["Judet"] . "</p>";
                            }
                        ?>
                    </div>
                    <div class="searched-items--first--second">
                        <h4>Perioada1:</h4>
                        <!--php cu get(ce s-a pus la perioada)-->
                        <?php
                            if(isset($_GET["perioada"])) {
                                echo "<p>"  . $_GET["perioada"] . "</p>";
                            }
                        ?>
                    </div>
                </div>
                <?php
                if(isset($_GET["Judet2"]) || isset($_GET["perioada2"])){
                    echo "
                    <div class='searched-items-line'> <div class='searched-items--first--third'> <h4>Județ2:</h4> ";
                                if(isset($_GET["Judet2"])) {
                                    echo "<p>"  . $_GET["Judet2"] . "</p>";
                                }
                        echo "</div> <div class='searched-items--first--fourth'> <h4>Perioada2:</h4> ";
                            if(isset($_GET["perioada2"])) {
                                 echo "<p>"  . $_GET["perioada2"] . "</p>";
                            }
                        echo "</div> </div>";
                }
                ?>             
            </div>
            <div class="searched-items--second">
                <h4> Filtre: </h4>
                <div class="searched-items--filters">
                    <div class="age-group">
                        <img src="assets/person.png" alt="person">
                        <p>Grupe de vârstă</p>
                    </div>
                    <div class="gender-group">
                        <img src="assets/gender.png" alt="gender">
                        <p>Gen</p>
                    </div>
                    <div class="education-group">
                        <img src="assets/education.png" alt="education">
                        <p>Nivel de educație</p>
                    </div>
                    <div class="residence-group">
                        <img src="assets/residence.png" alt="residence">
                        <p>Medii de rezidență</p>
                    </div>
                    <div class="income-group">
                        <img src="assets/income.png" alt="income">
                        <p>Tip de indemnizare</p>
                    </div>
                </div>
            </div>
        </section>


        <section class="data-charts">
            <ul class="tabs">
                <li data-tab-target="#chart1" class="active tab"> chart1 </li>
                <li data-tab-target="#chart2" class="tab"> chart2 </li>
                <li data-tab-target="#chart3" class="tab"> chart3 </li>
            </ul>

            <div class="tab-content">
                <div id="chart1" data-tab-content class="active">
                    <canvas id="myChart" width="400" height="300"></canvas>
                </div>
                <div id="chart2" data-tab-content>
                    <canvas id="secondChart" width="400" height="300"></canvas>
                </div>
                <div id="chart3" data-tab-content>
                    <p>This is the chart3</p>
                    <canvas id="thirdChart" width="400" height="300"></canvas>
                </div>
            </div>
        </section>

        <div class="save-chart">
            <div class="save-btn" onclick="showDiv()">
                <p>Salvează</p>
                <img src="assets/save.png" alt="save">
            </div>

            <div class="save-options" style="display:none;" id="save--options">
                <div class="save-SVG">
                    <p>SVG</p>
                </div>
                <div class="save-CSV">
                    <p>CSV</p>
                </div>
                <div class="save-PDF">
                    <p>PDF</p>
                </div>
            </div>
        </div>

        
    </main>

    <footer>
        <img src="assets/logo.png" class="logo-footer" alt="logo">
        <section class="contact">
            <h3>Contact</h3>
            <div class="contact-person">
                <p>Higiu Andreea</p>
                <address>higiuandreea@gmail.com</address>
            </div>
            <div class="contact-person">
                <p>Țîflea Denisa-Ionela</p>
                <address>tifleadenisa@gmail.com</address>
            </div>
        </section>
        <section class="documentatie">
            <a href="documentation.html">
                <img src="assets/hyperlink.svg" alt="hyperlink" height="15" width="15">
                <h3>Documentație</h3>
            </a>
            <p>
                Această aplicație constituie proiectul de la materia Tehnologii Web.
            </p>
            <a href=" https://www.info.uaic.ro/ ">
                <img src="assets/hyperlink.svg" alt="hyperlink" height="15" width="15"> Facultatea de informatică Iași
            </a>
        </section>
    </footer>
</body>

</html>