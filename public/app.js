fetch('/api/networks').then(r=>r.json()).then(({networks})=>{
  document.getElementById('networks').innerHTML = networks.map(n =>
    `<article class="coin"><strong>${n.asset}</strong><small>${n.network}</small></article>`
  ).join('');
}).catch(()=>{document.getElementById('networks').textContent='Networks unavailable';});
