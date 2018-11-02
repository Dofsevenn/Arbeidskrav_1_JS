

var potentialPostalCodes = ["231", "0186", "35012", "7011", "01304"];

// Her lager jeg en forEach method for å sjekke hvert enkelt element i arrayet.

potentialPostalCodes.forEach(function(potentialPostalCodes) {
    
    /* Her har jeg laget en "conditional ternary" for å korte ned en "if statment". Her tester jeg om hvert element i arrayet er 4 siffer eller ikke, og console.logger ut avhengi av om det er "true" eller "false".
*/
    potentialPostalCodes.length === 4 ? console.log("Følgende nummer kvalifiserer som postnummer: " + potentialPostalCodes) : console.log("Følgende nummer kvalifiserer ikke som postnummer: " + potentialPostalCodes);
   
});

