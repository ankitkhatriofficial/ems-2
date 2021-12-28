/** This is active listner for brand input in complaint form */
let categoriesSelect = document.getElementById('categories');
categoriesSelect.addEventListener("change", function () {
    if (categoriesSelect.value !== "NotSelected") {
        fetch("https://electronics-tweaker.herokuapp.com/api/public/brands", {
            method: 'GET',
            redirect: 'follow'
        })
            .then(async (response) => {
                response = await response.json();
                let brandSelect = document.getElementById('brands')
                for (let object of response) {
                    for (let catg of object.categories) {
                        if (catg._id == categoriesSelect.value) {
                            let opt = document.createElement('option');
                            opt.value = object._id;
                            opt.innerHTML = object.name;
                            brandSelect.append(opt);
                            break;
                        }
                    }
                }
                brandSelect.disabled = false;
            })
            .catch(error => {
                console.log("error in rue")
            })
        document.getElementById('brands').disabled = false;
    }
})

/** This is active listner for description input in complaint form */
let brandsSelect = document.getElementById('brands');
brandsSelect.addEventListener("change", function () {
    document.getElementById('description').disabled = false;
})

/* create complaint request by customer */
complaintForm.addEventListener("submit", e => {
    e.preventDefault()
    let submitNewComplaintURL = "https://electronics-tweaker.herokuapp.com/api/c/complaints"
    const categories = document.getElementById('categories');
    const brands = document.getElementById('brands');
    let category = {
        "_id": categories.value,
        "name": categories.options[categories.selectedIndex].text
    }
    let brand = {
        "_id": brands.value,
        "name": brands.options[brands.selectedIndex].text,
        "categories": []
    }
    let dataJson = {
        category, brand
    }
    console.log(dataJson)
    fetch(submitNewComplaintURL, {
        method: 'POST',
        body: dataJson,
        redirect: 'follow'
    }).then(async (response) => {
        response = await response.json();
        document.getElementById('complaintFormResponse').innerHTML = response.message;
    }).catch(error => {
        console.log("error in submitting form")
    })
})