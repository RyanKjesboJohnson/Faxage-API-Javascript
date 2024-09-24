function ExecuteScript() { 
	var table = document.getElementById("table1");
	console.log("table1:", table)
	var rows = table.querySelectorAll("tr");
    	console.log("rows:", rows);
    	var currentRow;
    	for (let i=0; i< rows.length; i++){
        const cells = rows[i].getElementsByTagName("td");
        for (let j=0; j<cells.length; j++){
            if (cells[j].innerText.includes("${FirstName} ${LastName}")){
                currentRow = rows[i]
            }
        }
    };
    console.log("currentRow:", currentRow);
    var cells = currentRow.getElementsByTagName("input");
    console.log("cells:", cells);
    console.log("checking the active field box")
    cells[0].checked = true;
    console.log("setting the program: ", "${Program}" )
    var programFullName;
    switch("${Program}") {
    case "MMLA":
    programFullName = "Mid-Minnesota Legal Aid";
    break;
    case "CMLS":
    programFullName = "Central Minnesota Legal Services";
    break;
    case "MDLC":
    programFullName = "Minnesota Disability Law Center";
    break;
    default:
    console.log("no program match in switch");
    }
    console.log("this is the program full name:", programFullName);
    cells[2].value = programFullName
        console.log("setting the fax number with this code as reference:", "${FaxNumberCode}")    
let faxNumberCoverSheet;
    switch ("${FaxNumberCode}") {
        case "500418":
            faxNumberCoverSheet = "(612)334-3402";
            break;
        case "501682":
            faxNumberCoverSheet = "(320)253-9208";
            break;
        case "412639":
            faxNumberCoverSheet = "(612)446-5773"
            break;
        case "412637":
            faxNumberCoverSheet = "(612)446-5772";
            break;
        case "409742" :
            faxNumberCoverSheet = "(218)722-7885";
            break;
        case "411531" :
            faxNumberCoverSheet = "(507)322-1001";
            break;
        case "500420" :
            faxNumberCoverSheet = "(612)436-0499";
            break;
        case "412641" :
            faxNumberCoverSheet = "(612)446-5800";
            break;
        case "410421" :
            faxNumberCoverSheet = "(612)334-5755";
            break;
        case "500419" :
            faxNumberCoverSheet = "(612)332-4668";
            break;
        case "410180" :
            faxNumberCoverSheet = "(320)407-0410";
            break;
        case "412435" :
            faxNumberCoverSheet = "(320)253-5794";
            break;
        case "410631" :
            faxNumberCoverSheet = "(651 )222-0745";
            break;
        default:
            break;
    }
    cells[3].value = faxNumberCoverSheet;
    console.log("checking the final three boxes")
    cells[4].checked = true;
    cells[5].checked = true;
    cells[7].checked = true;
    return cells[6].name
   }