// adding data 
function addData() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const email = document.getElementById("email").value;
    const image = document.getElementById("image").value;
    const form = document.getElementById("crudForm").value;

    if (!name || !age || !email || !image) {
        alert("PLEASE FILL ALL FIELDS");
        return;
    }

    let data = JSON.parse(localStorage.getItem('crudData')) || [];
    const newData = { name, age, email, image }
    data.push(newData);
    localStorage.setItem('crudData', JSON.stringify(data));
    // form.reset();
    displayData();
    document.getElementById("name").value='';
    document.getElementById("age").value='';
    document.getElementById("email").value='';
    document.getElementById("image").value='';
}

function displayData() {
    const container = document.getElementById('dataContainer');
    container.innerHTML = '';

    let data = JSON.parse(localStorage.getItem('crudData')) || [];

    data.forEach((item,index) => {
        const card = document.createElement('div');
        card.classList.add('col-md-4', 'mb-3');

        card.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src="${item.image}" class="card-img-top" alt="Image">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">${item.age}</p>
                <p class="card-text">${item.email}</p>
                <button class="btn btn-warning" onclick="editData(${index})">Edit</button>
                <button class="btn btn-danger" onclick="deleteData(${index})">Delete</button>
            </div>
        </div>
        `
        container.appendChild(card);
    })
}

function editData(index){
    let data=JSON.parse(localStorage.getItem('crudData')) || [];
    let item=data[index];
    document.getElementById("name").value=item.name;
    document.getElementById("age").value=item.age;
    document.getElementById("email").value=item.email;
    document.getElementById("image").value=item.image;

    data.splice(index,1);

    localStorage.setItem('crudData',JSON.stringify(data));
    displayData();
}

  // Function to delete data
function deleteData(index) {
    // Retrieve data from local storage
    const data = JSON.parse(localStorage.getItem('crudData')) || [];

    // Remove the item from the data array
    data.splice(index, 1);

    // Save the updated data to local storage
    localStorage.setItem('crudData', JSON.stringify(data));

    // Update the displayed data
    displayData();
}
displayData();