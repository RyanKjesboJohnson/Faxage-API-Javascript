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
    let faxNumberCoverSheet;
    switch (${faxNumber}) {
        case 500418:
            faxNumberCoverSheet = "(612)334-3402";
            break;
        case 501682:
            faxNumberCoverSheet = "(320)253-9208";
            break;
        case 412639:
            faxNumberCoverSheet = "(612)446-5773"
            break;
        case 412637:
            faxNumberCoverSheet = "(612)446-5772";
            break;
        case 409742 :
            faxNumberCoverSheet = "(218)722-7885";
            break;
        case 411531 :
            faxNumberCoverSheet = "(507)322-1001";
            break;
        case 500420 :
            faxNumberCoverSheet = "(612)436-0499";
            break;
        case 412641 :
            faxNumberCoverSheet = "(612)446-5800";
            break;
        case 410421 :
            faxNumberCoverSheet = "(612)334-5755";
            break;
        case 500419 :
            faxNumberCoverSheet = "(612)332-4668";
            break;
        case 410180 :
            faxNumberCoverSheet = "(320)407-0410";
            break;
        case 412435 :
            faxNumberCoverSheet = "(320)253-5794";
            break;
        case 410631 :
            faxNumberCoverSheet = "(651 )222-0745";
            break;
        default:
            break;
    }
    cells[3].value = faxNumberCoverSheet;
    cells[4].checked = true;
    cells[5].checked = true;
    cells[7].checked = true;
    }