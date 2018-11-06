function createCalenda(elem,year,month){
    let table = document.getElementsByClassName('table');
    let d = new Date(year, month-1);

    for(let i = 0; i < d.getDay(); i++){
        table += '<td></td>';
    }
}