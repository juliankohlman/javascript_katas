// In this Kata, you will be given an array of strings and your task is to remove
// all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be alphabet characters only. Don't worry about lower and upper
// case. See test cases for more examples.

function dup (s) {
  // m[0] should  be '$1' which corresponds to each submatched string
  // which means you don't even need the last arrow function m => m[0]
  return s.map(i => i.replace(/(.)\1+/g, m => m[0])
}

// ES6
// const dup = (s) => s.map(i => i.replace(/(.)\1+/g, $1));


dup(['ccooddddddewwwaaaaarrrrsssss', 'piccaninny', 'hubbubbubboo']) // ['codewars','picaniny','hubububo']);
dup(['abracadabra', 'allottee', 'assessee']) // ['abracadabra','alote','asese']);
dup(['kelless', 'keenness']) // ['keles','kenes']);
dup(['Woolloomooloo', 'flooddoorroommoonlighters', 'chuchchi']) // ['Wolomolo','flodoromonlighters','chuchchi']);
dup(['adanac', 'soonness', 'toolless', 'ppellee']) // ['adanac','sones','toles','pele']);
dup(['callalloo', 'feelless', 'heelless']) // ['calalo','feles','heles']);
dup(['putteellinen', 'keenness']) // ['putelinen','kenes']);
dup(['kelless', 'voorraaddoosspullen', 'achcha']) // ['keles','voradospulen','achcha']);
