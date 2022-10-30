console.log("Custom JS 1 Connected");
//alert('Site Under development');


function closeNav() {
    document.getElementById("navMenu_md").style.display = "none";
    console.log("Hide menu");
}

function openNav(){
    console.log("Show menu");
    document.getElementById("navMenu_md").style.display = "block";
    let navMenu_items = `<div class="row">
    <div class="col align-items-end" >
        <a class="text-danger "style=" text-decoration:none; position: absolute; cursor:pointer; top: 0; right: 25px; font-size: 30px; margin-left: 50px; border:2px white;" onclick="closeNav()">&times;</a>
    </div>
  </div>
  <div class="row mt-3 br-sm bg-white bg-opacity-50 p-3">
        <div class="col">
            <ul class="navbar-nav ms-auto">
                <li class=""><a class="text-decoration-none text-body h6" href="/">Home</a></li>
                <li class=""><a class="text-decoration-none text-body h6" href="/services">Services</a></li>
                <li class=""><a class="text-decoration-none text-body h6" href="/products/all">Products</a></li>
                <li class=""><a class="text-decoration-none text-body h6" href="/contacts">Contacts</a></li>
                <li class=""><a class="text-decoration-none text-body h6" href="/account/login">Log in</a></li>
                <li class=""><a class="text-decoration-none text-body h6" id="cart" href="/cart">Cart</a></li>
            </ul>
        </div>
  </div>`;
  document.getElementById('navMenu_md').innerHTML = navMenu_items;

}

function showSignup(){
    let formToHide = document.getElementById("loginForm");
    formToHide.classList.add("d-none");
    let formToShow = document.getElementById("singUpForm");
    formToShow.classList.remove("d-none");
    console.log("Signup");
}
function showLogin(){
    let formToShow = document.getElementById("loginForm");
    formToShow.classList.remove("d-none");
    let formToHide = document.getElementById("singUpForm");
    formToHide.classList.add("d-none");
    console.log("Login");
}
