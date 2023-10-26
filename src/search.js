// Importar o MapTiler SDK
import * as maptilersdk from '@maptiler/sdk';

// Configurar a chave de API do MapTiler
maptilersdk.config.apiKey = 'A5zQ1EBLXZSGQC6E33v5';

// Criar um elemento de contêiner para o mapa
const mapContainer = document.createElement('div');
mapContainer.id = 'map';
mapContainer.style.position = 'absolute';
mapContainer.style.top = '0';
mapContainer.style.bottom = '0';
mapContainer.style.width = '100%';

// Adicionar o elemento de contêiner ao corpo do documento
document.body.appendChild(mapContainer);

// Inicializar o mapa
const map = new maptilersdk.Map({
  container: 'map', // ID do contêiner ou elemento HTML para renderizar o mapa
  style: maptilersdk.MapStyle.STREETS,
  center: [16.62662018, 49.2125578], // Posição inicial [lng, lat]
  zoom: 14, // Zoom inicial
});

