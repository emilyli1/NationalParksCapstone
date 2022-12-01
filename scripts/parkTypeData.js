function addOption2(selectbox,text,value )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function addOption_list2(){

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
    addOption2(document.drop_list.parkTypeDropDown, parkTypesArray[i], parkTypesArray[i]);
    }
    
}
    
addOption_list2();