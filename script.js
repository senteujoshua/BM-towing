// Toggle Towing Details Section
const serviceType = document.getElementById('service-type');
const towingDetails = document.getElementById('towing-details');
const otherService = document.getElementById('other-service');

serviceType.addEventListener('change', function () {
  if (serviceType.value === 'towing') {
    towingDetails.style.display = 'block';
  } else {
    towingDetails.style.display = 'none';
  }

  if (serviceType.value === 'other') {
    otherService.style.display = 'block';
  } else {
    otherService.style.display = 'none';
  }
});

// Calculate Distance (Example)
const pickupLocation = document.getElementById('pickup-location');
const dropoffLocation = document.getElementById('dropoff-location');
const distance = document.getElementById('distance');

pickupLocation.addEventListener('blur', calculateDistance);
dropoffLocation.addEventListener('blur', calculateDistance);

function calculateDistance() {
  if (pickupLocation.value && dropoffLocation.value) {
    // Replace with actual distance calculation logic or API call
    distance.value = 15; // Example value
  }
}



// Towing Form Logic
const form = document.querySelector('.towing-form');
const confirmation = document.querySelector('.confirmation');
const estimatedCost = document.getElementById('estimated-cost');
const urgency = document.getElementById('urgency');
const distanceInput = document.getElementById('distance');

// Calculate Estimated Cost
function calculateCost(distance, urgencyLevel) {
  const baseRate = 50; // Base rate for towing
  const perMileRate = 3; // Rate per mile
  const urgencyMultiplier = {
    standard: 1,
    urgent: 1.5,
    emergency: 2,
  };

  const totalCost = baseRate + distance * perMileRate * urgencyMultiplier[urgencyLevel];
  return totalCost.toFixed(2);
}

// Update Estimated Cost
function updateCost() {
  const distance = parseFloat(distanceInput.value) || 0;
  const urgencyLevel = urgency.value;
  const cost = calculateCost(distance, urgencyLevel);
  estimatedCost.innerHTML = `Your estimated cost is <strong>$${cost}</strong> based on the distance and urgency selected.`;
}

// Event Listeners
urgency.addEventListener('change', updateCost);
distanceInput.addEventListener('input', updateCost);

// Use Current Location
document.getElementById('use-location').addEventListener('click', function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      const pickupLocation = document.getElementById('pickup-location');
      pickupLocation.value = `${latitude}, ${longitude}`;
    });
  } else {
    alert('Geolocation is not supported by your browser.');
  }
});

// Form Submission
form.addEventListener('submit', function (e) {
  e.preventDefault();
  form.style.display = 'none';
  confirmation.style.display = 'block';
});

// Real-Time Tracking (Placeholder)
document.getElementById('track-towing').addEventListener('click', function () {
  alert('Real-time tracking is not implemented yet.');
});

// Price Range Slider
const priceRange = document.getElementById('price-range');
const priceRangeValue = document.getElementById('price-range-value');

priceRange.addEventListener('input', function () {
  priceRangeValue.textContent = `$${priceRange.value}`;
});

// Car Listing Form Submission
const listingForm = document.querySelector('.listing-form');
listingForm.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Your car has been listed successfully!');
});


// scripts.js
// Add interactivity like tab switching, form submission, etc.
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".dashboard-section");
    const navLinks = document.querySelectorAll(".sidebar nav ul li a");
  
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        sections.forEach((section) => {
          section.style.display = section.id === targetId ? "block" : "none";
        });
        navLinks.forEach((navLink) => navLink.classList.remove("active"));
        link.classList.add("active");
      });
    });
  
    // Default to showing the overview section
    sections.forEach((section) => {
      section.style.display = section.id === "overview" ? "block" : "none";
    });
  });