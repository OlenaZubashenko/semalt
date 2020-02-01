
function AddCheckboxEvents(row) {
    let checkboxes = row.getElementsByClassName('checkbox');
    for (const checkBox of checkboxes) {
        checkBox.onclick = function () {
            if (checkBox.checked) {
                row.style.color = '#C2CFE0'
            } else {
                row.style.color = 'initial'
            }
        }
    }
};
