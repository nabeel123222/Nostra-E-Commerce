var productcontainer = document.getElementById("product")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll(".product-box")
console.log(productlist);



 function check(event) {
     search = event.target.value.toUpperCase()

    for (var i = 0; i < productlist.length; i++) {
        if (productlist[i].textContent.toUpperCase().indexOf(search) < 0) {
            productlist[i].style.display = "none"

        }
        else {
            productlist[i].style.display = "block"
        }

    }
}
