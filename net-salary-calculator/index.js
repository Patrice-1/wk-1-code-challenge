
  function payeRate(Salary) {

  if (Salary >=0 && Salary <=24000) 
    {
    return "0.10"
  }

  else if (Salary >=24001 && Salary <=32333)
    {
    return "0.25"
  }

  else if (Salary >=32334 && Salary <=500000)
    {
    return "0.30"
  }

  else if (Salary >=500001 && Salary <=800000)
    {
    return "0.325"
  }

  else if (Salary >=800001)
    {
    return "0.35"
  }
}

   

function nhif(Salary) {
  if (Salary >=0 && Salary <=5999)
    {
    return "150"
    }
    else if (Salary >=6000 && Salary <=7999)
      {
      return "300"   
    }

    else if (Salary >=8000 && Salary <=11999)
      {
      return "400"
    }
    else if (Salary >=12000 && Salary <=14999)
      {
      return "500"
    }
    else if (Salary >=15000 && Salary <=19999)
      {
      return "600"
    }
    else if (Salary >=20000 && Salary <= 24999)
      {
      return "750"
    }
    else if (Salary >=25000 && Salary <=29999)
      {
      return "850"
    }
    else if (Salary >=30000 && Salary <=34999)
      {
      return "900"
    }
    else if (Salary >=35000 && Salary <=39999)
      {
      return "950"
    }
    else if (Salary >=40000 && Salary <=44999)
      {
      return "1000"
    }
    else if (Salary >=45000 && Salary <=49999)
      {
      return "1100"
    }
    else if (Salary >=50000 && Salary <=59999)
      {
      return "1200"
    }
    else if (Salary >=60000 && Salary <=69999)
      {
      return "1300"
    }
    else if (Salary >=70000 && Salary <=79999)
      {
      return "1400"
    }
    else if (Salary >=80000 && Salary <=89999)
      {
      return "1500"
    }
    else if (Salary >=90000 && Salary <=99999)
      {
      return "1600"
    }
    else if (Salary >100000)
      {
      return "1700"
    }

  }

  function nssf(pension) {
    if (pension >=0 && pension <=7000)
      {
        return(pension);
  } 
  else (pension >=7001 && pension <=36000)
    {
    return pension;}
    }

//enter salary value in place of "salary" below
  console.log(payeRate(Salary));

  

  console.log(nhif(Salary));
  console.log(nssf(pension));
 
  function paye(payeRate) {
    if (paye= payeRate*Salary)
    return paye;
  }
  console.log(paye(payeRate));


  function netSalary(grossSalary, paye, nhif, nssf) {
    return grossSalary - (paye + nhif + nssf);
  }
  console.log(netSalary(Salary, paye, nhif, nssf));