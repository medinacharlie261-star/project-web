let personDataStack = [];

function saveData() {
    const entry = {
        first: document.getElementById('fName').value,
        middle: document.getElementById('mName').value,
        last: document.getElementById('lName').value,
        age: document.getElementById('age').value,
        email: document.getElementById('email').value
    };

    if(!entry.first || !entry.last || !entry.email) {
        Swal.fire({
            title: 'Oops!',
            text: 'Please fill up the blank!',
            icon: 'error',
            confirmButtonColor: '#d33' 
        });
        return;
    }

    else{
         Swal.fire({
            title: 'Success!',
            text: 'Saved Data\!',
            icon: 'success',
            confirmButtonColor: '#4CAF50' 
            });
    }


    personDataStack.push(entry);
    renderTable();
    clearForm();
}

function renderTable() {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = ""; 
    
    for (let i = personDataStack.length - 1; i >= 0; i--) {
        const p = personDataStack[i];
        let row = `<tr>
            <td>${p.first}</td>
            <td>${p.middle}</td>
            <td>${p.last}</td>
            <td>${p.age}</td>
            <td>${p.email}</td>
        </tr>`;
        tableBody.innerHTML += row;
    }
}

function clearForm() {
    document.getElementById('fName').value = "";
    document.getElementById('mName').value = "";
    document.getElementById('lName').value = "";
    document.getElementById('age').value = "";
    document.getElementById('email').value = "";
}

