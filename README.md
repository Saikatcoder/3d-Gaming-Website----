<div align="center">
  <br />
    <a href="https://youtu.be/zA9r5zTllx4" target="_blank">
      <img src="https://github.com/user-attachments/assets/ab600f24-f4d9-4cef-8f1e-3fd9194afb30" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-GSAP-black?style=for-the-badge&logoColor=white&logo=greensock&color=88CE02" alt="greensock" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">An Awwwards Winning Website</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets (Code to Copy)](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [More](#more)

## ⚠️ Disclaimer

All design credits go to **[Zentry](https://zentry.com/)**. This project is created purely for **educational purposes** and is not intended for commercial use or public deployment.


## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>.

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://youtu.be/zA9r5zTllx4" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

Build a visually captivating website inspired by **[Zentry](https://zentry.com/)**, featuring scroll-triggered animations, geometric transitions, and engaging video storytelling. Learn how to deliver a luxurious, modern feel, focusing on engaging UI/UX and smooth responsiveness, capturing the essence of what makes an Awwwards winner.

If you're getting started and need assistance or face any bugs, join our active Discord community with over **47k+** members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- GSAP
- React.js
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Scroll-Based Animations**: Dynamic animations triggered by scrolling for a more engaging user experience.

👉 **Clip Path Shaped Animations**: Unique geometric transitions using CSS clip-paths to create visually stunning effects.

👉 **3D Hover Effects**: Interactive 3D transformations that respond to user interactions for a modern feel.

👉 **Video Transitions**: Seamlessly integrated video elements to enhance storytelling and flow.

👉 **Smooth UI/UX**: Polished interfaces with buttery-smooth interactions for an intuitive user journey.

👉 **Completely Responsive**: Flawless adaptation across all devices, ensuring a consistent experience.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/award-winning-website.git
cd award-winning-website
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>index.css</code></summary>

```css
@import url("https://fonts.cdnfonts.com/css/general-sans");

@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  width: 100dvw;
  overflow-x: hidden;
  background-color: #dfdff0;
  font-family: "General Sans", sans-serif;
}

@layer base {
  @font-face {
    font-family: "circular-web";
    src: url("/fonts/circularweb-book.woff2") format("woff2");
  }

  @font-face {
    font-family: "general";
    src: url("/fonts/general.woff2") format("woff2");
  }

  @font-face {
    font-family: "robert-medium";
    src: url("/fonts/robert-medium.woff2") format("woff2");
  }

  @font-face {
    font-family: "robert-regular";
    src: url("/fonts/robert-regular.woff2") format("woff2");
  }

  @font-face {
    font-family: "zentry";
    src: url("/fonts/zentry-regular.woff2") format("woff2");
  }
}


```

</details>

<details>
  <summary><code>components/RoundedCorners.jsx</code></summary>

```js
import React from 'react'

const RoundedCorners = () => {
  return (
    <svg
      className="invisible absolute size-0"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="flt_tag">
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="8"
            result="blur"
          />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="flt_tag"
          />
          <feComposite
            in="SourceGraphic"
            in2="flt_tag"
            operator="atop"
          />
        </filter>
      </defs>
    </svg>
  )
}
export default RoundedCorners
```

</details>

## <a name="links">🔗 Assets</a>

Assets used in the project can be found [here](https://drive.google.com/file/d/12hCVnanOAUmM1vzz2dTWZ_uEFGG8xDcT/view?usp=sharing)

> This project uses some assets and fonts from **[Zentry](https://zentry.com/)** purely for educational and demonstration purposes. All rights to these assets and fonts belong to their respective owners. If you plan to use this project commercially or publicly, please replace these assets and fonts with ones you own or have permission to use. This project is not affiliated with or endorsed by **[Zentry](https://zentry.com/)**.


