function scuberGreetingForFeet(feet) {
  // Write your code here!
  if (feet <= 400) {
    return 'This one is on me!'
  } else if (feet > 2000) {
    if (feet > 2500) {
      return 'No can do.'
    } else {
      return 'I will gladly take your thirty bucks.'
    }
  }
};
function ternaryCheckCity(city) {
  return (city === 'NYC' ? "Ok, sounds good.": "No go.")
}
  // Write your code here!
function switchOnCharmFromTip(tip) {
 // Write your code here!
switch (tip) {
case 'generous':
  return 'Thank you so much.';
break;
case 'not as generous':
  return 'Thank you.';
break;
case 'thanks for everything':
  return 'Bye.';
break;
}
}