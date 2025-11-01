// Quand on clique sur "Choisir"
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const service = btn.parentElement;
    
    // On récupère les infos
    const nom = service.dataset.name;
    const prix = parseFloat(service.dataset.price);
    const minutes = parseInt(service.dataset.minutes);
    const img = service.querySelector('img').src;

    // On remplit la fenêtre
    document.getElementById('titre').textContent = nom;
    document.getElementById('photo').src = img;
    document.getElementById('duree').textContent = minutes;
    document.getElementById('prix').textContent = prix;

    // On calcule le prix par 5 min
    window.prixPar5Min = prix / (minutes / 5);
    window.prixBase = prix;

    // On met à jour le total
    majTotal();

    // On ouvre la fenêtre
    document.getElementById('modal').style.display = 'flex';
  });
});

// Fermer la fenêtre
document.querySelector('.close').addEventListener('click', () => {
  document.getElementById('modal').style.display = 'none';
});

// Quand on bouge le curseur
document.getElementById('temps-sup').addEventListener('input', majTotal);

function majTotal() {
  const sup = parseInt(document.getElementById('temps-sup').value);
  const prixSup = (sup / 5) * window.prixPar5Min;
  const total = window.prixBase + prixSup;

  document.getElementById('min-sup').textContent = sup;
  document.getElementById('prix-sup').textContent = prixSup.toFixed(2);
  document.getElementById('total').textContent = total.toFixed(2);
}