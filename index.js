function takeANumber(deliLine) {
  var customerNumber = (deliLine.length + 1)
  deliLine.push(customerNumber);

  if (deliLine.length === 0) {
    return "The line is currently empty."
  } else {
    return `Welcome. You are number ${deliLine.length}.`;
 }
}

function currentLine(lineArray) {
  var theList = "The line is currently";

  if (lineArray.length === 0) {
      return theList += " empty.";
}  else {
    theList += ": ";
    for (var i = 0; i < lineArray.length ; i++) {
      theList += (i < lineArray.length-1) ?
              `${i+1}. ${lineArray[i]}, `:`${i+1}. ${lineArray[i]}`;
    }
    return theList;
  }
}

function nowServing(deliLine) {
  var nowServedCustomer = deliLine.shift();

  if (!nowServedCustomer) {
    return "There is nobody waiting to be served!";
  }
else {
  return `Currently serving ${nowServedCustomer}.`;
  }
}
