let id = 0;

document.getElementById('add').addEventListener('click', () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById('inputEmail4').value;
    row.insertCell(1).innerHTML = document.getElementById('inputName4').value;
    let actions = row.insertCell(2);
    // actions.appendChild('');
    document.getElementById('inputEmail4').value='';
    document.getElementById('inputName4').value='';
    document.getElementById('inputAddress').value='';
    document.getElementById('inputAddress2').value='';
    document.getElementById('inputCity').value='';
    document.getElementById('inputEstate').value='';
    document.getElementById('inputZip').value='';
    
});

