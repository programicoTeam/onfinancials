var clickedElementText;
var clickedElementId;
var numberOfClick = 0;
var selectedYears = document.getElementsByClassName("yearPanel");
var howManyYears;
var yearSelected;
var currentDate = new Date();
var currentYear = currentDate.getFullYear();



window.onload = function(){
   

   // page fully loaded


   



};

function getValue(){
    yearSelected = document.getElementById('begYear').value;
    
    howManyYears =  (currentYear - yearSelected) - 1;

    // create new tabs and panels that are equal to the value on howManyYears variable

    createTabsNPanels(yearSelected);
}


document.getElementById("list").addEventListener("click", function(e) {
    
    

    // get the text inside the clicked item
    clickedElementText = e.target.innerText;
    
    // get the id of the clicked item
    clickedElementId = e.target.id;
    
    // increament numberofclick variable
    numberOfClick++;

    // add item to yearPanel
    addItemToYearPanels(clickedElementText,clickedElementId);

})


function addItemToYearPanels(itemText,itemId){
    
    // create new item text field
    var newItem = document.createElement("INPUT");
    newItem.setAttribute("type", "text");
    newItem.setAttribute("class", itemId + numberOfClick);

    document.getElementsByClassName("yearPanel")[0].appendChild(newItem);

    // append the newItem to all divS with yearPanel class
    for (i = 1; i < howManyYears; i++) {
        alert(i);
        var cln = newItem.cloneNode(true);
        document.getElementsByClassName("yearPanel")[i].appendChild(cln);
      }
    
    
}


function createTabsNPanels(year){


while (yearSelected < currentYear){
   
   
    createNewTab(yearSelected);
   
    createNewPAnel();
   
    yearSelected++;
   
}

   // create panel for the tab


//    var newPanel = document.createElement('div');
//    newPanel.setAttribute('class','yearPanel');
//    newPanel.setAttribute('class','tab-pane');
//    newPanel.setAttribute('class','fade');
//    newPanel.setAttribute('role','tabpanel');
//    newPanel.setAttribute('aria-labelledby','contact-tab');
//    newPanel.setAttribute('id','year2020');


//    var myTabContent = document.getElementById('myTabContent');

//    myTabContent.appendChild(newPanel);



}


function createNewTab(tabYear){


        // create new tab
        var newListItem = document.createElement('li');
        newListItem.setAttribute('class','nav-item');

        var newAnchor = document.createElement('a');
        newAnchor.setAttribute('class','nav-link');
        newAnchor.setAttribute('href','#year' + tabYear);
        newAnchor.setAttribute('id','year' + tabYear +'-tab');
        newAnchor.setAttribute('data-toggle','tab');
        newAnchor.setAttribute('role','tab');
        newAnchor.setAttribute('aria-controls','contact');
        newAnchor.setAttribute('aria-selected','false');
        newAnchor.appendChild(document.createTextNode(tabYear));




        newListItem.appendChild(newAnchor);

        var tabs = document.getElementById('myTab');
        tabs.appendChild(newListItem);

}


function createNewPAnel(){
    
}