let leftNum = "";
let rightNum = "";
let of = false; //operation flag
let df = false; //decimal flag
let oc = 0; // operation code: divide 0, multiply 1, add 2, subtract 3
let result = 0;

const output = document.getElementById("output");
const numpad = document.getElementById("numpad");
const oppad = document.getElementById("oppad");

//key functions
numpad.addEventListener("click", (e) => {
  let num = e.target.textContent;

  if(of) {
    if(rightNum == 0) {
      rightNum = num;
      output.textContent = rightNum;
    }
    else {
      rightNum = rightNum + num;
      output.textContent = rightNum;
    }
  }
  else {
    if(leftNum == 0) {
      leftNum = num;
      output.textContent = leftNum;
    }
    else {
      leftNum = leftNum + num;
      output.textContent = leftNum;
    }
  }  
});

document.addEventListener("keyup", (e) => {
  let validKey = '';

  switch(e.key) {
    case '1': 
      validKey = e.key;
      break;
    case '2': 
      validKey = e.key;
      break;
    case '3': 
      validKey = e.key;
      break;
    case '4': 
      validKey = e.key;
      break;
    case '5': 
      validKey = e.key;
      break;
    case '6': 
      validKey = e.key;
      break;
    case '7':
      validKey = e.key;
      break;
    case '8': 
      validKey = e.key;
      break;
    case '9': 
      validKey = e.key;
      break;
    case '0': 
      validKey = e.key;
      break;
    case '+': 
      validKey = e.key;
      break;
    case '-': 
      validKey = e.key;
      break;
    case '/': 
      validKey = e.key;
      break;
    case '*': 
      validKey = e.key;
      break;
    case '=': 
      validKey = e.key;
      break;
    case 'Backspace': 
      validKey = e.key;
      break;
    case 'c': 
      validKey = e.key;
      break;
    case '.':
      validKey = e.key;
      break;
    default: 
      return;
  }
  
  if(validKey >= '0' && validKey <= '9') {
    if(of) {
      if(rightNum == 0) {
        rightNum = validKey;
        output.textContent = rightNum;
      }
      else {
        rightNum = rightNum + validKey;
        output.textContent = rightNum;
      }
    }
    else {
      if(leftNum == 0) {
        leftNum = validKey;
        output.textContent = leftNum;
      }
      else {
        leftNum = leftNum + validKey;
        output.textContent = leftNum;
      }
    }
  }
  else {
    if(validKey == 'c') {
      back();
    }
    else if(validKey == 'Backspace') {
      clear();
    }
    else if(validKey == '/') {
      setOp(0);
      df = false;
    }
    else if(validKey == '*') {
      setOp(1);
      df = false;
    }
    else if(validKey == '+') {
      setOp(2);
      df = false;
    }
    else if(validKey == '-') {
      setOp(3);
      df = false;
    }
    else if(validKey == '=') {
      equal();
      df = false;
    }
    else if(validKey == ".") {
      if(df == false) {
        if(of) {
          rightNum = rightNum + '.';
          output.textContent = rightNum;
        }
        else {
          leftNum = leftNum + '.';
          output.textContent = leftNum;
        }
      }
      df = true;
    }
  }
});
//------------------------------------------

oppad.addEventListener("click", (e) => {
  const op = e.target.id;

  if(op == "back") {
    back();
  }
  else if(op == "clear") {
    clear();
  }
  else if(op == "divide") {
    setOp(0);
    df = false;
  }
  else if(op == "times") {
    setOp(1);
    df = false;
  }
  else if(op == "add") {
    setOp(2);
    df = false;
  }
  else if(op == "subtract") {
    setOp(3);
    df = false;
  }
  else if(op == "equal") {
    equal();
    df = false;
  }
  else if(op == "decimal") {
    if(df == false) {
      if(of) {
        rightNum = rightNum + '.';
        output.textContent = rightNum;
      }
      else {
        leftNum = leftNum + '.';
        output.textContent = leftNum;
      }
    }
    df = true;
  }
});

function back() {
  if(of) {
    if((rightNum - rightNum % 10) / 10 > 0) {
      rightNum = (rightNum - rightNum % 10) /  10;
    }
    else {
      rightNum = 0;
    }
    output.textContent = rightNum;
  }
  else {
   if((leftNum - leftNum % 10) / 10 > 0) {
      leftNum = (leftNum - leftNum % 10) /  10;
    }
    else {
      leftNum = 0;
    }
    output.textContent = leftNum;
  }
}

function clear() {
  leftNum = 0;
  rightNum = 0;
  output.textContent = leftNum;
  of = false;
  df = false;
}

function setOp(opCode) {
  oc = opCode;

  if(of == false) {
   of = true;
  }
}

function equal() {
  of = false; //reset flag
  
  // operation code: divide 0, multiply 1, add 2, subtract 3
  if(oc == 0) {
    result = leftNum / rightNum;
    output.textContent = result;
    rightNum = 0;
    leftNum = result;
  }
  else if(oc == 1) {
    result = leftNum * rightNum;
    output.textContent = result;
    rightNum = 0;
    leftNum = result;
  }
  else if(oc == 2) {
    result = Number(leftNum) + Number(rightNum);
    output.textContent = result;
    rightNum = 0;
    leftNum = result;
  }
  else {
    result = leftNum - rightNum;
    output.textContent = result;
    rightNum = 0;
    leftNum = result;
  }
}
