# **SalahTime - وقت الصلاة**  

SalahTime is a dynamic and responsive web application designed to help users keep track of prayer times. With real-time updates and a beautiful interface, it allows users to select their location and get accurate prayer timings for their city.  

---

## 🌟 **Features**  

- **Real-Time Clock**: Displays the current date and time.  
- **Accurate Prayer Timings**: Shows the five daily prayer times (Fajr, Dhuhr, Asr, Maghrib, Isha).  
- **Next Prayer Reminder**: Highlights the upcoming prayer with a countdown timer.  
- **Location-Based Timings**: Allows users to select their governorate for precise timings.  
- **Responsive Design**: Provides a seamless experience across all devices.  

---

## 📂 **Project Structure**  

### **1. `MainContent.jsx`**  
The main logic for:  
- Fetching prayer timings using `getTimings()`.  
- Calculating the next prayer and remaining time using `calculateNextPrayer()`.  
- Rendering the header, prayer cards, and location selector.  

### **2. `Salaah.jsx`**  
A reusable card component to display prayer names, times, and images.

### **3. `SalaahCards.jsx`**  
A container that maps through the prayer timings and generates cards for each prayer.

### **4. `GovernorateSelector.jsx`**  
A dropdown selector for users to pick their governorate.  

### **5. `governorates.jsx`**  
A data file containing a list of governorates in Egypt with their Arabic names and API references.  

---

## 🚀 **Technologies Used**  

- **React.js**: Frontend library for building the app’s user interface.  
- **Material-UI (MUI)**: Component library for styling and UI elements.  
- **Moment.js**: Library for handling date and time formatting.  
- **JavaScript**: Core programming language for app functionality.  
- **CSS**: For additional styling and layout customization.  

---

## 🌐 **Live Demo**  

Visit the live version of SalahTime at: [SalahTime Demo](https://salahtime-eg.netlify.app/)  

