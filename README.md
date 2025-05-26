# Three.js Project: Interactive 3D Visualization

This project is an interactive 3D web application developed using React and Three.js. It features a 3D office visualization with scroll-controlled animations and dynamic interactions.

## Technologies Used

### Core Technologies
- **React 19**: JavaScript framework for the user interface
- **Three.js (v0.176.0)**: JavaScript library for 3D graphics in the browser
- **React Three Fiber (v9.1.2)**: React renderer for Three.js that simplifies the integration of Three.js with React
- **React Three Drei (v10.0.8)**: Collection of ready-to-use helpers and components for React Three Fiber

### Animations
- **GSAP (v3.13.0)**: GreenSock Animation Platform for smooth animations and advanced timeline control

### Build and Development Tools
- **Vite (v6.3.5)**: High-performance build tool and dev server
- **ESLint (v9.25.0)**: JavaScript linter to maintain code quality
- **TailwindCSS (v4.1.7)**: Utility-first CSS framework for rapid and responsive styling

## Project Features

- **3D Office Model**: Loading and displaying a complex 3D model (Office.glb)
- **Scroll-based Animations**: Vertical navigation through different floors of the building
- **Animated Rotations**: Rotation of the 3D model during scrolling
- **Responsive User Interface**: Overlay with a user interface that interacts with the 3D scene
- **Modular Component Structure**:
  - `Experience.jsx`: Main component that manages the 3D scene
  - `Office.jsx`: Handles the 3D office model and its animations
  - `Overlay.jsx`: Manages the user interface that overlays the 3D scene

## Project Structure
The project follows an organized structure with separation of components, assets, and styles:

```
src/
  ├── components/       # React components
  │   ├── Experience.jsx
  │   ├── Office.jsx
  │   └── Overlay.jsx
  ├── assets/           # Static assets
  ├── App.jsx           # Main application component
  ├── main.jsx          # Application entry point
  └── ...
public/
  └── models/           # 3D Models
      └── Office.glb    # 3D office model
```

This project demonstrates the integration of cutting-edge technologies to create immersive and interactive 3D web experiences, with particular attention to performance and user experience.
