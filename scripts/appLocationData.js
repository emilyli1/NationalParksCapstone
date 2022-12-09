//Drop Down Menu
function CreateDropDown(selectbox,text,value )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function loadParkStateDropDownList(){
    const locationsArray = [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "DC",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Islands",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
    ]
for (var i=0; i < locationsArray.length;++i){
    CreateDropDown(document.drop_list.stateDropDown, locationsArray[i], locationsArray[i]);
    }
}

function loadNationalParkDropDownlist() {
    for (var i=0; i < parkTypesArray.length;++i){
        CreateDropDown(document.drop_list.parkTypeDropDown, parkTypesArray[i], parkTypesArray[i]);
  }

}   



//Executing Functions
loadParkStateDropDownList();
loadNationalParkDropDownlist();
filterParksByState();
filterParksByType();

// Template for Cards
function parksTemplate(park) {
   return  `<div class="parks">
          <h2 class="location-name"> ${park.LocationName}</h2>
          <h3 class="park-address"> Address: ${park.Address}</h3>
         <h3 class="park-city"> ${park.City}, ${park.State} ${park.ZipCode}</h3> 
         <h6 class="park-lang"> ${park.Latitude}, ${park.Longitude}</h6>       
        </div>
        `};

//filters state and compares w/ drop down menu

   function filterParksByState() {
    const selectedMountainFromDropdown = document.getElementById("stateDropDown").value;
    const filteredParks = nationalParksArray.filter(park => park.State === selectedMountainFromDropdown);
    document.getElementById("parks").innerHTML = filteredParks.map(parksTemplate);

   }

   // Function to display Parks by park types 
function filterParksByType() {
    const filteredByType = []; 
    //grabs value from drop down
    const MountainFromDropdown = document.getElementById("parkTypeDropDown").value;

    // loops through the nationalParksArray 
    for (let i = 0; i < nationalParksArray.length; i++) {
        // asks if nationalParksArray.LocationName, if it includes the word from Drop Down, it returns true.
        if (nationalParksArray[i].LocationName.includes(MountainFromDropdown) == true) {
            filteredByType.push(nationalParksArray[i]);
        }
    }
    document.getElementById("parks").innerHTML = filteredByType.map(parksTemplate);
}
