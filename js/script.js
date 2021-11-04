const baseUrl = "https://makeup-api.herokuapp.com/api/v1/products.json?";
const lipstick = `${baseUrl}product_type=lipstick`;
const eyelinerList = `${baseUrl}product_type=eyeliner`;
const foundationList = `${baseUrl}product_type=foundation`;
const eyeshadowList = `${baseUrl}product_type=eyeshadow`;
const contents = document.querySelector("#content-list");
const title = document.querySelector(".card-title");

const requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

function getListLipstick() {
    title.innerHTML = "Daftar Produk Lipstick"
    fetch(lipstick, requestOptions)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson);
            var index = 0;
            let lip = "";
            resJson.forEach(lips => {
                lip += `
                <div class="col s4 m4">
                <div class="card">
                    <div class="card horizontal card small">
                        <div class="card-image ">
                            <img src="${resJson[index].image_link}">
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <span class="title"><h6>${resJson[index].name}</h6></span>
                                <p>Brand : ${resJson[index].brand} </p>
                                <p>Category : ${resJson[index].category} </p>
                                <p>Price : ${resJson[index].price_sign} ${resJson[index].price}  </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>`
                index++
            })
            contents.innerHTML = `<ul>` + lip + `</ul>`
        })
}


function getListEyeliner() {
    title.innerHTML = "Daftar Produk Eyeliner"
    fetch(eyelinerList, requestOptions)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson);
            var index = 0;
            let eye ="";
            resJson.forEach(eyes => {
                eye +=`
                <div class="col s4 m4">
                <div class="card">
                    <div class="card horizontal card small">
                        <div class="card-image ">
                            <img src="${resJson[index].image_link}">
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <span class="title"><h6>${resJson[index].name}</h6></span>
                                <p>Brand : ${resJson[index].brand} </p>
                                <p>Name : ${resJson[index].name} </p>
                                <p>Category : ${resJson[index].category} </p>
                                <p>Price : ${resJson[index].price_sign} ${resJson[index].price}  </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>`
                index++
            })
            contents.innerHTML = `<ul>` + eye + `</ul>`
        })
}

function getListEyeshadow() {
    title.innerHTML = "Daftar Produk Eyeshadows"
    fetch(eyeshadowList, requestOptions)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson);
            var index = 0;
            let shadow ="";
            resJson.forEach(shadows => {
                shadow +=`
                <div class="col s4 m4">
                <div class="card">
                    <div class="card horizontal card small">
                        <div class="card-image ">
                            <img src="${resJson[index].image_link}">
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <span class="title"><h6>${resJson[index].name}</h6></span>
                                <p>Brand : ${resJson[index].brand} </p>
                                <p>Name : ${resJson[index].name} </p>
                                <p>Category : ${resJson[index].category} </p>
                                <p>Price : ${resJson[index].price_sign} ${resJson[index].price}  </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>`
                index++
            })
            contents.innerHTML = `<ul>` + shadow + `</ul>`
        })
}


function getListFoundation() {
    title.innerHTML = "Daftar Produk Foundation"
    fetch(foundationList, requestOptions)
        .then(response => response.json())
        .then(resJson => {
            console.log(resJson);
            var index = 0;
            let found ="";
            resJson.forEach(founds => {
                found +=`
                <div class="col s4 m4">
                <div class="card">
                    <div class="card horizontal card small">
                        <div class="card-image ">
                            <img src="${resJson[index].image_link}">
                        </div>
                        <div class="card-stacked">
                            <div class="card-content">
                                <span class="title"><h6>${resJson[index].name}</h6></span>
                                <p>Brand : ${resJson[index].brand} </p>
                                <p>Category : ${resJson[index].category} </p>
                                <p>Price : ${resJson[index].price_sign} ${resJson[index].price}  </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>`
                index++
            })
            contents.innerHTML = `<ul>` + found + `</ul>`
        })
}


function loadPage(page) {
    switch (page) {
        case "lips":
            getListLipstick();
            break;
        case "eyeliner":
                getListEyeliner();
                break;
        case "foundation":
            getListFoundation();
            break;
        case "eyeshadow":
            getListEyeshadow();
            break;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);


    document.querySelectorAll(".sidenav a, .topnav a").forEach(elm => {
        elm.addEventListener("click", evt => {
            let sideNav = document.querySelector(".sidenav");
            M.Sidenav.getInstance(sideNav).close();
            page = evt.target.getAttribute("href").substr(1);
            loadPage(page);
        })
    })
    var page = window.location.hash.substr(1);
    if (page === "" || page === "!") page = "lips";
    loadPage(page);
});