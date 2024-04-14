const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    const inp = document.querySelector("#birthdate").value;
    const result = document.querySelector("#result");
    const birthDate = new Date(inp);
    const currentDate = new Date();

    differenceInMilliseconds = currentDate - birthDate;
    const second = Math.floor(differenceInMilliseconds / 1000);
    const minute = Math.floor(second / 60);
    const hour = Math.floor(minute / 60);
    const day = Math.floor(hour / 24);
    const month = Math.floor(day / 30);
    const year = Math.floor(month / 12);
    const remainingMonth = month % 12;
    const remainingDays = day % 30;
    if (inp) {
        result.innerHTML = `Your age is ${year} years, ${remainingMonth} months, and  ${remainingDays} days`;
    } else {
        result.innerHTML = "Enter Your Birthdate...";
    }
});