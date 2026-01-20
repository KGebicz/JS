function zad1() {
    let godziny = document.getElementById("godziny").value;
    let cena = document.getElementById("usluga").value;
    document.getElementById("wynik1").innerText =
        "Koszt usługi: " + (godziny * cena) + " zł";
}

function zad2() {
    let radios = document.getElementsByName("pizza");
    let cena = 0;
    for (let r of radios) {
        if (r.checked) cena = r.value;
    }
    let ilosc = document.getElementById("iloscPizz").value;
    document.getElementById("wynik2").innerText =
        "Do zapłaty: " + (cena * ilosc) + " zł";
}

function zad3() {
    let oceny = document.getElementsByClassName("ocena");
    let suma = 0;
    for (let o of oceny) {
        suma += Number(o.value);
    }
    let srednia = Math.round((suma / 5) * 100) / 100;
    document.getElementById("wynik3").innerText =
        srednia >= 3 ? "Średnia: " + srednia + " – Zdane"
                     : "Średnia: " + srednia + " – Niezdane";
}

function zad4() {
    let suma = 0;
    document.querySelectorAll("input[type=checkbox]").forEach(c => {
        if (c.checked) suma += Number(c.value);
    });
    document.getElementById("wynik4").innerText =
        "Cena dodatków: " + suma + " zł";
}

function zad5() {
    let waga = document.getElementById("waga").value;
    let wzrost = document.getElementById("wzrost").value;
    let bmi = Math.round((waga / (wzrost * wzrost)) * 10) / 10;
    let opis = bmi < 18.5 ? "Niedowaga" : bmi < 25 ? "Norma" : "Nadwaga";
    document.getElementById("wynik5").innerText =
        "BMI: " + bmi + " (" + opis + ")";
}

function zad6() {
    let wartosc = document.getElementById("wartosc").value;
    let przelicznik = document.getElementById("jednostka").value;
    document.getElementById("wynik6").innerText =
        "Wynik: " + (wartosc * przelicznik);
}

function zad7() {
    let n = document.getElementById("n").value;
    let tekst = "";
    for (let i = 2; i <= n; i += 2) {
        tekst += i + " ";
    }
    document.getElementById("wynik7").innerText = tekst;
}

function zad8() {
    let kwota = document.getElementById("kwota").value;
    let rabat = kwota >= 500 ? 0.2 : kwota >= 200 ? 0.1 : 0;
    let znizka = kwota * rabat;
    document.getElementById("wynik8").innerText =
        "Rabat: " + znizka + " zł, Do zapłaty: " + (kwota - znizka) + " zł";
}

function zad9() {
    let ocena = Number(document.getElementById("ocenaSwitch").value);
    let tekst;
    switch (ocena) {
        case 1: tekst = "niedostateczny"; break;
        case 2: tekst = "dopuszczający"; break;
        case 3: tekst = "dostateczny"; break;
        case 4: tekst = "dobry"; break;
        case 5: tekst = "bardzo dobry"; break;
        case 6: tekst = "celujący"; break;
        default: tekst = "błędna ocena";
    }
    document.getElementById("wynik9").innerText = tekst;
}

function zad10() {
    let ilosc = document.getElementById("iloscProd").value;
    let cena = document.getElementById("cenaProd").value;
    let rabat = document.getElementById("klient").value;
    let wartosc = ilosc * cena;
    document.getElementById("wynik10").innerText =
        "Do zapłaty: " + (wartosc - wartosc * rabat) + " zł";
}
