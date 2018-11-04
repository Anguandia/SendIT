document.write('<head>\
<link rel="stylesheet" href="css/order_form.css"></link>\
<link rel="stylesheet" href="css/main.css"></link>\
<script>src="js/jquery.min.js"</script>\
</head>\
<body>\
<form id="order" form-action="">\
    <fieldset>\
    <legend>Order Specifications</legend>\
    <label for="weight" class="">Parcel Weight:</label>\
    <input type="text" name="address" class="short" placeholder="  00"><br>\
    <label for="category" class="">Prefered Service Class:</label>\
    <input type="radio" name="category" class="short" value="ordinary" checked>Ordinary</input>\
    <input type="radio" name="category" class="short" value="express">Express</input><br>\
    </fieldset><br>\
    <label for="gps" class="">Enter GPS location of Pickup Point</label>\
    <input placeholder="  degrees North" name="gps" class="short" id="gps_E">\
    <input placeholder="  degrees East" name="gps" class="short" id="gps_N">\
    <p>Or fill location details below</p>\
    <fieldset>\
    <legend>Pickup Point details</legend>\
    <label for="dest1" class="left">Address1:</label>\
    <input type="text" name="dest1" id="src" class="left" placeholder="  Country">\
    <input type="text" placeholder="  City" class="right" name="src2" id="src2">\
    <label for="src2"  class="right">Address2:</label><br>\
    <label for="src2"  class="left">Address3:</label>\
    <input type="text" placeholder="  County" class="left" name="src2" id="src2">\
    <input type="text" placeholder="  Division" class="right" name="src2" id="src2">\
    <label for="src2"  class="right">Address4:</label><br>\
    <label for="src2"  class="left">Address5:</label>\
    <input type="text" placeholder="  Village" class="left" name="src2" id="src2">\
    <input type="text" placeholder="  Street" class="right" name="src2" id="src2">\
    <label for="src2"  class="right">Address6:</label><br>\
    <label for="src2"  class="left">Address7:</label>\
    <input type="text" placeholder="  Block" class="left" name="src2" id="src2">\
    <input type="text" placeholder="  Floor" class="right" name="src2" id="src2">\
    <label for="src2"  class="right">Address8:</label>\
    </fieldset>\
    <fieldset>\
    <legend>Destination Point Details</legend>\
    <label for="dest1" class="left">Address1:</label>\
    <input type="text" name="dest1" class="left" placeholder="  Country">\
    <input type="text" placeholder="  City" class="right" name="dest2" id="dest2">\
    <label for="dest2"  class="right">Address2:</label><br>\
    <label for="dest3"  class="left">Address3:</label>\
    <input type="text" placeholder="  County" class="left" name="dest3" id="dest3">\
    <input type="text" placeholder="  Division" class="right" name="dest4" id="dest4">\
    <label for="dest4"  class="right">Address4:</label><br>\
    <label for="dest5"  class="left">Address5:</label>\
    <input type="text" placeholder="  Village" class="left" name="dest5" id="dest5">\
    <input type="text" placeholder="  Street" class="right" name="dest6" id="dest6">\
    <label for="dest6"  class="right">Address6:</label><br>\
    <label for="dest7"  class="left">Address7:</label>\
    <input type="text" placeholder="  Block" class="left" name="dest7" id="dest7">\
    <input type="text" placeholder="  Floor" class="right" name="dest8" id="dest8">\
    <label for="dest8"  class="right">Address8:</label>\
    </fieldset>\
    <fieldset>\
    <legend>Recipient</legend>\
    <label for="first_name" class="left">First Name:</label>\
    <input type="text" name="first_name" id="recipient" class="left" placeholder="  first name" style="border: none">\
    <input type="text" placeholder="  last name" class="right" name="last_name" id="recipient1">\
    <label for="last_name"  class="right">Last Name:</label><br>\
    <label for="email"  class="left">Email addr:</label>\
    <input type="email" placeholder="  email" class="left" name="email" id="email">\
    <input type="number" placeholder="  phone number" class="right" name="number" id="number">\
    <label for="number"  class="right">Tel contact:</label><br>\
    </fieldset><br>\
    <label for="description"  class="">Parcel Details:</label><br>\
    <div id="textarea"></div>\
    <button oncloick="myFunction()">Enter Parcel Description</button><br>\
    <textarea rows="5" columns="200"class="" name="description" id="description" form="order" style="display:none">Enter parcel details</textarea><br>\
    <input type="reset" id="reset" class="right" value="reset">\
    <input type="submit" id="submit" class="left" value="submit">\
</form>\
</body>');