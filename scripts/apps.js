function addOption(selectbox,text,value )
{
	var optn = document.createElement("OPTION");
	optn.text = text;
	optn.value = value;
	selectbox.options.add(optn);
}

function addOption_list(){
var parkTypesArray = new Array("National Park",
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
    "Parkway");

for (var i=0; i < parkTypesArray.length;++i){
addOption(document.drop_list.Month_list, parkTypesArray[i], parkTypesArray[i]);
}

}

addOption_list();