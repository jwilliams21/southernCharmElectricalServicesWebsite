import React from 'react';
import icedTeaLogo from './assets/icedTeaLogo.png';


function App() {

  return (
    <>
      <header>
        <nav>
          <img src={icedTeaLogo} alt="Southern Charm Electrical Services Iced Tea Logo" />
          <ul>
            <li>About Us</li>
            <li>Services</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </header>

      <main>
        <section>
          <h2>About Us</h2>
          <p>
            Southern Charm Electrical Services delivers fast, reliable, high-quality electrical work with a genuine focus on service. We show up on time, 
            treat your home and business with respect, and communicate clearly every step of the way. With honest pricing, skilled workmanship, 
            and true pride in safety and code compliance, we bring a level of care and Southern hospitality that makes every project smooth, stress-free, 
            and done right the first time.
          </p>
        </section>
        <section>
          <h2>Services</h2>
          <p>Commerical Wiring | Residential Wiring | Solar | Generators | Electric Vehicle (EV) Charging</p>
        </section>
      </main>

      <footer>
        <p>Phone: (704) 500-3249</p>
        <p>Email: nathan@southerncharmelectrical.com</p>
        <p>&copy; 2024 Southern Charm Electrical Services. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App
