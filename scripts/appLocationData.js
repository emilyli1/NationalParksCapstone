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

   // save the selected option of dropdown into a variable.
   // Loop over all the mountain data
   // if Mountainame is equal to selected option
   // Display mountain on screen
//I WILL NEED A FUNCTION TO DISPLAY THE PARKS

//Executing Functions
loadParkStateDropDownList();
loadNationalParkDropDownlist();
filterParksByState();
filterParksByType();
        
function parksTemplate(park) {
   return  `<div class="parks">
          <h2 class="location-name"> ${park.LocationName}</h2>
          <h4 class="park-address"> ${park.Address}</h4>
         <h4 class="park-city"> ${park.City}</h4>
         <h4 class="park-state"> ${park.State}</h4> 
         <h4 class="park-type"> ${park.Location.type}</h4>       
        </div>
        `};


   function filterParksByState() {
    const selectedMountainFromDropdown = document.getElementById("stateDropDown").value;
    const filteredParks = nationalParksArray.filter(park => park.State === selectedMountainFromDropdown);
    document.getElementById("parks").innerHTML = filteredParks.map(parksTemplate);
 

   }

function filterParksByType() {
  
}  

//filteredparks make sure it works
//find out why its refreshing

// for (let park of nationalParksArray) {
//     if ( park.LocationName.indexOf(parkTypeDropDown.value) != -1 && parkTypeDropDown != "")
//     {
//         document.getElementById("parks").innerHTML = parkTypeDropDown.value.map(parksTemplate);
//     }
// }