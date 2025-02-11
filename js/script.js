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


    document.getElementById('order-action').addEventListener('click', function() {
        // Получаем значения полей
        const car = document.getElementById('car');
        const name = document.getElementById('name');
        const phone = document.getElementById('phone');

        // Флаг валидности формы
        let isValid = true;

        // Проверяем поле "Машина"
        if (car.value.trim() === '') {
            car.classList.remove('input-valid');
            car.classList.add('input-error');
            isValid = false;
        } else {
            car.classList.remove('input-error');
            car.classList.add('input-valid');
        }

        // Проверяем поле "Имя"
        if (name.value.trim() === '') {
            name.classList.remove('input-valid');
            name.classList.add('input-error');
            isValid = false;
        } else {
            name.classList.remove('input-error');
            name.classList.add('input-valid');
        }

        // Проверяем поле "Телефон"
        const phoneValue = phone.value.trim();
        if (phoneValue.length < 10) {
            phone.classList.remove('input-valid')
            phone.classList.add('input-error');
            isValid = false;
        } else {
            phone.classList.remove('input-error');
            phone.classList.add('input-valid');
        }

        // Если форма валидна
        if (isValid) {
            alert("Спасибо за заявку! Мы скоро свяжемся с Вами");
            // Очищаем поля
            car.value = '';
            name.value = '';
            phone.value = '';
            // Убираем классы ошибок
            car.classList.remove('input-valid');
            name.classList.remove('input-valid');
            phone.classList.remove('input-valid');
        }
    });
}