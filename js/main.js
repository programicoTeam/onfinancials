var clickedElementText;
var clickedElementId;
var numberOfClick = 0;
var selectedYears = document.getElementsByClassName("yearPanel");
var howManyYears = 3;

document.getElementById("list").addEventListener("click", function(e) {
    
    // get the text inside the clicked item
    clickedElementText = e.target.innerText;
    
    // get the id of the clicked item
    clickedElementId = e.target.id;
    
    // increament numberofclick variable
    numberOfClick++;

    // add item to yearPanel
    addItemToYearPanel(clickedElementText,clickedElementId);

})


function addItemToYearPanel(itemText,itemId){
    
    // create new item text field
    var newItem = document.createElement("INPUT");
    newItem.setAttribute("type", "text");
    newItem.setAttribute("class", itemId + numberOfClick);


    // append the newItem to all divS with yearPanel class
    for (i = 0; i < howManyYears; i++) {
        alert(i);
        document.getElementsByClassName("yearPanel")[i].appendChild(newItem);
      }
    
    
}