function studentGradeGenerator(mark) {

  if (mark >100 || mark <0) 
    {
    return "Wrong input, please enter a valid mark."
  }
  
  else if (mark==100 || mark >=80)
  {
    return "A";
}

else if (mark >=60 && mark <=79)
{
  return "B"
}

else if (mark >=50 && mark <=59)
{
  return "C"
}

else if (mark >=40 && mark <=49)
{
  return "D"
}

else if (mark >=0 && mark <=39)
{
  return "E"
}

}

//Enter the marks in place of "mark" in console.log function below.
console.log(studentGradeGenerator(mark))