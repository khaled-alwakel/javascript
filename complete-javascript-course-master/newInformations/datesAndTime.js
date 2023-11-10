 const today = new Date();
 console.log(today);

 console.log(new Date("07 24 1984"));
 // year, month, day, hour, minute, second
 console.log(new Date(2024, 0, 1, 5, 2, 3));

 console.log(new Date(2024, 10, 35)); // it will correct and the month will be december

 // pass the amount of milliseconds passes since the beginning of the unix time 1/1/1970
 console.log(new Date(0));

 // 3 days(in milleseconds) after the initial unix time (time stamp of the day number three )
 console.log(new Date(3 * 24 * 60 * 60 * 1000));

 console.log(Date.now());

 // Working with dates
 const future = new Date(2030, 0, 13, 5, 2);
 console.log(future);
 console.log(future.getFullYear());
 console.log(future.getMonth()); // zero based
 console.log(future.getDate()); // day of month
 console.log(future.getDay()); // day of week zero based starting from sunday
 console.log(future.getHours());
 console.log(future.getMinutes());
 console.log(future.getSeconds());

 console.log(future.toISOString());
 console.log(future.toUTCString());

 // working with  the time stamp
 console.log(future.getTime()); // date in  melliseconds
 console.log(new Date(1894503720000));


 future.setFullYear("2055");
 console.log(future);

 future.setDate(29);
 console.log(future);

 //* Operations with dates

 console.log(Number(future));
 console.log(+future);

// age in years
 const daysPassed = (date1, date2) =>
   (date1 - date2) / (1000 * 60 * 60 * 24 * 30 * 12);

 console.log(daysPassed(new Date(2024, 7, 24), new Date(1984, 7, 24)));

 //=====================
 // Internationalizing dates (intl)
 const now = new Date();
 const options = {
   hour: "numeric",
   minutes: "numeric",
   day: "numeric",
   month: "long",
   year: "numeric",
   weekday: "long",
 };

 // try this in browser, it will get the locale from user's browser
 // const locale = navigator.language;
 // console.log(locale);

 // United states
 console.log(new Intl.DateTimeFormat("en-US").format(now));
 console.log(new Intl.DateTimeFormat("en-US", options).format(now));

 // Portugal
 console.log(new Intl.DateTimeFormat("pt-PT").format(now));
 console.log(new Intl.DateTimeFormat("pt-PT", options).format(now));

 // Czech
 console.log(new Intl.DateTimeFormat("cs-CZ").format(now));
 console.log(new Intl.DateTimeFormat("cs-CZ", options).format(now));

 // Egypt
 console.log(new Intl.DateTimeFormat("ar-EG").format(now));
 console.log(new Intl.DateTimeFormat("ar-EG", options).format(now));

 // Denmark
 console.log(new Intl.DateTimeFormat("da-Dk").format(now));
 console.log(new Intl.DateTimeFormat("da-DK", options).format(now));

 //=====================
 console.log('==>>Internationalizing numbers')
 // Internationalizing numbers (intl)
 const num = 3884764.23;
 const numberOptions = {
   style: "currency",
   currency: "USD", // 'EUR'
 };

 // United states
 console.log("United states:", new Intl.NumberFormat("en-US").format(num));
 console.log(
   "United states:",
   new Intl.NumberFormat("en-US", numberOptions).format(num)
 );



 // *=================TIMERS=====================*
 const ingredients = ["olives", "spinach"];
 const pizzaTimer = setTimeout(
   (ing1, ing2) => {
     console.log(`here is your pizza with ${ing1} and ${ing2} :)`);
   },
   3000,
   ...ingredients
 );
 console.log("waiting");
 if (ingredients.includes("spinach")) clearTimeout(pizzaTimer);

 // setInterval
 // setInterval(() => {
 //   console.log(new Date());
 // }, 1000);

 // clearInterval();

 // Expire after 5 minutes

const startLogOutTimer = () => {
  let time = 10;

  const countDown = setInterval(() => {
    const min = Math.trunc(time / 60);
    const sec = time % 60;
    console.log(`${min}:${sec}`);

    if (time === 0) clearInterval(countDown);
    time--;

  }, 1000);
};

console.log(startLogOutTimer());
