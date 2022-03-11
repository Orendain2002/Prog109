var msg = '<h2>Multiplication Table</h2>';
    document.getElementById("blackboard").innerHTML = msg;
    /*Using the stored information, Multiplication Table heading 2, in msg, I decided to add/write this variable, msg, 
    in between the section with the id blackboard, 
    so that the heading could appear in the blackboard*/
var table = prompt("Choose a number between 0-10");
var y = 1;
  for (i=0; i<11; i++) {
    document.write(table, "X", + i, "=", table*i*y, "<br>");
  }
/*A commonly used Loop. Inside the parenthesis are statements used in the loop until it has reached or satisfied the statements.
this loop uses the prompt/table variable chosen by the person and repeats the number/along with the other variables
until it reaches less than 11. The y variable that equals 5, is used next to it to show the equation and multiplication result.
With the added br tag so that the resulting repeating equations until less than 11 is shown as a column.
*/
