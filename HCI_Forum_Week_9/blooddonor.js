function canGiveBlood(bT, rH) {
    if (bT.charAt(1) == "-") {
      if (bT.charAt(0) == "O") {
        return true;

      } else if (bT.charAt(0) == "A") {
        if (rH.charAt(0) == "A" || rH == "AB+") {
          return true;

        } else {
          return false;
        }
      }
    } else if (bT.charAt(0) == "B") {
      if (rH.charAt(0) == "B" || rH == "AB") {
        return true;

      } else {
        return false;
      }
    } else if (bT.charAt(1) == "+") {
      if (bT.charAt(0) == "O") {
        if (rH.charAt(1) == "+" || rH.charAt(2) == "+") {
          return true;

        } else {
          return false;
        }
      }
    } else if (bT.charAt(0) == "A") {
      if (rH == "A+" || rH == "AB+") {
        return true;

      } else {
        return false;
      }
    } else if (bT.charAt(0) == "B") {
      if (rH == "B+" || rH == "AB+") {
        return true;

      } else {
        return false;
      }
    } else if (bT == "AB+") {
      if (rH == "AB+") {
        return true;

      } else {
        return false;
      }
    } else if (bT == "AB-") {
      if (rH == "AB+" || rH == "AB-") {
        return true;

      } else {
        return false;
      }
    }
  }
  
  var a = canGiveBlood("O-", "A+");
  var b = canGiveBlood("A-", "B+");
  var c = canGiveBlood("A-", "AB+");
  
  console.log(a);
  console.log(b);
  console.log(c);