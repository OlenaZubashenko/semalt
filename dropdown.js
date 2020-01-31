document.addEventListener('DOMContentLoaded', function(){ 
    let dropdowns = document
        .getElementsByClassName('dropdown-single');
    for (const dropdown of dropdowns) {
        let options = dropdown.getElementsByClassName('dropdown-option');
        for (let _option of options) {
            _option.addEventListener('click', (e) => toogle(_option, e));
        }
    }        
});

function toogle(option, event){
    event.stopPropagation();
    event.cancelBubble = true
    let options = option.parentElement.getElementsByClassName('active');
    for (let _option of options) {
        _option.classList.remove('active');
    }
    option.classList.add('active');
    
    return false;
}

let showPopap = document.getElementById('popap-show');
let closePopap = document.getElementById('reset');
let popapWindow = document.getElementById('popap-window');
let borderPopap = document.getElementById('dropdown-first');
showPopap.onclick = function() {
    popapWindow.style.display = 'block';
    borderPopap.style.borderColor = "blue";
};
closePopap.onclick = function() {
    popapWindow.style.display = 'none';
    borderPopap.style.borderColor = "#C2CFE0";
}
