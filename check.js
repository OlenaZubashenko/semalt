
function AddCheckboxEvents(row) {
    let checkboxes = row.getElementsByClassName('checkbox');
    for (const checkBox of checkboxes) {
        checkBox.onclick = function () {
            if (checkBox.checked) {
                row.style.background = '#E7F6FF'
            } else {
                row.style.background = 'none'
            }
        }
    }
};
