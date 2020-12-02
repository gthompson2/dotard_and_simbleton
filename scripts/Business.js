export const Business = (businessObj) => {
    return `
        <section class="company">
            <h2 class="company__name">${businessObj.companyName}</h2>
            <div class="company__address">
                <div class="address__top">
                    ${businessObj.addressFullStreet}
                </div>
                <div class="address__bottom">
                    ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}
                </div>
             </div>
        </section>   
    `
}