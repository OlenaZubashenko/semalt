function formatDate(_date) {
    let monthNames = [
      "Jan", "Feb", "Mar",
      "Apr", "May", "Jun", "Jul",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
    let date = new Date(_date);
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();  
    return  `${monthNames[monthIndex]} ${day} ${year}`;
  };
function formatNumber(x) {
    let parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
  };

fetch('https://semalt.tech/dev/api/v1/example/test/')
.then(response => response.json())
.then(json => {         
    let data = json.result.sitemap;
    let dataTable = document.getElementById("dataTable");
    if(data && data.length && dataTable){
        data.forEach(item => {
            let tr = document.createElement('tr');
            tr.innerHTML = 
            `<tr class= "table-tr">
            <td><input class= "checkbox" type="checkbox"></td>
            <td>
                <a href="${item.path}" class="link">${item.path.replace('http://savetubevideo.com','')}
                    <img src="./img/arrow.png">
                </a>
            </td>
            <td>
                ${(item.isSitemapsIndex ? 'Sitemap index' : 'Sitemap index')}
            </td>
            <td>
                ${formatDate(item.lastSubmitted)}
            </td>
            <td>
                ${formatDate(item.lastCheck)}
            </td>
            <td>
                ${(item.errors 
                    ? `Errors(${item.errors})` 
                    : item.warnings 
                        ? `Warnings (${item.warnings})`
                        : "Success")}
            </td>
            <td>
                ${formatNumber(item.urls)}
            </td>
            <td>
                <input class="recrewl" type="button" value="Recrewl">
            </td>
            <td>
                <input class = "remove" type="image" src="./img/Vector.svg">
            </td>
        </tr>`;
        dataTable.appendChild(tr);
        });
    }
}
);
