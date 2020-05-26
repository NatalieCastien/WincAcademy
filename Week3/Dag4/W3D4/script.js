const countryButton = document.getElementById('country-list');
const capricornWomenButton = document.getElementById('women');
const creditCardButton = document.getElementById('old-credit-cards');
const mostPeopleButton = document.getElementById('most-people');
const averageAgeButton = document.getElementById('average-age');
const matchMakingButton = document.getElementById('matchmaking');

const listContainer = document.getElementById('list-container');
const paragraphBox = document.getElementById('paragraph-box');

const resetList = (element) => {
    if (element.children.length > 0) {
        const listItems = element.children;
        const listArray = Array.from(listItems);
        listArray.forEach((child) => {
            element.removeChild(child);
        })
    } 
};

// LANDENLIJST
const showCountries = () => {
    resetList(listContainer);
    // sort data on country
    const data = randomPersonData.sort((a,b) => {
        return a.region > b.region ? 1 : -1;
    });
    const countries = data.map((person) => {
        return person.region;
    });
    // countries.sort();
    countries.forEach(country => {
        const newElement = document.createElement('li');
        newElement.innerText = country;
        listContainer.appendChild(newElement);
    });
}

countryButton.addEventListener('click', showCountries);

// STEENBOKVROUWEN
const showCapricornWomen = () => {
    resetList(listContainer);
    // sort data on first name
    const data = randomPersonData.sort((a,b) => {
        const nameA = a.name;
        const nameB = b.name;
        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    });
    const capricornWomen = data.filter((person) => {
        const birthday = person.birthday.dmy.slice(0,2);
        const birthmonth = person.birthday.dmy.slice(3,5);
        const birthyear = person.birthday.dmy.slice(6,10);         
        return person.gender == 'female' && birthyear <= 1990 && (birthday >= 22 && birthmonth == 12) | (birthday <= 19 && birthmonth == 01);
    })
    // console.log(capricornWomen);
    capricornWomen.map(woman => {
        const newElement = document.createElement('li');
        newElement.innerText = `${woman.name} ${woman.surname} ${woman.photo}`
        listContainer.appendChild(newElement);
    })
}
capricornWomenButton.addEventListener('click', showCapricornWomen);

// Oude creditcards

const showOldCreditCards = () => {
    resetList(listContainer);
    // sort data on closest expiration data
    const data = randomPersonData.sort((a,b) => {
        const day = "1";
        const monthA = a.credit_card.expiration.split("/")[0];
        const monthB = b.credit_card.expiration.split("/")[0];
        const yearA = a.credit_card.expiration.split("/")[1];
        const yearB = b.credit_card.expiration.split("/")[1];
        const expirationA = new Date((monthA.concat("/", day, "/", yearA)));
        const expirationB = new Date((monthB.concat("/", day, "/", yearB)));
        console.log(a.credit_card.expiration + " = " + expirationA);
        console.log(b.credit_card.expiration + " = " + expirationB);
        if (expirationA < expirationB) {
            return -1;
        } else if (expirationA > expirationB) {
            return 1;
        } else {
            return 0;
        }
    });
    // data.map((person) => {console.log(person.credit_card)});
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth() + 1;
    
    const oldCreditCards = data.filter((person) => {
        const expiration = person.credit_card.expiration.split("/");
        const expirationmonth = expiration[0];
        const expirationyear = "20" + expiration[1];
       
        return person.age >= 18 && (expirationyear == currentYear && expirationmonth >= currentMonth);
    });

    // console.log(oldCreditCards);
    oldCreditCards.map(person => {
        const newElement = document.createElement('li');
        newElement.innerHTML = `<ul><li>Name: ${person.name} </li>
        <li>surname: ${person.surname} </li>
        <li>phone: ${person.phone} </li>
        <li>creditcard expiration: ${person.credit_card.expiration}</li></ul>`
        listContainer.appendChild(newElement);
    })
};

creditCardButton.addEventListener('click', showOldCreditCards);

// Mostpeople

const showMostPeople = () => {
    resetList(listContainer);
    
    // sort data on country
    const countriesContraAlfabetic = randomPersonData.sort((a,b) => {
        return a.region < b.region ? 1 : -1;
    });

    const countries = countriesContraAlfabetic.map((person) => {
        return person.region;
    });
    const countryArray = [];

    const countryNames = countries.map((country) => country.name);

    countries.map((country) => {
        if (countryNames.includes(country) != true) {
            countryArray.push({name: country, count: 1});
            countryNames.push(country);
        } else {
            let index = countryArray.findIndex(item => item.name == country);            
            countryArray[index].count += 1;
        }
    })
    
    const sortedCountries = countryArray.sort((a,b) => {
        return a.count < b.count ? 1 : -1;
    });

    sortedCountries.map(country => {
        const newElement = document.createElement('li');
        newElement.innerText = `${country.name} - ${country.count}`
        listContainer.appendChild(newElement);
    })
    
}
mostPeopleButton.addEventListener('click', showMostPeople);

