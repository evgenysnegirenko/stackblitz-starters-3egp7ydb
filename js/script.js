window.onload = () => {
    const filterItems = document.querySelectorAll(".car-filter li");
    const carItems = document.querySelectorAll(".car");
    const carsContent = document.getElementById("cars-content");

    filterItems.forEach(item=>{
        item.onclick = () => {
            filterItems.forEach(el => el.classList.remove("active"));
            item.classList.add("active");

            const filterText = item.textContent.toLowerCase();
    
            carItems.forEach(car => {
                if (filterText === "все марки" || car.querySelector("h4").textContent.toLowerCase().includes(filterText)) {
                    car.style.display = "flex";
                } else {car.style.display = "none"}
            });
            carsContent.scrollIntoView({behavior: "instant"});
        }
    })
}