document.addEventListener("DOMContentLoaded", function () {
				const form = document.getElementById('contactForm');
				const statusBox = document.getElementById('formStatus');

				if (form && statusBox) {
					form.addEventListener('submit', function(event) {
						event.preventDefault(); // Megállítja a külső Formspree oldalra való elugrást

						const button = form.querySelector('.btn-submit');
						button.disabled = true;
						button.innerText = 'Küldés folyamatban...';

						const data = new FormData(form);

						fetch(form.action, {
							method: form.method,
							body: data,
							headers: {
								'Accept': 'application/json'
							}
						})
						.then(response => {
							if (response.ok) {
								statusBox.className = 'form-status status-success';
								statusBox.innerText = 'Sikeres üzenetküldés! Hamarosan felvesszük Önnel a kapcsolatot.';
								statusBox.style.display = 'block';
								form.reset(); // Kiüríti a mezőket
							} else {
								statusBox.className = 'form-status status-error';
								statusBox.innerText = 'Hiba történt a küldés során. Kérjük, próbálja meg újra!';
								statusBox.style.display = 'block';
							}
						})
						.catch(error => {
							statusBox.className = 'form-status status-error';
							statusBox.innerText = 'Hálózati hiba történt. Kérjük, ellenőrizze a kapcsolatot!';
							statusBox.style.display = 'block';
						})
						.finally(() => {
							button.disabled = false;
							button.innerText = 'Üzenet küldése';
						});
					});
				}
			});