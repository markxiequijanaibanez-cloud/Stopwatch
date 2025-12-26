# Stopwatch

A sleek web-based stopwatch application with both digital and analog displays, featuring lap timing functionality.

## Features

- Digital time display (MM:SS.T format)
- Analog clock hand animation
- Start, Pause, Reset, and Lap buttons
- Lap time recording and display
- Real-time updates using requestAnimationFrame
- Responsive design

## How to Use

1. Open `index.html` in your web browser.
2. Click "Start" to begin timing.
3. Click "Pause" to temporarily stop the timer.
4. Click "Reset" to clear the timer and lap records.
5. Click "Lap" to record a lap time while timing.
6. View your lap times in the list below the controls.

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)

## Project Structure

```
Stopwatch/
├── index.html    # Main HTML file
├── style.css     # Styling for the stopwatch
├── app.js        # JavaScript logic for timing and controls
└── img/          # Images and assets
```

## Features in Detail

- **Digital Display**: Shows time in minutes:seconds.tenths format
- **Analog Hand**: Rotates smoothly to show seconds
- **Lap Functionality**: Records and displays multiple lap times
- **Performance Optimized**: Uses requestAnimationFrame for smooth animations

## License

This project is open source and available under the [MIT License](LICENSE).