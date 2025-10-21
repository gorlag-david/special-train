# Mobile Train Animation

A smooth, interactive train animation optimized for mobile devices with customizable speed, day/night modes, and visual filters.

## Features

### Speed Control
- **Slow**: Relaxed train movement (20s duration)
- **Normal**: Standard speed (10s duration)
- **Fast**: High-speed train (5s duration)

### Day/Night Modes
- **Day Mode**: Bright sky with sun, white clouds, and brown ground
- **Night Mode**: Dark sky with moon, twinkling stars, and darker scenery

### Visual Filters
The animation includes 10 different filter effects:
- **None**: Original colors
- **Sepia**: Vintage warm tone
- **B&W**: Black and white (grayscale)
- **Blur**: Soft motion blur effect
- **Bright**: Increased brightness
- **Contrast**: Enhanced contrast
- **Saturate**: More vibrant colors
- **Hue**: Color-shifted palette
- **Invert**: Inverted colors
- **Vintage**: Sepia + contrast combination

## Animation Elements

### Train Components
- **Engine**: Red locomotive with blue cabin and windows
- **Chimney**: Animated smoke effect
- **Cargo Cars**: Three colorful cargo cars (orange, green, blue)
- **Wheels**: Rotating wheels that sync with train speed
- **Shadows**: Drop shadow for depth

### Environment
- **Animated Clouds**: Floating clouds across the sky
- **Stars**: Twinkling stars (visible in night mode)
- **Sun/Moon**: Smooth transition between celestial bodies
- **Ground**: Textured ground with train tracks
- **Tracks**: Repeating railroad pattern

## Mobile Optimizations

- Responsive design for all screen sizes
- Touch-optimized controls
- Reduced element sizes on small screens
- Prevents unwanted scrolling
- Hardware-accelerated animations
- Minimal performance impact

## Usage

Simply open `index.html` in any modern web browser. The animation will start automatically.

### Controls
- Tap the gear icon (⚙️) in the top-right to toggle the control panel
- Select your preferred speed, time of day, and filter
- The animation updates in real-time

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (mobile & desktop)
- Safari (iOS & macOS)
- Firefox
- Opera

## Technical Details

- Pure HTML, CSS, and vanilla JavaScript
- No external dependencies
- CSS animations for smooth performance
- Keyframe animations for train movement and wheel rotation
- CSS filters for visual effects
- Touch-action optimizations for mobile

## File Structure

```
special-train/
├── index.html    # Main file with embedded CSS and JavaScript
└── README.md     # Documentation
```

## Customization

You can easily customize the animation by modifying:
- Train colors in the CSS (`.engine`, `.cargo` classes)
- Animation speeds in `@keyframes moveTrain`
- Number of cargo cars in the HTML
- Filter effects in the `.filter-*` classes
- Day/night background gradients

Enjoy your train animation!
