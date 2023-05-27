
//Arrange
const reverseString = (string) => {
    return string.split("").reverse().join("");
}

//Act
let stringg = "Hola Mundo!"
let resultt = reverseString(stringg);

//Assert
console.log(resultt === "!odnuM aloH");
