const getData = () => {
    const dataStorage = JSON.parse(localStorage.getItem('data'));
    return dataStorage || []
}
const setData = dataModified => {
    localStorage.setItem('data', JSON.stringify(dataModified));
}

