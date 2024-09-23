function ExecuteScript() { 
    var table = document.getElementById("table1");
    var rows = table.querySelectorAll("tr");
    var currentRow;
    for (let i=0; i< rows.length; i++){
        const cells = rows[i].getElementsByTagName("td");
        for (let j=0; j<cells.length; j++){
            if (cells[j].innerText.includes("${FirstName} ${LastName}")){
                currentRow = rows[i]
            }
        }
    };
    var cells = currentRow.getElementsByTagName("input");
    cells[0].checked = true;
    if(${Program} === "CMLS") {
        cells[2].value = "Central Minnesota Legal Services"}
        else if (${Program} === "MDLC") {
        cells[2].value = "Minnesota Disability Law Center"} 
        else {cells[2].value = "Mid-Minnesota Legal Aid"}
    cells[3].value = ${faxNumber};
    cells[4].checked = true;
    cells[5].checked = true;
    cells[7].checked = true;
    }