// Gemiddelde leeftijd

const showCountryButtons = () => {
    resetList(listContainer);
    const countriesAlfabetic = randomPersonData.sort((a,b) => {
        return a.region > b.region ? 1 : -1;
    });
    const countries = countriesAlfabetic.map((person) => {
        return person.region;
    });
    
    const countryNames = countries.map((country) => country.name);

    const showCountryDetails = (e) => {
        resetList(paragraphBox);
        let country = e.target.innerText;
        let array = randomPersonData.filter(person => person.region == country);
        let ages = array.map(p => p.age);
        
        let sumAges = 0;
        ages.forEach((age) => sumAges += age);
        // console.log("Deze array " + ages + " is opgeteld: " + sumAges);
        let averageAge = Math.round(sumAges / (ages.length));
        // console.log("Mean: " + averageAge);

        const newParagraph = document.createElement('p');
        newParagraph.innerText = `De gemiddelde persoon in ${country} is ${averageAge} jaar oud`;
        paragraphBox.appendChild(newParagraph);
    }

    countries.map((country) => {
        if (countryNames.includes(country) != true) {
            countryNames.push(country);
            const newButton = document.createElement('button');
            newButton.innerText = country;
            listContainer.appendChild(newButton);
            newButton.addEventListener('click', showCountryDetails);
        } 
    })
}

averageAgeButton.addEventListener('click', showCountryButtons);

// BONUS opdracht Matchmaking
const determineZodiacSign = (birthday, birthmonth) => {
    if((birthday >= 21 && birthmonth == 03) | (birthday <= 19 && birthmonth == 04)) {
        return 'Ram'        
    } else if((birthday >= 20 && birthmonth == 04) | (birthday <= 20 && birthmonth == 05)) {
        return 'Stier'
    } else if((birthday >= 21 && birthmonth == 05) | (birthday <= 20 && birthmonth == 06)) {
        return 'Tweelingen' 
    } else if((birthday >= 21 && birthmonth == 06) | (birthday <= 22 && birthmonth == 07)) {
        return 'Kreeft' 
    } else if((birthday >= 23 && birthmonth == 07) | (birthday <= 22 && birthmonth == 08)) {
        return 'Leeuw' 
    } else if((birthday >= 23 && birthmonth == 08) | (birthday <= 22 && birthmonth == 09)) {
        return 'Maagd' 
    } else if((birthday >= 23 && birthmonth == 09) | (birthday <= 22 && birthmonth == 10)) {
        return 'Weegschaal' 
    } else if((birthday >= 23 && birthmonth == 10) | (birthday <= 21 && birthmonth == 11)) {
        return 'Schorpioen' 
    } else if((birthday >= 22 && birthmonth == 11) | (birthday <= 21 && birthmonth == 12)) {
        return 'Boogschutter' 
    } else if((birthday >= 22 && birthmonth == 12) | (birthday <= 19 && birthmonth == 01)) {
       return 'Steenbok' 
    } else if((birthday >= 20 && birthmonth == 01) | (birthday <= 18 && birthmonth == 02)) {
        return 'Waterman' 
    } else if((birthday >= 19 && birthmonth == 02) | (birthday <= 20 && birthmonth == 03)) {
        return 'Vissen' 
    } else {
        return ''
    }
}

const showMatch = () => {
    const sortedData = randomPersonData.sort((a,b) => { 
        let nameA = () => {
            if (a.name == "") {
                return a.surname;
            } else {
                return a.name;
            };
        };
        let nameB = () => {
            if (b.name == "") {
                return b.surname;
            } else {
                return b.name;
            }
        };
        
        if (nameA < nameB) {
            return -1;
        } else if (nameA > nameB) {
            return 1;
        } else {
            return 0;
        }
    });

    const adultList = sortedData.filter((person) => {       
        return person.age >= 18;
    })
    const showList = adultList.map((person) => {
        let name = "";
        if(person.name != "") {
            name = (person.name).concat(" ", person.surname)
        } else {
            name = person.surname;
        }

        const birthday = person.birthday.dmy.slice(0,2);
        const birthmonth = person.birthday.dmy.slice(3,5);
        const birthyear = person.birthday.dmy.slice(6,10);  
        const zodiacSign = determineZodiacSign(birthday, birthmonth);
         return [name, person.region, person.age, zodiacSign]
    })
    console.log(showList);
    // Not finished yet
}

matchMakingButton.addEventListener('click', showMatch);