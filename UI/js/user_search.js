document.write('\
<label for="order" id="orderl">Enter Order ID</label>\
<input type="text" name="order" id="orderID" onkeyup="filterData(3)" placeholder="enter Order ID">\
<tab id="select"><a href="order_view.html">Select</a></tab>\
<table id="all_orders">\
<tr class="header">\
  <th id="th1">Order</th>\
  <th id="th2" onclick="loadOrder()">Destination</th>\
  <th id="th3" onclick="sortData(2).reverse()">Recipient</th>\
  <th id="th4" onclick="sortData(3).reverse()">Order ID</th>\
</tr>\
<a href="order_view.html"><tr>\
  <td onclick="loadOrder()"><a href="">Documents</a></td>\
  <td onclick="loadOrder()"><a href="">Kinsasha, DRC</a></td>\
  <td onclick="loadOrder()"><a href="">Papa D</a></td>\
  <td onclick="loadOrder()">18050630007</td>\
  </tr>\
<tr>\
  <td onclick="loadOrder()"><a href="">Electronics</a></td>\
  <td onclick="loadOrder()"><a href="">Mbale, Uganda</a></td>\
  <td onclick="loadOrder()"><a href="">Reciever Flavia</a></td>\
  <td onclick="loadOrder()">18070230301</td>\
</tr>\
<tr>\
  <td onclick="loadOrder()"><a href="">Art Pieces</a></td>\
  <td onclick="loadOrder()"><a href="">Muni, Arua</a></td>\
  <td onclick="loadOrder()"><a href="">Papa Flavia</a></td>\
  <td onclick="loadOrder()">18070630001</td>\
</tr>\
<tr>\
  <td onclick="loadOrder()"><a href="">Art Pieces</a></td>\
  <td onclick="loadOrder()"><a href="">Iganga</a></td>\
  <td onclick="loadOrder()"><a href="">Simon</a></td>\
  <td onclick="loadOrder()">18070630001</td>\
</tr>\
<tr>\
  <td onclick="loadOrder()"><a href="">Art Pieces</a></td>\
  <td onclick="loadOrder()"><a href="">Soroti, Uganda</a></td>\
  <td onclick="loadOrder()"><a href="">Papa Flavia</a></td>\
  <td onclick="loadOrder()">18070630001</td>\
</tr>\
<tr>\
  <td onclick="loadOrder()"><a href="">Art Pieces</a></td>\
  <td onclick="loadOrder()"><a href="">Nebi, Uganda</a></td>\
  <td onclick="loadOrder()"><a href="">Nobody</a></td>\
  <td onclick="loadOrder()">10070630001</td>\
</tr>\
<tr>\
  <td onclick="loadOrder()"><a href="">Art Pieces</a></td>\
  <td onclick="loadOrder()"><a href="">Congo</a></td>\
  <td onclick="loadOrder()"><a href="">Musa Ken</a></td>\
  <td onclick="loadOrder()">12120630001</td>\
</tr>\
<tr>\
  <td onclick="loadOrder()"><a href="">Art Pieces</a></td>\
  <td onclick="loadOrder()"><a href="">Mbarara</a></td>\
  <td onclick="loadOrder()"><a href="">Don Any</a></td>\
  <td onclick="loadOrder()">0807063000</td>\
</tr>\
<tr>\
  <td onclick="loadOrder()"><a href="">Art Pieces</a></td>\
  <td onclick="loadOrder()"><a href="">Kabale</a></td>\
  <td onclick="loadOrder()"><a href="">Papa Joseph</a></td>\
  <td onclick="loadOrder()">15070630301</td>\
</tr>\
<tr>\
  <td onclick="loadOrder()"><a href="">Art Pieces</a></td>\
  <td onclick="loadOrder()"><a href="">Kabarole</a></td>\
  <td onclick="loadOrder()"><a href="">John Flavia</a></td>\
  <td onclick="loadOrder()">17070630001</td>\
</tr>\
<tr>\
  <td onclick="loadOrder()"><a href="">Art Pieces</a></td>\
  <td onclick="loadOrder()"><a href="">Muni, Arua</a></td>\
  <td onclick="loadOrder()"><a href="">Papa Flavia</a></td>\
  <td onclick="loadOrder()">18070630001</td>\
</tr></a>\
</table>\
');