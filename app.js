const date = document.getElementById('date')
const day = document.getElementById('day')
const time = document.getElementById('time')

function updateDate() {
    const newDate = new Date();
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const getDay = newDate.getUTCDay()
    const getTime = newDate.getTimezoneOffset()
    const dayCalender = String(newDate.getDate()).padStart(2, '0');  // Day of the month, padded with leading zero if necessary
    const month = months[newDate.getMonth()];  // Month name
    const year = newDate.getFullYear();  // Year
    const dateString = `${dayCalender} ${month} ${year}`; 

    const hours = newDate.getHours();
            const minutes = String(newDate.getMinutes()).padStart(2, '0');  // Minutes padded with leading zero if necessary
            const seconds = String(newDate.getSeconds()).padStart(2, '0');  // Seconds padded with leading zero if necessary
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const hours12 = hours % 12 || 12;  // Convert to 12-hour format and handle midnight as 12

            const timeString = `${hours12}:${minutes}:${seconds} ${ampm}`; 
    day.textContent = days[getDay]
    date.textContent = dateString
    time.textContent = timeString
    console.log();
}
setInterval(updateDate,1000)