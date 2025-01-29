const colors = [
    'rgba(75, 192, 192, 1)',  // Teal
    'rgba(255, 99, 132, 1)',  // Red
    'rgba(54, 162, 235, 1)',  // Blue
    'rgba(255, 206, 86, 1)',  // Yellow
    'rgba(153, 102, 255, 1)', // Purple
    'rgba(255, 159, 64, 1)'   // Orange
];

function generateNiceColor() {
    const hue = Math.floor(Math.random() * 360); // Hue: 0-360 (full color wheel)
    const saturation = Math.floor(Math.random() * 21) + 30; // Saturation: 60-100%
    const lightness = Math.floor(Math.random() * 21) + 30; // Lightness: 40-60%
    return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

function hslToRgba(hsl) {
    const [h, s, l] = hsl.match(/\d+/g).map(Number);
    const a = 1; // Default alpha
    const c = (1 - Math.abs(2 * l / 100 - 1)) * (s / 100);
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l / 100 - c / 2;
    let [r, g, b] = [0, 0, 0];
    if (h >= 0 && h < 60) [r, g, b] = [c, x, 0];
    else if (h >= 60 && h < 120) [r, g, b] = [x, c, 0];
    else if (h >= 120 && h < 180) [r, g, b] = [0, c, x];
    else if (h >= 180 && h < 240) [r, g, b] = [0, x, c];
    else if (h >= 240 && h < 300) [r, g, b] = [x, 0, c];
    else if (h >= 300 && h < 360) [r, g, b] = [c, 0, x];
    r = Math.round((r + m) * 255);
    g = Math.round((g + m) * 255);
    b = Math.round((b + m) * 255);
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

for (let i = 0; i < 50; i++) {
    const hslColor = generateNiceColor();
    const rgbaColor = hslToRgba(hslColor);
    colors.push(rgbaColor);
}

function GetReverseTodayDate() {
    const today = new Date();
    const todayReverseString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;
    return new Date(todayReverseString);
    //return new Date("2025-01-26");
}

function decimalToTime(decimal) {
    const hours = Math.floor(decimal);
    const minutes = Math.floor((decimal - hours) * 60);
    const seconds = Math.floor((decimal - hours - minutes / 60) * 3600);
    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function timeToDecimal(time) {
    const [hours, minutes, secounds] = time.split(':').map(Number);
    return hours + minutes / 60 + secounds / 3600;
}

function timeToSeconds(time) {
    const [hours, minutes, seconds] = time.split(':').map(Number);
    return hours * 3600 + minutes * 60 + seconds;
}


function calculateDuration(startTime, endTime) {
    // Parsowanie czasu w formacie hh:mm:ss
    const [startHours, startMinutes, startSeconds = 0] = startTime.split(':').map(Number);
    const [endHours, endMinutes, endSeconds = 0] = endTime.split(':').map(Number);

    // Konwersja na sekundy
    const startTotalSeconds = startHours * 3600 + startMinutes * 60 + startSeconds;
    const endTotalSeconds = endHours * 3600 + endMinutes * 60 + endSeconds;

    // Obliczenie ró¿nicy w sekundach
    const durationInSeconds = endTotalSeconds - startTotalSeconds;

    if (durationInSeconds < 0) {
        return "[durationInSeconds < 0]";
    }

    // Konwersja na hh:mm:ss
    const hours = Math.floor(durationInSeconds / 3600);
    const minutes = Math.floor((durationInSeconds % 3600) / 60);
    const seconds = durationInSeconds % 60;

    if (durationInSeconds < 60) {
        return `${seconds} sec`;
    }
    else if (durationInSeconds < 3600) {
        return `${minutes} min ${String(seconds).padStart(1, '0')} sec`;
    }
    else {
        return `${hours} h ${String(minutes).padStart(2, '0')} min ${String(seconds).padStart(2, '0')} sec`;
    }
}