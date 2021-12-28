/** Function to show all brands */
function showAllBrands() {
    currentTable.hidden = true;
    currentTable = document.getElementById('showAllBrands')
    currentTable.hidden = false;
    if (isAllBrandsAvailable) {
        return
    }
    isAllBrandsAvailable = true
    let fetchAllBrandsURL = "https://electronics-tweaker.herokuapp.com/api/public/brands"
    fetch(fetchAllBrandsURL, {
        method: 'GET',
        redirect: 'follow'
    }).then(async (response) => {
        response = await response.json();
        let brandTable = document.getElementById('showAllBrands').getElementsByTagName('tbody')[0]
        count = 0;
        for (res of response) {
            let newrow = brandTable.insertRow();
            let columnSerialNo = newrow.insertCell();
            let columnId = newrow.insertCell();
            let columnName = newrow.insertCell();
            columnSerialNo.appendChild(document.createTextNode(++count))
            columnId.appendChild(document.createTextNode(res._id));
            columnName.appendChild(document.createTextNode(res.name));
        }
    }).catch(error => {
        console.log("errro in fetching..!")
    })
}

/** Function to show All Complaint requests */
function showAllComplaintsRequests() {
    currentTable.hidden = true;
    currentTable = document.getElementById('complaintsRequestTable')
    currentTable.hidden = false;
    // fetch("https://electronics-tweaker.herokuapp.com/api/a/all/complaints", {
    //     method: 'GET',
    //     redirect: 'follow'
    // }).then(async (response) => {
    //     response = await response.json();
    //     let table = currentTable.getElementsByTagName('tbody')[0]
    //     count = 0;
    //     for (res of response) {
    //         let newrow = table.insertRow();
    //         let columnSerialNo = newrow.insertCell();
    //         let columnId = newrow.insertCell();
    //         let columnBrand = newrow.insertCell();
    //         let columnCategory = newrow.insertCell();
    //         let columnDescription = newrow.insertCell();
    //         let columnCustomer = newrow.insertCell();
    //         let columnContact = newrow.insertCell();
    //         let columnStatus = newrow.insertCell();
    //         columnSerialNo.appendChild(document.createTextNode(++count));
    //         columnId.appendChild(document.createTextNode(res._id));
    //         columnBrand.appendChild(document.createTextNode(res.brand.name));
    //         columnCategory.appendChild(document.createTextNode(res.category.name));
    //         columnDescription.appendChild(document.createTextNode(res.description));
    //         columnCustomer.appendChild(document.createTextNode(res.customer));
    //         columnContact.appendChild(document.createTextNode(res.customer));
    //         columnStatus.appendChild(document.createTextNode(res.status));
    //     }
    // }).catch(error => {
    //     console.log("error in sending request..!")
    // })
}

/** Show Add Brand */
function showAddBrand() {
    currentTable.hidden = true;
    currentTable = document.getElementById('addBrandTable')
    currentTable.hidden = false;
}

/** Function to show All categories */
function showAllCategories() {
    currentTable.hidden = true;
    currentTable = document.getElementById('showAllCategories')
    currentTable.hidden = false;
    if (isAllCategoriesAvailable) {
        return
    }
    isAllCategoriesAvailable = true
    let fetchAllCategoriesURL = "https://electronics-tweaker.herokuapp.com/api/public/categories"
    fetch(fetchAllCategoriesURL, {
        method: 'GET',
        redirect: 'follow'
    }).then(async (response) => {
        response = await response.json();
        let brandTable = currentTable.getElementsByTagName('tbody')[0]
        count = 0;
        for (res of response) {
            let newrow = brandTable.insertRow();
            let columnSerialNo = newrow.insertCell();
            let columnId = newrow.insertCell();
            let columnName = newrow.insertCell();
            columnSerialNo.appendChild(document.createTextNode(++count))
            columnId.appendChild(document.createTextNode(res._id));
            columnName.appendChild(document.createTextNode(res.name));
        }
    }).catch(error => {
        console.log("errro in fetching..!")
    })
}

