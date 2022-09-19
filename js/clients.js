const clients = [
  {
    url: './images/client_red_vital.png',
    name: 'Red Vital'
  },
  {
    url: './images/client_nena.png',
    name: 'Droguería Nena'
  },
  {
    url: './images/client_mega.png',
    name: 'Droguería Mega'
  },
  {
    url: './images/client_red_vital.png',
    name: 'Red Vital'
  },
  {
    url: './images/client_nena.png',
    name: 'Droguería Nena'
  },
  {
    url: './images/client_mega.png',
    name: 'Droguería Mega'
  },
  {
    url: './images/client_red_vital.png',
    name: 'Red Vital'
  },
  {
    url: './images/client_nena.png',
    name: 'Droguería Nena'
  },
  {
    url: './images/client_mega.png',
    name: 'Droguería Mega'
  },
];

const getClients = () => {

  if (clients.length > 0)
    clients.forEach(client => {
      $('#clients').append(`
      <div class="slide2 text-align-center">
        <img src="${client.url}" class="logoClient" alt="${client.name}"/>
        <span class="titleClient">${client.name}</span>
      </div>
    `);
    })

};