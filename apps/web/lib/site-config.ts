export const siteConfig = {
  name: "North Valley Tavern",
  address: {
    street: "901 N Valley Ave",
    city: "Olyphant",
    state: "PA",
    zip: "18447",
    full: "901 N Valley Ave, Olyphant, PA 18447",
  },
  phone: {
    /** Vanity display number (570-901-0NVT) - N=6, V=8, T=8 on phone keypad */
    display: "(570) 901-0NVT",
    /** Actual phone number for tel: links */
    href: "tel:+15709010688",
  },
  links: {
    /** Google Business Profile link */
    directions: "https://maps.app.goo.gl/mx1FHRxCT4EbvE74A",
    facebook: "https://www.facebook.com/purvsnorthvalleytavern",
    instagram: "https://www.instagram.com/purvsnorthvalleytavern",
  },
  /** Google Maps embed URL for the business profile */
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2989.44038420792!2d-75.58436942386517!3d41.47305139067713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c4db424cc09fbf%3A0x26374d270e79b611!2sNorth%20Valley%20Tavern!5e0!3m2!1sen!2sus!4v1764530618274!5m2!1sen!2sus",
  hours: [
    { days: "Wednesday – Thursday", time: "4 PM – 11 PM" },
    { days: "Friday – Saturday", time: "4 PM – 12 AM" },
    { days: "Sunday – Tuesday", time: "Closed" },
  ],
} as const;
