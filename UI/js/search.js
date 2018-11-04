function filterData(j) {
    var input, filter, table, tr, td, i;
    input = document.getElementById("orderID");
    filter = input.value.toUpperCase();
    table = document.getElementById("all_orders");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[j];
      if (td) {
        if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }