var SelectedValue
var tunnit,
    kTunnit,
    ktTunnit,
    tyoTunnit,
    urheiluTunnit,
    muuharTunnit,
    muuTunnit

// Otetaan selectin arvo talteen
function getSelectedValue() {
    SelectedValue = document.getElementById("tekeminen").value;
    console.log(SelectedValue);
}

// Tallennetaan tunnit syötetyn valinnan kohdalle ja tallennetaan ne vielä local storageen
function getTunnit() {
    tunnit = document.querySelector("#tunnit").value;
    console.log(tunnit);

    if (localStorage.length > 0 ) {

        if (SelectedValue == "koulu") {
            
            kTunnit = parseInt(localStorage.getItem("kTunnit"));
            kTunnit += tunnit;
            localStorage.setItem("kTunnit", kTunnit);
            console.log("mennäänkö tänne ees?")
            console.log(localStorage.getItem("kTunnit"));
        }

        if (SelectedValue == "kotitehtavat") {
            ktTunnit = localStorage.getItem("ktTunnit");
            ktTunnit += tunnit;
            localStorage.setItem("ktTunnit", ktTunnit);
            console.log(localStorage.getItem("ktTunnit"));
        }

        if (SelectedValue == "tyo") {
            tyoTunnit = localStorage.getItem("tyoTunnit");
            tyoTunnit += tunnit;
            localStorage.setItem("tyoTunnit", tyoTunnit);
            console.log(localStorage.getItem("tyoTunnit"));
        }

        if (SelectedValue == "urheilu") {
            urheiluTunnit = localStorage.getItem("urheiluTunnit");
            urheiluTunnit += tunnit;
            localStorage.setItem("urheiluTunnit", urheiluTunnit);
            console.log(localStorage.getItem("urheiluTunnit"));
        }

        if (SelectedValue == "muuHarrastus") {
            muuharTunnit = localStorage.getItem("muuharTunnit");
            muuharTunnit += tunnit;
            localStorage.setItem("muuharTunnit", muuharTunnit);
            console.log(localStorage.getItem("muuharTunnit"));
        }

        if (SelectedValue == "muu") {
            muuTunnit = localStorage.getItem("muuTunnit");
            muuTunnit += tunnit;
            localStorage.setItem("muuTunnit", muuTunnit);
            console.log(localStorage.getItem("muuTunnit"));
        }
    } else {
        localStorage.setItem("kTunnit", "0");
        localStorage.setItem("ktTunnit", "0");
        localStorage.setItem("tyoTunnit", "0");
        localStorage.setItem("urheiluTunnit", "0");
        localStorage.setItem("muuharTunnit", "0");
        localStorage.setItem("muuTunnit", "0");

    }

}

// Luodaan näytettävät elementit
    const teksti = document.createTextNode("Tässä näet paljonko olet tehnyt mitäkin ");
    const kouluTeksti = document.createTextNode("Käynyt koulua " + localStorage.getItem("kTunnit") + " tuntia");
    const ktTeksti = document.createTextNode("Tehnyt kotitehtäviä " + localStorage.getItem("ktTunnit") + " tuntia");
    const tyoTeksti = document.createTextNode("Tehnyt töitä " + localStorage.getItem("tyoTunnit") + " tuntia");
    const urheiluTeksti = document.createTextNode("Urheillut " + localStorage.getItem("urheiluTunnit") + " tuntia");
    const mhTeksti = document.createTextNode("Tehnyt muita harrastuksia " + localStorage.getItem("muuharTunnit") + " tuntia");
    const muuTeksti = document.createTextNode("Tehnyt jotain muuta " + localStorage.getItem("muuTunnit") + " tuntia");    

// Näytetään edellinen sivulla
function nayta(){

    document.getElementById("otsikko").appendChild(teksti);
    document.getElementById("kouluNaytto").appendChild(kouluTeksti);
    document.getElementById("ktNaytto").appendChild(ktTeksti);
    document.getElementById("tyoNaytto").appendChild(tyoTeksti);
    document.getElementById("urheiluNaytto").appendChild(urheiluTeksti);
    document.getElementById("muuharNaytto").appendChild(mhTeksti);
    document.getElementById("muuNaytto").appendChild(muuTeksti);
}