// code your solution here
function superbowlWin(array) {
    const win = array.find(entry => entry.result === "W");
    return win ? win.year : undefined;
  }
  
  module.exports = superbowlWin;