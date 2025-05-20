// function getSubscriptionPrice(type) {
//     switch (type) {
//         case "starter": return 0; break;
//         case "professional": return 20; break;
//         case "organization": return 50; break;
//     default: return "Invalid subscription type!";
//     }
//   }


// function isNumberInRange(start, end, number) {
//     return number >= start && number <= end;
// }


// function checkAccess(subType) {
//     return subType === "pro" || subType === "vip";
//   }


// function toggleModalVisibility(isVisible) {
//     return !isVisible;
//   }


// function getSubstring(string, length) {
//     return string.slice(0, length);
//   }


// function normalizeInput(input, to) {
//     return to == "upper" ? input.toUpperCase() : input.toLowerCase();
//   }
  

// function checkForName(fullName, firstName) {
//     fullName = fullName.toLowerCase();
//     return fullName.includes(firstName.toLowerCase());
//   }
  

// function checkFileExtension(fileName, ext) {
//     return fileName.endsWith(ext) ? "File extension matches" : "File extension does not match";
// }
  

// function getFileName(file) {
//     if (file.includes(".")) {
//         return file.slice(0, file.indexOf("."));
//     }
//     else { return file; }
// }
  

// function createFileName(name, ext) {
//     return name.trim() + "." + ext.trim();
// }


// function calculateTotal(number) {
//     let total = 0;
//     while (number > 0) {
//       total += number;
//       number--;
//     }
//     return total;
//   }


// function calculateTotal(number) {
//     let total = 0;
//     for (let n = 1; n <= number; n += 1) {
//       total += n;
//     }
//   return total;
//   }


// function calculateEvenTotal(number) {
//     let total = 0;
//     for (let i = 2; i <= number; i += 2) {
//         total += i;
//     }
//     return total;
// }
  

// let start = 6;
// let end = 17;
// let number;
// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }


function findNumber(start, end, divisor) {
    for (let i = start; i <= end; i++)
      if (i % divisor === 0) {
        return i;
      }
  }

console.log(findNumber(16, 35, 7));
