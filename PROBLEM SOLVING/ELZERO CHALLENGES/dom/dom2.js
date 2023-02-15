//*==========ASSAIGNMENTS 94 =>101=========//

let add = document.querySelector(".classes-to-add");
let remove = document.querySelector(".classes-to-remove");
let spansDiv = document.querySelector(".classes-list > div");
let msg = document.createTextNode("NOTHING TO SHOW");


add.onblur = _ => {
    let myText = document.createTextNode(add.value.toLowerCase());
    if (myText.textContent.includes(" ")) {
        myText = myText.textContent.split(" ");
        for (let i = 0; i < myText.length; i++){
            let myItem = document.createElement("span");
            let content = document.createTextNode(myText[i])
            myItem.appendChild(content);
            spansDiv.appendChild(myItem);
        }
    } else {
        let myItem = document.createElement("span");
        let myText = document.createTextNode(add.value.toLowerCase());
        myItem.appendChild(myText);
        spansDiv.appendChild(myItem);
    }
    add.value = ""; 
}

remove.onblur = _ => {
    let deleted = document.createTextNode(remove.value.toLowerCase());

    for (let i = 0; i < spansDiv.children.length; i++) {
        if (spansDiv.children[i].textContent === deleted.textContent)
            spansDiv.removeChild(spansDiv.children[i]);
    }

    remove.value = "";
    if (spansDiv.children.length == 0) {
        spansDiv.appendChild(msg);
    } else {
        spansDiv.removeChild(msg);
    }

}


