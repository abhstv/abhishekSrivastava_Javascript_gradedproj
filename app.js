let i = 0;
let savebtn = document.getElementById('save');
let addbtn = document.getElementById('add');
let saveIND = document.getElementById('saveIND');
function add(){
    let name = document.getElementById('adding').value;
    if(name == ''){
        alert('Please enter title in the box!')
    } else {
        let list = document.getElementById('listShow');
        let divpar = document.createElement('div');
        let divchild = document.createElement('div');
        let buttons = document.createElement('div');
        buttons.className = "button";
        buttons.innerHTML = "<button class = 'edit' id='edit("+i+")' onclick='edit("+i+");'>Edit</button> <button class = 'delete' id='remove("+i+")' onclick='remove("+i+");'>Delete</button>";
        divchild.className = "list";
        divchild.id = "list"+i;
        divchild.innerHTML = name;
        list.appendChild(divpar);
        divpar.appendChild(divchild)
        divpar.appendChild(buttons);
        i++;
    }
    document.getElementById('adding').value = "";
}
function save() {
    let ind = saveIND.value;
    let divpos = document.getElementById('list'+ind);
    let text = document.getElementById('adding').value;
    if (text == ''){
        alert("It's empty, cannot save!")
    } else {
    divpos.innerHTML = text;
    savebtn.style.display = "none";
    addbtn.style.display = "inline-block";
    document.getElementById('adding').value = "";
    }
}
function edit(ind) {
    saveIND.value = ind;
    let editValue = document.getElementById('list'+ind).innerHTML;
    document.getElementById('adding').value = editValue;
    savebtn.style.display = "inline-block";
    addbtn.style.display = "none";
}
function remove(ind) {
    let delpos = document.getElementById('list'+ind);
    let deldiv = delpos.parentNode;
    deldiv.remove();
}