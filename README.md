# 🧮 Assignment 0 - Vector Library Extension (CSE160: Intro to Computer Graphics)

## 📌 Project Overview

This project is the first assignment for CSE160: Introduction to Computer Graphics. It extends the basic `cuon-matrix.js` matrix library from the course textbook by implementing a full suite of **2D vector operations**. The project also integrates these operations into a graphical interface using **HTML, JavaScript, and the `<canvas>` API**, allowing users to interactively draw, manipulate, and visualize vectors.

---

## 🎯 Objectives

- Review and apply **fundamental concepts of Linear Algebra** in code.
- Learn how to create **object-oriented JavaScript graphics projects**.
- Gain hands-on experience drawing on an HTML `<canvas>` using **2D rendering contexts**.
- Extend existing libraries with **custom vector functionality**.

---

## 🧰 Technologies & Tools

- **HTML5 & Canvas API** – UI and 2D drawing interface.
- **JavaScript (ES6)** – Main scripting and logic layer.
- **cuon-matrix-cse160.js** – Modified matrix library from the WebGL textbook.
- **WebGL Book** – Reference material for matrix and vector operations.
- **Modern Browsers** – Google Chrome, Firefox, etc. for rendering/testing.

---

## ⚙️ Features & Functionality

### ✅ Setup & Environment
- Loads `cuon-matrix-cse160.js` via a `<script>` tag inside `asg0.html`.
- Initializes a 400x400 black canvas.

### 📐 Vector Drawing
- Renders vector **`v1`** in red from the **center of the canvas**.
- Allows user input for **x** and **y** components via text boxes.
- Uses `drawVector()` to convert vector coordinates to canvas space.

### 🖍️ Interactive Input Interface
- UI includes input fields for both `v1` and `v2`.
- Draw button triggers rendering of **both vectors** with color coding:
  - `v1` in red.
  - `v2` in blue.

### ➕ Basic Vector Operations
Implements core vector operations within the `Vector3` class:
- **add(v)** – Vector addition
- **sub(v)** – Vector subtraction
- **mul(scalar)** – Scalar multiplication
- **div(scalar)** – Scalar division

A dropdown `<select>` menu lets the user choose an operation, which is then visualized using a green result vector.

### 📏 Magnitude & Normalize
- Computes and logs **magnitude** of vectors.
- Draws **normalized** versions of `v1` and `v2` in green.
- Uses the magnitude result internally for normalization.

### 🔁 Angle Between Vectors
- Uses **dot product** to compute the angle (in degrees) between `v1` and `v2`.
- Logs angle to the console.

### 🧮 Area of Triangle
- Uses the **cross product** to compute the area of the triangle formed by `v1` and `v2`.
- Logs result to console (half the magnitude of the cross product).

### 🧪 Vector Function Tests (Recommended)
- Includes optional `vectorTests.html` for validating correctness of vector operations.
- Verifies implementations through automated test results ("Passed"/"Failed").

---

## 🧠 How It Works

### Canvas Scaling
Vectors are scaled by a factor of `20x` before being drawn, making unit vectors visible and improving readability.