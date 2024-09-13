document.getElementById('loadColors').addEventListener('click', () => {
    fetch('https://reqres.in/api/unknown')
        .then(response => response.json())
        .then(data => {
            const colorContainer = document.getElementById('colorContainer');
            colorContainer.innerHTML = ''; // Очистить контейнер перед добавлением новых блоков

            data.data.forEach(color => {
                const colorBlock = document.createElement('div');
                colorBlock.className = 'color-block';
                colorBlock.style.backgroundColor = color.color; // Устанавливаем цвет фона
                colorBlock.textContent = color.name; // Устанавливаем текст

                colorContainer.appendChild(colorBlock); // Добавляем блок в контейнер
            });
        });
});