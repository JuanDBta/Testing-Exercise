//Arrange
const stringLength = (string) => {
    
    if(string.length < 1)
      {
        return "Error: string length is less than 1 character";
      } else if ((string.length > 10))
      {
        return "Error: string length is larger than 10 character";
      } else return "String length is "+ string.length;
}

//Act
let string = "testing";
let result = stringLength(string);


//Assert
console.log (result === "String length is 7");

