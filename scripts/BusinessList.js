import { useBusinesses } from './BusinessProvider.js';
import { Business } from './Business.js';



const businesses = useBusinesses();

export const BusinessList = () => {
    const contentElement = document.querySelector(".companies");
    // contentElement.innerHTML = "<h1>Active Businesses</h1>";
    businesses.forEach(businessObj => contentElement.innerHTML += Business(businessObj));
}

export const newYorkList = () => {
    const newYorkElement = document.querySelector(".businessList--newYork")
    //filter out New York businesses:
    const newYork = businesses.filter(company => {
        if (company.addressStateCode === "NY"){
            return true;
        };
    });

    //generate HTML for the New York businesses:
    newYork.forEach(newYorkObj => newYorkElement.innerHTML += Business(newYorkObj))
    
}

export const manufacturingList = () => {
    const manufacturingElement = document.querySelector(".businessList--manufacturing")
    const manufacturing = businesses.filter(company => {
        if (company.companyIndustry === "Manufacturing") {
            return true;
        }
    })

    manufacturing.forEach(manufacturingObj => manufacturingElement.innerHTML += Business(manufacturingObj))
}