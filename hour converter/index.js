function timeConversion(s) {
    let time24 = s.slice(0,-2).split(":");

    if(s.slice(-2).toLowerCase() === "am") {
        if(time24[0] === "12") {
            time24[0] = "00";
            return time24.join(":");
        } else{
            return time24.join(":");
        };
    } else {
      if(time24[0] === "12") {
          return time24.join(":");
      } else {
          time24[0] = Number(time24[0]) + 12;
          return time24.join(":");
      };
    };
};

console.log(timeConversion("06:40:03AM"))