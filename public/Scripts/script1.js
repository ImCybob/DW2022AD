function palChecker(event) {
    event.preventDefault();
  
    const inputVal = document.getElementById("inputVal").value;
    const input = inputVal.toLowerCase();
    console.log(input);
  
    const split = input.split("");
    let reverse = split.reverse();
    let revWord = reverse.join("");
    const result = document.getElementById("result");
  
    //Condition to check the palindrome
    if (revWord == input) {
      result.innerHTML = "Si es palindromoo!!!";
    } else {
      result.innerHTML = "Intenta de nuez :c";
    }
  }