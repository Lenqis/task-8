function posts() {
    const app = document.getElementById("app");

    app.textContent = "Загрузка...";

    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => {
            if (response.ok) {
                return response.json()
            };
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`)
            }
        })
        .then(data => {
            app.textContent = "";
            const five = data.slice(0, 5);
            five.forEach(post => {
                const h3 = document.createElement("h3");
                h3.textContent = post.title;
                const p = document.createElement("p");
                p.textContent = post.body;
                app.appendChild(h3)
                app.appendChild(p)
            })
        })
        .catch(error => {
            app.textContent = "Ошибка:" + error.message
        });
};

posts();