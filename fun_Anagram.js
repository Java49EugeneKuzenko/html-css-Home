// 1.	Write function isAnagram
// 1.1.	Takes two parameters str1, str2 as strings
// 1.2.	Returns true if str2 is an anagram of the str1, below see the anagram rules
// 1.2.1.	The same length
// 1.2.2.	The same symbols only in different order
// 1.3.	Assumption: the strings contain only lower case letters
// 2.	Examples for word “yellow” with printing out “true”
// 2.1.	Console.log(isAnagram(word, “weloly”)
// 2.2.	Console.log(isAnagram(word, “leloyw”)
// 2.3.	Console.log(isAnagram(word, “wolley”)
// 2.4.	Console.log(isAnagram(word, “weloyl”)
// 3.	Example for word “yellow” with printing out “false”
// 3.1.	Console.log(isAnagram(word, “weloll”) (three “l” letters, should be two)
// 3.2.	Console.log(isAnagram(word, “leloy”) (should be with the same length)
// 3.3.	Console.log(isAnagram(word, “wollet”)  (letter “t” doesn’t exist)
// 3.4.	Console.log(isAnagram(word, “weloyo”) (two “o” letters, should be one)
// 4.	Implementation hints:
// 4.1.	Compare length values
// 4.2.	By iterating str1 (consider array) create an object similar to the one (occurrences) 
//         we have created at the classwork #18 (just no need to sort, sorting is time consuming 
//         operation and performed only if there is a requirement. It’s not a case)
// 4.3.	By iterating str2 (consider array) access an appropriate field in the object created in 4.2 
//      (No need to create occurrences object for the str2)
// 4.3.1.	If the field doesn’t exist return false
// 4.3.2.	If the field exists, decrement occurrences value
// 4.3.2.1.	If occurrences value is the negative after decrementing, return false
// 4.3.3.	After iteration the str2 return true with no additional check (think why we don’t need 
//          an additional check of the occurrences objects created in 4.2)

//  Eugene  Kuzenko

// There is no need to save the original string
// so I didn't make copies.

let str1 = "yellow";
let str2 = "yellow";
console.log();
isAnagram(str1, str2);
isAnagram(str1,"weloly");
isAnagram(str1,"leloyw");
isAnagram(str1,"wolley");
isAnagram(str1,"weloyl");
console.log();
isAnagram(str1,"weloll");
isAnagram(str1,"leloy");
isAnagram(str1,"wollet");
isAnagram(str1,"weloyo");
isAnagram(str1,"123456");
isAnagram(str1,'123erf00');
console.log();

function isAnagram(str1, str2) {
    let res = true;
    str2 = Array.from(str2);
    let arraystr1 = createArraystr1(str1,str2);
   str2.forEach((element) => {
        if(!arraystr1[element]) {
            res = false;
        }else {
            if (arraystr1[element] >= 0 ) {
              arraystr1[element]--;
            }
    }
    });
    prn(res,str2);
return res;
}

function createArraystr1(str1,str2) {
    str1 = Array.from(str1);
    const arr = {};
    if(str1.length === str2.length) {
        str1.forEach(element => arr[element] ? arr[element]++ : arr[element] = 1);
    }
return arr;
}

function prn(anagram,str2) {
    if (anagram) {
        console.log(`Your strings : "${str1}" and "${str2.join('')}" are anagrams`);
    } else {
        console.log(`Your strings : "${str1}" and "${str2.join('')}" are not anagrams`);
    }    
}

