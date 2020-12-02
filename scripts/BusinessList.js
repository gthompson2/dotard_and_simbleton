import { useBusinesses } from './BusinessProvider.js';
import { Business } from './Business.js';




export const BusinessList = () => {
    const contentElement = document.querySelector(".companies");
    const businesses = useBusinesses();
    // contentElement.innerHTML = "<h1>Active Businesses</h1>";
    businesses.forEach(businessObj => contentElement.innerHTML += Business(businessObj));
}