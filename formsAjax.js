/**
 * Все формы на странице переводит в режим аякса.
 * 
 * Эндпоинт (куда отправлять) берется из атрибута `action`
 * Все поля собираются в JSON-объект и пуляются в таком виде.
 * Метод `POST`
 */
for (let form of document.forms) {
    form.onsubmit = function () {
        const formData = new FormData(form);
        const jsonData = {};

        for (const [key, value] of formData.entries()) {
            jsonData[key] = value;
        }

        fetch(form.action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })

        return false;
    }
}