var clickedElementText;
var clickedElementId;
var numberOfClick = 0;
var howManyYears;
var yearSelected;
var currentDate = new Date();
var currentYear = currentDate.getFullYear();




window.onload = function(){
   

   // page fully loaded

};

function getValue(){
       
    yearSelected = document.getElementById('begYear').value; // = 2014

    
    
    
    howManyYears =  (currentYear - yearSelected) - 1;  //  ( 2020 - 2014 ) -1 = 6

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
    addItemToYearPanels(clickedElementId,yearSelected,clickedElementText);

})


function addItemToYearPanels(itemId,spotBegYear,labelText){


    
    
    // var holderOrder = 0;

    for(spotBegYear; spotBegYear < currentYear;spotBegYear++){
 

        

        // var cln = newInputfield.cloneNode(true);
        // document.getElementById('year' + spotBegYear).appendChild(cln);

        // var holder = document.createElement('div');
        // holder.setAttribute('id',itemId + spotBegYear + holderOrder);

        var newlabel = document.createElement('label');
        var newLabelText = document.createTextNode(labelText);
        newlabel.appendChild(newLabelText);

        var newInputfield = document.createElement('input');
        newInputfield.setAttribute('id',itemId + spotBegYear);


        // document.getElementById('year' + spotBegYear).appendChild(holder);
        // document.getElementsByClassName('holder')[holderOrder].appendChild(newlabel);
        // document.getElementsByClassName('holder')[holderOrder].appendChild(newInputfield);
        document.getElementById('year' + spotBegYear).appendChild(newlabel);
        document.getElementById('year' + spotBegYear).appendChild(newInputfield);

        // holderOrder++;

        // newPanel.setAttribute('class','fade');
        

    }
    
    
}


function createTabsNPanels(year){


while (year < currentYear){  // 2014 < 2020
   
   
    createNewTab(year);

    createNewPAnel(year);
   
    year++;
   
}

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

 // 1- create LI
 // 2- create Anchor
 // 3- append anchor inside LI
 // 4- append LI to UL


        newListItem.appendChild(newAnchor);

        var tabs = document.getElementById('myTab');
        tabs.appendChild(newListItem);

}


function createNewPAnel(tabYear){
    

    // create panel for the tab


    

        var newPanel = document.createElement('div');
        newPanel.setAttribute('class','yearPanel');
        newPanel.setAttribute('class','tab-pane');
        // newPanel.setAttribute('class','fade');
        newPanel.setAttribute('role','tabpanel' + tabYear);
        newPanel.setAttribute('aria-labelledby','contact-tab' + tabYear);
        newPanel.setAttribute('id','year' + tabYear);

       

        var myTabContent = document.getElementById('myTabContent');

        myTabContent.appendChild(newPanel);

   

       

}