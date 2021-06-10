<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="shortcut icon" href="#">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles/charts.css">
    <link rel="shortcut icon" href="#">
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.22/pdfmake.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@3.0.2/dist/chart.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.3.4/jspdf.min.js"></script>
    <script src="modules/script.js" defer></script>
    <script src="node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.min.js"></script>


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
    
    <input type="hidden" id="myPhpValue" value="<?php $name = "Hello World";
                                                                echo $name; ?>" />                                                            
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
                        <!-- input pentru a parsa variabila judet1 catre script.js -->
                        <input type="hidden" id="county1" value="<?php
                            $county1 = "unset";
                            if(isset($_GET["Judet"])) {
                                $county1 = $_GET["Judet"];  
                            }
                            echo $county1;
                        ?>" />

                    </div>
                    <div class="searched-items--first--second">
                        <h4>Perioada1:</h4>
                        <!--php cu get(ce s-a pus la perioada)-->
                        <?php
                            if(isset($_GET["perioada"])) {
                                echo "<p>"  . $_GET["perioada"] . "</p>";
                            }
                        ?>

                        <!-- input pentru a parsa variabila perioada1 catre script.js -->
                        <input type="hidden" id="period1" value="<?php
                            $period1 = "unset";
                            if(isset($_GET["perioada"])) {
                                $period1 = $_GET["perioada"];  
                            }
                            echo $period1;
                        ?>" />

                        
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
                
                <!-- input pentru a parsa variabila judet2 catre script.js -->
                <input type="hidden" id="county2" value="<?php
                            $county2 = "unset";
                            if(isset($_GET["Judet2"])) {
                                $county2 = $_GET["Judet2"];  
                            }
                            echo $county2;
                        ?>" />

                <!-- input pentru a parsa variabila perioada2 catre script.js -->
                <input type="hidden" id="period2" value="<?php
                            $period2 = "unset";
                            if(isset($_GET["perioada2"])) {
                                $period2 = $_GET["perioada2"];  
                            }
                            echo $period2;
                        ?>" />

                 <!-- input pentru a parsa tipul de filtru catre script.js -->
                 <input type="hidden" id="filter" value="<?php
                            $filter = "unset";
                            if(isset($_GET["radioBox"])) {
                                $filter = $_GET["radioBox"];  
                            }
                            echo $filter;
                        ?>" />               
            </div>
            

            <div class="searched-items--second">
                <h4> Filtru: </h4>
                <div class="searched-items--filters">
                    <div class="age-group" id = "age">
                        <img src="assets/person.png" alt="person">
                        <p>Grupe de vârstă</p>
                    </div>
                    <div class="gender-group" id = "gender">
                        <img src="assets/gender.png" alt="gender">
                        <p>Gen</p>
                    </div>
                    <div class="education-group" id = "studies">
                        <img src="assets/education.png" alt="education">
                        <p>Nivel de educație</p>
                    </div>
                    <div class="residence-group" id = "environment">
                        <img src="assets/residence.png" alt="residence">
                        <p>Medii de rezidență</p>
                    </div>
                    <div class="income-group" id = "compensation">
                        <img src="assets/income.png" alt="income">
                        <p>Tip de indemnizare</p>
                    </div>
                </div>
            </div>
        </section>


        <section class="data-charts">
            <ul class="tabs">
                <li data-tab-target="#chart1" class="active tab"> Diagrama1 </li>
                <li data-tab-target="#chart2" class="tab"> Diagrama2 </li>
                <li data-tab-target="#chart3" class="tab"> Diagrama3 </li>
            </ul>

            <div class="tab-content">
                <div id="chart1" data-tab-content class="active">
                    <canvas class="canvas1" id="myChart" width="400" height="300"></canvas>
                </div>
                <div id="chart2" data-tab-content>
                    <canvas id="secondChart" width="400" height="300"></canvas>
                </div>
                <div id="chart3" data-tab-content>
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
                <div class="save-SVG" id="save-SVG" >
                    <p>SVG</p>
                </div>
                <div class="save-CSV" id="save-CSV">
                    <p>CSV</p>
                </div>
                <div class="save-PDF" id="save-PDF">
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