menu.onclick = function myFunction() {
    const x = document.getElementById("myTopnav");

    if(x.className === "topnav"){ // если идентификатор topnav содержит класс topnav
        x.className += " responsive";  // то добавляется класс responsive
    } else {
        x.className = "topnav";   // иначе оставляем только topnav
    }
}
