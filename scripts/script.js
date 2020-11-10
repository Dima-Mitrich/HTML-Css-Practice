var modal = document.getElementById("window");
var OpenLink = document.getElementById("login");
var CloseBtn = document.getElementById("close1");
var InputEmail = document.getElementById("ModalEmail"); 

OpenLink.onclick = function() {
    modal.style.display = 'block';
    InputEmail.focus();
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
}

CloseBtn.onclick = function() {
    modal.style.display = 'none';
    const body = document.body;
    const scrollY = body.style.top;
    body.style.height = '';
    body.style.overflowY = '';
}

/*function ShowModal() {
    var modal = document.getElementById("window");
    const body = document.body;
    body.style.height = '100vh';
    body.style.overflowY = 'hidden';
    modal.style.display = 'block';
}

function CloseModal() {
    const body = document.body;
    var modal = document.getElementById("window");
    const scrollY = body.style.top;
    body.style.height = '';
    body.style.overflowY = '';
    modal.style.display = 'none';
}*/