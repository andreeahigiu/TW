<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="shortcut icon" href="#">
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="./styleMain.css">
    <script src="script.js" defer></script>
    <title>UnWe</title>
</head>

<body>
    <header class="sticky-header">
        <img src="logo.png" class="logo-header" alt="logo">
        <a href="index.php">
            <img src="home-btn.png" class="home-btn" alt="home">
        </a>

    </header>

    <div class="landing-page">
        <h2>Bine ai venit la UnWe!</h2>
        <p>Aici poți găsi date referitoare la rata șomajului în România</p>
    </div>

    <main>
        <section class="intro">
            <img src="selection.svg" alt="selection icon" id="selection_icon" /> Selectati elementele dupa care se va face filtrarea datelor:
        </section>


        <!-- <div id="tip_cautare"> -->
        <section class="cautare_generala">
            Căutare generală
        </section>

        <section class="compara" onclick="showFilter()">
        <img src="add.svg" alt="plus icon" id="plus_icon" /> Compara cu     
        </section>

        <section class="cautare_avansata">
            Căutare avansată
        </section>
        <!-- </div> -->

        <section class="sectionSelect">
        <form id="employment-search" action="./charts.php" method="GET">
        
                <div class="fields-select">
                    <select name="Judet">
    <option value="" disabled selected>Județ</option>
    <option> Toate județele </option>
    <option> Alba </option>
    <option> Arad </option>
    <option> Argeș </option>
    <option> Bacău </option>
    <option> Bihor </option>
    <option> Bistrița Năsăud </option>
    <option> Botoșani </option>
    <option> Brăila </option>
    <option> Brașov </option>
    <option> Buzău </option>
    <option> Călărași </option>
    <option> Caraș-Severin </option>
    <option> Cluj </option>
    <option> Constanța </option>
    <option> Covasna </option>
    <option> Dâmbovița </option>
    <option>  Dolj</option>
    <option> Galați</option>
    <option> Giurgiu</option>
    <option> Gorj </option>
    <option> Harghita </option>
    <option> Hunedoara </option>
    <option> Ialomița </option>
    <option> Iași </option>
    <option> Ilfov </option>
    <option> Maramureș </option>
    <option> Mehedinti </option>
    <option> București </option>
    <option> Mureș </option>
    <option> Neamț </option>
    <option> Olt </option>
    <option> Prahova </option>
    <option> Sălaj </option>
    <option> Satu Mare </option>
    <option> Sibiu </option>
    <option> Suceava </option>
    <option> Teleorman </option>
    <option> Timiș </option>
    <option> Tulcea </option>
    <option> Vâlcea </option>
    <option> Vaslui </option>
    <option> Vrancea </option>

    </select>


                    <select name="perioada">
        <option value="" disabled selected> Alege perioada </option>
        <option> Ianuarie 2020 </option>
        <option> Februarie 2020 </option>
        <option> Martie 2020 </option>
        <option> Aprilie 2020 </option>
        <option> Mai 2020 </option>
        <option> Iunie 2020 </option>
        <option> Iulie 2020 </option>
        <option> August 2020 </option>
        <option> Septembrie 2020 </option>
        <option> Octombrie 2020 </option>
        <option> Noiembrie 2020 </option>
        <option> Decembrie 2020 </option>
        <option> Ianuarie 2021 </option>
        <option> Februarie 2021 </option>
        <option> Martie 2021 </option>

    </select>
                </div>
        </section>
        <!--sectionSelect-->


        <section class="sectionSelectCompare" style="display:none" id="selectCompare">
            <!-- <form id="employment-search" action="./charts.php" method="GET"> -->

    <div class="fields-select">
    <select name="Judet2">
    <option value="" disabled selected>Județ</option>
    <option> Toate județele </option>
    <option> Alba </option>
    <option> Arad </option>
    <option> Argeș </option>
    <option> Bacău </option>
    <option> Bihor </option>
    <option> Bistrița Năsăud </option>
    <option> Botoșani </option>
    <option> Brăila </option>
    <option> Brașov </option>
    <option> Buzău </option>
    <option> Călărași </option>
    <option> Caraș-Severin </option>
    <option> Cluj </option>
    <option> Constanța </option>
    <option> Covasna </option>
    <option> Dâmbovița </option>
    <option>  Dolj</option>
    <option> Galați</option>
    <option> Giurgiu</option>
    <option> Gorj </option>
    <option> Harghita </option>
    <option> Hunedoara </option>
    <option> Ialomița </option>
    <option> Iași </option>
    <option> Ilfov </option>
    <option> Maramureș </option>
    <option> Mehedinti </option>
    <option> București </option>
    <option> Mureș </option>
    <option> Neamț </option>
    <option> Olt </option>
    <option> Prahova </option>
    <option> Sălaj </option>
    <option> Satu Mare </option>
    <option> Sibiu </option>
    <option> Suceava </option>
    <option> Teleorman </option>
    <option> Timiș </option>
    <option> Tulcea </option>
    <option> Vâlcea </option>
    <option> Vaslui </option>
    <option> Vrancea </option>

    </select>


                    <select name="perioada2">
        <option value="" disabled selected> Alege perioada </option>
        <option> Ianuarie 2020 </option>
        <option> Februarie 2020 </option>
        <option> Martie 2020 </option>
        <option> Aprilie 2020 </option>
        <option> Mai 2020 </option>
        <option> Iunie 2020 </option>
        <option> Iulie 2020 </option>
        <option> August 2020 </option>
        <option> Septembrie 2020 </option>
        <option> Octombrie 2020 </option>
        <option> Noiembrie 2020 </option>
        <option> Decembrie 2020 </option>
        <option> Ianuarie 2021 </option>
        <option> Februarie 2021 </option>
        <option> Martie 2021 </option>

    </select>
    </div>
        </section>
        <!--sectionSelectCompare-->
        
        <!-- div fields-select -->

        <div  class="horizontal_line1" id="lineCompare1"></div>


        <section class="section3">
            <div id="fields-check">

                <input type="checkbox" class="checkbox_class" id="check1" name="check1"/>
                <label for="check1">Grupe de vârstă </label>


                <input type="checkbox" class="checkbox_class" id="check2" name="check2"/>
                <label for="check2">Gen </label>


                <input type="checkbox" class="checkbox_class" id="check3" name="check3" />
                <label for="check3">Nivel de educație </label>


                <input type="checkbox" class="checkbox_class" id="check4" name="check4"/>
                <label for="check4">Medii de rezidență </label>


                <input type="checkbox" class="checkbox_class" id="check5" name="check5" />
                <label for="check5">Tip de îndemnizare </label>


            </div>
        </section>
        <!--section3-->

        <section class="submit_btn">
            <button type="submit" name="cauta" value="Cauta"> 
                <p id="search_label">
                    Caută
                </p>
                <img src="search.svg" alt="search glass" id="search_glass"/>
            </button>
        </section>
        </form>
    </main>

    <footer>
        <img src="logo.png" class="logo-footer" alt="logo">
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
                <img src="hyperlink.svg" height="15" width="15" alt="link_icon">
                <h3>Documentație</h3>
            </a>
            <p>
                Această aplicație constituie proiectul de la materia Tehnologii Web.
            </p>
            <a href=" https://www.info.uaic.ro/ ">
                <img src="hyperlink.svg" height="15" width="15" alt="link_icon"> Facultatea de informatică Iași
            </a>
        </section>
    </footer>
</body>

</html>