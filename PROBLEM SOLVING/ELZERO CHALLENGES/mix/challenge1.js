 //==================ASSIGNMENTS 1-9==================//
 //======= assignments 1
//code number one will not work because interpreter cant see the element yet
// if you want to leave script in head you must tell him after page downloaded you execute the code
// window.onload = function(){
    //code goes here
//}

 //======= assignments 2
 document.write("<h1>Elzero</h1>");
 document.querySelector("h1").style.color = "blue";
 document.querySelector("h1").style.fontSize = "80px";
 document.querySelector("h1").style.fontWeight = "bold";
 document.querySelector("h1").style.textAlign = "center";
 document.querySelector("h1").style.fontFamily = "arial";
 
 
  //======= assignments 3
 console.group("%c group 1", "background: #333;color: #eee");
 console.log("message one");
 console.log("message two");
     console.groupCollapsed("child group");
     console.log("message one");
     console.log("message two");
         console.groupCollapsed("grand child group");
         console.log("message one");
         console.log("message two");
         console.groupEnd();
     console.groupEnd();
 console.groupEnd();
 
 console.group("%cgroup 2", "background-color:#444; color:#fff");
 console.log("message one");
 console.log("message two");
 
  //======= assignments 4
 console.log("%c style %c from %c console", "color:red; font-size:40px", "color:green; font-size:40px", "color:blue; font-size:40px");
 console.log('%c Oh my GOD! ', 'background: #222; color: #bada55');
 //5
 console.table(["alice", "bob", "charlie"]);
 
  //======= assignments 5
 // deactivate code with // or /* */
