function scuberGreetingForFeet(distance){
  // Write your code here!
  let result;
  if (distance <= 400){
    result ="This one is on me!";
  }
  else if (distance >2500){
    result = "No can do.";
  }
  else{
    result = "I will gladly take your thirty bucks.";
  }
  return result;
}

function ternaryCheckCity(city){
  // Write your code here!
  return city ==='NYC' ? "Ok, sounds good.": 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;
  switch (tip){
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
          return'Bye.';
  }
  return response;

}