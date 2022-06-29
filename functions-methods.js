// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com

let output = "";
 emaildres = "";
function getEmailDomain (emailadres) {
   output = emailadres.substring(emailadres.indexOf('@') + 1);

   return output;
}
const nova = getEmailDomain("sjonnie@gmail.com");
console.log(nova);

/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"
emailadres = "";
const student = "student";
const medewerker = "medewerker";
const extern = "extern";
const domeinNovi = "novi.nl";
const domeinNoviEd = "novi-education.nl";
const domeinDefault = "";
function typeOffEmail(emailadres) {
   if (emailadres.substring(emailadres.indexOf('@') + 1) === domeinNovi ) {
      return medewerker;
   }else if (emailadres.substring(emailadres.indexOf('@') + 1) === domeinNoviEd) {
      return student ;
   } else {
      return extern;
   }
}
const novak = typeOffEmail("n.eeken@novi-education.nl");
const jan = typeOffEmail("t.mellink@novi.nl");
const kees = typeOffEmail("a.wiersma@outlook.com");

console.log(novak);
console.log(jan);
console.log(kees);


/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in



function checkEmailValidity(emailadres) {
   if (emailadres.includes("@") &&  !emailadres.includes(",") && !emailadres.charAt(emailadres.length - 1).includes(".") )  {
      return true;
   } else {
      return false;
   }
}

const noval = checkEmailValidity("n.eekena@novi.nl");
const janneke = checkEmailValidity("blabla4@novi.nl");
const jaap = checkEmailValidity("bla12bla@novi.nl");

console.log(noval);
console.log(janneke);
console.log(jaap);


