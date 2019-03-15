let inputText: string = "Britanniassa käynnissä oleva kahden leirin, konservatiivien ja työväenpuolueen taistelu vallasta ja johtajuudesta on saarivaltion lähihistoriassa vailla vertaansa." +
    "Ruusujen sota (1455–1487) saattaa tuntua kaukaiselta vertailukohdalta nykypäivään. Tuolloin Lancasterin ja Yorkin suvut kävivät lukuisia taisteluja, kun molemmat sukuhaarat tavoittelivat kruunua. Kuten yli 500 vuotta sitten, nytkin taistelu vallasta on johtamassa merkittäviin sosiaalisiin ja taloudellisiin ongelmiin." +
    "On olemassa lukuisia selvityksiä siitä, että Britannian irtautuminen suurimmasta kauppakumppanistaan ja poliittisesta viitekehyksestään Euroopan unionista johtaa bruttokansantuotteen laskuun ja työttömyyden kasvuun. Tästä on varoittanut muun muassa Englannin keskuspankki." +
    "Luvassa on myös yhä enemmän investointien ja yritysten pakoa muualle. EU-eron ennustetaan johtavan myös lisääntyviin sosiaalisiin häiriötiloihin ympäri maata. Nämä voivat liittyä esimerkiksi maahanmuuttajiin – yksi erokampanjan tavoitteistahan oli pysäyttää maahanmuutto Britanniaan." +
    "Itkua ja hammastenkiristystä Westminsterissä" +
    "Merkillinen draama on ottanut vallan Westminsterissä. Olemme katsoneet tarinaa, jolla ei tunnu olevan käsikirjoittajaa." +
    "Hallituksen ja oman puolueensa luottamusäänestyksistä niukasti selvinneen pääministeri Theresa Mayn asema on paperinohut. Tästä huolimatta Mayn neuvottelema ja kahdesti kumoon äänestetty erosopimus tulee vielä kolmanteen parlamentin äänestyksen ensi viikon alussa." +
    "Miksi? Siksi, että vaihtoehtoja ei ole." +
    "Mayn sopimus äänestettiin nurin tiistaina jälleen murskaluvuin. Keskiviikkona parlamentti äänesti kumoon myös sopimuksettoman eron mahdollisuuden, ja parlamentin EU-eroleirin johtaja ja pääpiiskuri Jacob Rees-Mogg pelästyi. Tässähän voi käydä niin, ettei Britannia lähdekään EU:sta." +
    "Torstaina pääministeri May toi istuntosaliin ehdotuksen jatkoajan hakemisesta EU-erolle. Tämän version mukaan May hakee EU:lta lisäaikaa kesäkuun loppuun, mikäli parlamentti hyväksyy hänen neuvottelemansa erosopimuksen ensi viikon keskiviikkoon mennessä." +
    "Jos sopimus ei ensi viikollakaan mene läpi, May joutuu hakemaan EU:lta pidempää jatkoaikaa, ehkä vuoden tai kaksi, koska parlamentti hylkäsi mahdollisuuden erota EU:sta ilman sopimusta." +
    "Tässä tapauksessa Maylla on oltava suunnitelma, jonka EU voi hyväksyä. Muussa tapauksessa laki erosta lyö päälle klo 23 Britannian-aikaa 29. maaliskuuta.";

let wordSource = inputText.split(" ");

// Array objekteja. Jokaisessa objektissa on sana ja siihen liittyvä array muita sanoja.

// TypeScriptin tapa, jossa arrayn objektien sisällön tyypit on määritetty
let wordMap: { value?: string; words?: string[]; }[] = [];

// Perinteinen JavaScript-tapa. Molemmat toimii yhtä hyvin.
// let wordMap = [];

for (let word of wordSource) {
    wordMap.push({value: word, words: []});
}

// Pusketaan sana-objektin listalle sanoja
for (let word of wordMap) {
    if (word.value == "että") {
        word.words.push("sana");
    }
}

console.log(wordMap);



// Objekti, jossa on sana - array -pareja, eli periaatteessa esim C#:n dictionaryyn rinnastettava rakenne. Sana itsessään toimii avaimena, niin pitäisi päästä vähän vähemmällä määrällä silmukoita siinä kohtaa, kun halutaan hakea johonkin sanaan liittyvä lista muita sanoja

// TS. Täytyy määritellä, että objektissa on string-tyyppisiä avaimia ja niillä any-tyyppisiä arvoja
//let wordDictionary: {[key: string]: any} = {};

// JS
let wordDictionary = {};

for (let word of wordSource) {
    if (wordDictionary[word] == null) {
        wordDictionary[word] = [];
    }

    if (word == "että") {
        wordDictionary[word].push("sana");
    } else if (word == "tai") {
        wordDictionary[word].push("sana2");
    }
}


for (let key in wordDictionary) {
    console.log(key + ": " + wordDictionary[key]);
}

console.log(wordDictionary["että"]);

