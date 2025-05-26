export function showGreetingMessage(){
  const currentHour = new Date().getHours();
  let greetingMSG = '';

  if (currentHour >= 0 && currentHour < 12) {
    greetingMSG = 'Good Morning!';
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMSG = 'Good Afternoon!';
  } else {
    greetingMSG = 'Good Evening!';
  }
  return greetingMSG;
}
