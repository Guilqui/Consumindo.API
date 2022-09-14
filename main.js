const app = document.getElementById('tabela');

const container = document.createElement('div');
container.setAttribute('id', 'container');

app.appendChild(container);

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => {
    
    data.forEach(element => {
        const card = document.createElement('tr');
        card.setAttribute('id', 'card');
        
        const h1 = document.createElement('td');
        h1.setAttribute('id', 'ex')
        h1.textContent = element.id;
        
        const h2 = document.createElement('td');
        h2.textContent = element.name;

        const h3 = document.createElement('td');
        h3.textContent = element.username;

        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(h2);
        card.appendChild(h3);
            })
        }).catch(err => {
            const errorMessage = document.createElement('marquee');
            errorMessage.textContent = `Essa não! Não está funcionando!`
            app.appendChild(errorMessage);
        }
        );