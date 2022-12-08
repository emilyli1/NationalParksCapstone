//dropdown menu
function parkTypeDropDown(selectbox,text,value )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function parkTypeDropDownList(){

const parkTypesArray = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
]
for (var i=0; i < parkTypesArray.length;++i){
    parkTypeDropDown(document.drop_list.parkTypeDropDown, parkTypesArray[i], parkTypesArray[i]);
    }
    
}
    
parkTypeDropDownList();