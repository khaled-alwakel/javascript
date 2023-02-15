//* ASSIGNMENTS 169 => 178
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();

myRequest.onreadystatechange = function () {

  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
    console.log("Data Loaded");
    let mainData = JSON.parse(this.responseText);
    for (let i = 0; i < mainData.length; i++) {
      mainData[i].category="All";
    }
    console.log(mainData);
  
    let UpdatedData = JSON.stringify(mainData);
    console.log(UpdatedData);
  
    let section = document.createElement("section");
    section.style.cssText =
      ` width:90%;
        margin:20px auto;
      `
    section.setAttribute("id", "data");
    document.body.appendChild(section)
    
    for (let j = 0; j < mainData.length; j++){
      //* update category
      mainData[j].category = JSON.parse(this.responseText)[j].category
      // div
      let div = document.createElement("div");

      // title
      let titleElement = document.createElement("h2");
      let title = document.createTextNode(mainData[j].title);
      
      titleElement.appendChild(title);
      div.appendChild(titleElement);

      //body 
      let bodyElement = document.createElement("p");
      let body = document.createTextNode(mainData[j].body);
   
      bodyElement.appendChild(body);
      div.appendChild(bodyElement);

      //author
      let authorElement = document.createElement("p");
      let author = document.createTextNode(mainData[j].author);
      let key4 = document.createTextNode(Object.keys(mainData[0])[4]);
      let space2 = document.createTextNode(" : ");
      authorElement.appendChild(key4);
      authorElement.appendChild(space2);
      authorElement.appendChild(author);
      div.appendChild(authorElement);

      //category
      let categoryElement = document.createElement("p")
      let category = document.createTextNode(mainData[j].category);
      let key2 = document.createTextNode(Object.keys(mainData[0])[3]);
      let space3 = document.createTextNode(" : ");
      categoryElement.appendChild(key2);
      categoryElement.appendChild(space3);
      categoryElement.appendChild(category);
      div.appendChild(categoryElement);
      section.appendChild(div);

      // add style
      div.style.cssText = `
      padding:20px;
      background-color:#444;
      text-align:center;
      border:1px solid #ccc;
      border-radius:20px;
      margin:30px auto;
      color:white;
      text-transform:capitalize;
      font-family:courier,serif;
  
    `
    bodyElement.style.cssText=`color:lightblue`
    }
   
  }
};