/** Function to show show Add Category Form */
function showAddCategoryTable() {
    currentTable.hidden = true;
    currentTable = document.getElementById('addCategoryTable')
    currentTable.hidden = false;
}

/** Function to add Category to the database */
const categoryForm = document.getElementById('addCategoryForm')
const categoryFormData = document.forms['addCategoryForm']
categoryForm.addEventListener("submit", e => {
    e.preventDefault()
    let addNewCategoryURL = "https://electronics-tweaker.herokuapp.com/api/a/add/categories"
    fetch(addNewCategoryURL, {
        method: 'POST',
        body: new FormData(categoryFormData),
        redirect: 'follow'
    }).then(async (response) => {
        response = await response.json();
        document.getElementById('addCategoryResponse').innerHTML = response.message;
    }).catch(error => {
        console.log("error in submitting form")
    })
})

/** Function to show Add Engineer form */
function showAddNewEngineerForm() {
    currentTable.hidden = true;
    currentTable = document.getElementById('addEngineerForm')
    currentTable.hidden = false;
}

/** Function to show Add Customer Form */
function showAddNewCustomerForm() {
    console.log("hitted", currentTable)
    currentTable.hidden = true;
    currentTable = document.getElementById('addCustomerForm')
    currentTable.hidden = false;
}

/**Function to show all customers */
function showAllCustomers() {
    currentTable.hidden = true;
    currentTable = document.getElementById('showAllCustomers')
    currentTable.hidden = false;
    if (isshowAllCustomersAvailable) {
        return
    }
    isshowAllCustomersAvailable = true
    let fetchAllCustomers = "https://electronics-tweaker.herokuapp.com/api/a/all/customers"
    fetch(fetchAllCustomers, {
        method: 'GET',
        redirect: 'follow'
    }).then(async (response) => {
        response = await response.json();
        let showAllCustomersTable = currentTable.getElementsByTagName('tbody')[0]
        count = 0;
        for (res of response) {
            let newrow = showAllCustomersTable.insertRow();
            let columnSerialNo = newrow.insertCell();
            let columnId = newrow.insertCell();
            let columnName = newrow.insertCell();
            let columnName2 = newrow.insertCell();
            let columnEmail = newrow.insertCell();
            let columncontactNo = newrow.insertCell();
            columnSerialNo.appendChild(document.createTextNode(++count))
            columnId.appendChild(document.createTextNode(res._id));
            columnName.appendChild(document.createTextNode(res.firstName));
            columnName2.appendChild(document.createTextNode(res.lastName));
            columnEmail.appendChild(document.createTextNode(res.email));
            columncontactNo.appendChild(document.createTextNode(res.contactNo));
        }
    }).catch(error => {
        console.log("errro in fetching..!")
    })
}

/** Function to show all engineers */
function showAllEngineers() {
    currentTable.hidden = true;
    currentTable = document.getElementById('showAllEngineers')
    currentTable.hidden = false;
    if (isshowAllEngineersAvailable) {
        return
    }
    isshowAllEngineersAvailable = true
    let fetchAllEngineers = "https://electronics-tweaker.herokuapp.com/api/a/all/engineers"
    fetch(fetchAllEngineers, {
        method: 'GET',
        redirect: 'follow'
    }).then(async (response) => {
        response = await response.json();
        let showAllEngineersTable = currentTable.getElementsByTagName('tbody')[0]
        count = 0;
        for (res of response) {
            let newrow = showAllEngineersTable.insertRow();
            let columnSerialNo = newrow.insertCell();
            let columnId = newrow.insertCell();
            let columnName = newrow.insertCell();
            let columnName2 = newrow.insertCell();
            let columnEmail = newrow.insertCell();
            let columncontactNo = newrow.insertCell();
            columnSerialNo.appendChild(document.createTextNode(++count))
            columnId.appendChild(document.createTextNode(res._id));
            columnName.appendChild(document.createTextNode(res.firstName));
            columnName2.appendChild(document.createTextNode(res.lastName));
            columnEmail.appendChild(document.createTextNode(res.email));
            columncontactNo.appendChild(document.createTextNode(res.contactNo));
        }
    }).catch(error => {
        console.log("errro in fetching..!")
    })
}