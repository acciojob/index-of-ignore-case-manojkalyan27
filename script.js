function indexOfIgnoreCase(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    for (let i = 0; i <= s1.length - s2.length; i++) {
        let found = true;
        for (let j = 0; j < s2.length; j++) {
            if (s1[i + j] !== s2[j]) {
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

// Usage example for browser environment
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
