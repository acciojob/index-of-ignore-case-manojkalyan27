function indexOfIgnoreCase(s1, s2) {
  // write your code here
	s1 = s1.toLowerCase();
	s2 = s2.toLowerCase();

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
    return -1;
	
	
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
 