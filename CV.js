function alterdate() {
var x = new Date(document.lastModified);
document.getElementById("now").innerHTML = x;
}

function swap() {
  if (document.getElementById("picture").src.endsWith('angel.jpg'))  //==:Comparison
   {
      document.getElementById("picture").src = "angel2.jpg"; //=:assignment
   }
   else
      document.getElementById("picture").src = "angel.jpg";

}
