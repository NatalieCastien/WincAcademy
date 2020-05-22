fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

const makeRequest = (location) => {
    return new Promise((resolve, reject) => {
        console.log(`Making a request to ${location}`);
        if(location === "Google") {
            resolve('Google says hi')
        } else {
            reject('We can only talk to google')
        }
    })
}

const processRequest =  (response) => {
    return new Promise((resolve, reject) => {
        console.log("processing response")
        resolve(`extra information ${response}`)
    })
}

makeRequest('Google').then(response => {
    console.log('response received')
    return processRequest(response)
}).then(processResponse => console.log(processResponse))
.catch(error => console.log(error));

// Aynch and await
const myFunction = async () => {
    const response = await makeRequest('Google');
    console.log('response gotten');
    const processedResp = await processRequest(response)
    console.log(processedResp)
}
myFunction();

// Async await and try/catch block
const mySecondFunction = async () => {
    try {
        const response = await makeRequest('Google');
        console.log('response gotten');
        const processedResp = await processRequest(response)
        console.log(processedResp)
    } catch (error) {
        console.log(error)
    }
}
mySecondFunction();
