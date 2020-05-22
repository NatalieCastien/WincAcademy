const key = prompt("Enter your API key:");
setKey(key);

const getMyData = async() => {
    await getData();
};
getMyData();