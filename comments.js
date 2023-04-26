
    //Число Armstronga, также известное как нарциссическое число, является число, которое равно сумме кубов своих собственных цифр.

    /*Число Armstronga, также известное как нарциссическое число,
    является число, которое равно сумме кубов своих собственных цифр.*/

    function narcissistic(value) {
        let str = String(value);
        let arr = str.split('');
        let sum = 0;
        for(let i = 0; i < arr.length; i ++){
            sum += Number(arr[i]) ** arr.length;
        }
        return (sum === value);

