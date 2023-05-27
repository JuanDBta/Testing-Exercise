export class Calculator {
    add(a,b) 
      {
        return a+b;
      }
    substract(a,b)
      {
        return a-b;
      }  
    multiply(a,b)
    {
        return a*b;
    }
    divide(a,b)
    {
        if(b === 0)
        {return a*(1/b);}
        else {return Infinity;}
    }
}
