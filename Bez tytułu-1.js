// Zwraca true w momencie gdy parametr jest liczbą parzystą.
function isEven(a) {
    if(a%2==0){
        return true;
    }
}

// Zwraca true jeśli parametr jest liczbą.
function isNumber(a) {
  if (!(isNaN(a)))
    return true;
  else
    throw "Element tablicy nie jest liczbą";
}

// Zwraca sumę liczb parzystych w tablicy.
// Funkcja powinna sprawdzać czy:
// - parametr jest tablicą
// - elementy tablicy są liczbami
function sumArray(arr) {
    if (Array.isArray(arr)) {
        let counter = 0;
        for(let i=0; i<=arr.length; i++){
            if(isEven(arr[i]) && isNumber(arr[i])){
                counter +=arr[i];  
                  } 
        }
        return counter;
    } else {
        throw "Parametr nie jest tablicą";
    }
}

// Liczy liczbę wystąpień danego znaku w podanym ciągu znaków. Dla 'aba' -> { 'a': 2, 'b': 1 }
function countChars(str) {

}