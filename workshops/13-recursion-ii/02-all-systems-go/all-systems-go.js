// YOUR CODE BELOW

function allSystemsGo(systems) {
    // one false makes a false return
    // all must be true
    
    for (var key in systems) {
      if(typeof systems[key] === "object") {
        // recursive case
        var innerSystems = allSystemsGo(systems[key]);
        if (innerSystems !==true) {
          return false;
        }
      }
      else if (systems[key] !== true) {
        return false;
      }
    }
  return true;
  }
  
  allSystemsGo(systems);