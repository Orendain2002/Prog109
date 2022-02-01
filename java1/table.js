var msg = '<h2>Multiplication Table</h2>';
    document.getElementById("blackboard").innerHTML = msg;
    /*I decided to add/write this variable, msg, 
    in between the section with the id blackboard, 
    so that the heading could appear in the blackboard*/
var table = prompt("Choose a number between 0-10");
var y = 5;
  for (table; table<11; table++) {
    document.write(table, "X", + y, "=", table*y, "<br>");
  }
/*this loop uses the prompt/table variable chosen by the person and repeats the number/along with the other variables
until it reaches less than 11. The y variable that equals 5, is used next to it to show the equation and multiplication result.
With the added br tag so that the resulting repeating equations until less than 11 is shown as a column.
*/