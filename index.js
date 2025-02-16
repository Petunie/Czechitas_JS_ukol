// ------ ZADANI------

const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
      departure: 8400,
      return: 0,
      total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
      code: 'CZ',
      name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
      code: 'ES',
      name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
      1: 34.95,
      2: 69.91,
    },
    baglimit: {
      hand_width: 20,
      hand_height: 40,
      hand_length: 55,
      hand_weight: 10,
      hold_width: 81,
      hold_height: 119,
      hold_length: 119,
      hold_dimensions_sum: 319,
      hold_weight: 20,
    },
    availability: {
      seats: 2,
    },
    conversion: {
      EUR: 36,
    },
    quality: 66.66659,
  };

// ------ RESENI C. 1 ------
document.body.innerHTML += `<p>
Startovni zeme: ${flight.countryFrom.name}<br>
Cilova zeme: ${flight.countryTo.name}<br>
</p>`;

// ------ RESENI C. 2 ------
const bagProperties = flight.baglimit;

// ------ RESENI C. 3 ------
document.body.innerHTML += `<p> Maximalni rozmery prirucniho zavazadla<br>
Sirka: ${bagProperties.hand_weight}<br>
Vyska: ${bagProperties.hand_height}<br>
Delka: ${bagProperties.hand_length}<br>
</p>`;

// ------ RESENI C. 4 ------
const secondBagPrice = Math.ceil(flight.bags_price[2] * flight.conversion.EUR);
document.body.innerHTML += `<p> Cena druheho zavazadla<br>
${secondBagPrice} Kc<br>
</p>`;
