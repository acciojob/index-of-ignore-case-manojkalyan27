function indexOfIgnoreCase(s1, s2) {
  // write your code here
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();
	
// let flag = -1;
// for (let i = 0; i < s2.length; i++) {
// 	for (let j = 0; j < s1.length; j++) {
// 		if(s2[i] === s1[j]){
// 			flag = i;
// 		}
// 	}
	
// }

	for (let i = 0; i <= S1.length - S2.length; i++) {
        let found = true;
        for (let j = 0; j < S2.length; j++) {
            if (S1[i + j] !== S2[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return i;
        }
    }
    // If not found, return -1
    return -1;
	
	
}

// Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
 