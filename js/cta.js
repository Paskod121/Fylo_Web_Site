document.addEventListener('DOMContentLoaded', function() {
    // Attendre que le DOM soit complètement chargé avant d'exécuter le script

    // Récupération des éléments HTML nécessaires
    const ctaForm = document.querySelector('.cta-form');
    const emailInput = document.getElementById('email'); // Modifié pour correspondre au HTML fourni
    const cta = document.querySelector('.cta-form button'); // Modifié pour correspondre au HTML fourni
   
    // Vérification de l'existence du conteneur de l'input
    if (!document.querySelector('.cta-input-container')) {
      // Création d'un conteneur pour regrouper l'input et le message d'erreur
      const inputContainer = document.createElement('div');
      inputContainer.className = 'cta-input-container';
     
      // Déplacement de l'input email dans le nouveau conteneur
      if (emailInput && ctaForm) {
        const originalInputParent = emailInput.parentNode;
        originalInputParent.removeChild(emailInput);
        inputContainer.appendChild(emailInput);
       
        // Création et ajout du message d'erreur sous l'input
        const errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';
        errorMessage.textContent = 'Please enter a valid email address';
        errorMessage.style.color = 'red'; //  la couleur du message d'erreur
        errorMessage.style.display = 'none'; // Le message est caché par défaut
        inputContainer.appendChild(errorMessage);
       
        // Insertion du conteneur dans le formulaire avant le bouton
        ctaForm.insertBefore(inputContainer, ctaButton);
      }
    }
   
    /**
     * Fonction de validation d'adresse email
     * @param {string} email - L'adresse email à valider
     * @return {boolean} - Vrai si l'email est valide, faux sinon
     */
    function MailValidé(email) {
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regexEmail.test(email);
    }
   
    /**
     * Fonction pour afficher le message d'erreur
     * Ajoute une bordure rouge à l'input et rend visible le message d'erreur
     */
    function afficherErreur() {
      emailInput.style.border = '1px solid red';
      document.querySelector('.error-message').style.display = 'block';
    }
   
    /**
     * Fonction pour masquer le message d'erreur
     * Réinitialise la bordure de l'input et cache le message d'erreur
     */
    function masquerErreur() {
      emailInput.style.border = '';
      document.querySelector('.error-message').style.display = 'none';
    }
   
    // Ajout d'un écouteur d'événement sur le bouton de soumission
    if (ctaButton) {
      ctaButton.addEventListener('click', function(event) {
        // Vérification de la validité de l'email lors du clic sur le bouton
        if (!MailValidé(emailInput.value)) {
          event.preventDefault(); // Empêche la soumission du formulaire
          afficherErreur(); // Affiche l'erreur si l'email est invalide
        } else {
          masquerErreur(); // Cache l'erreur si l'email est valide
          // La soumission du formulaire se poursuit normalement
        }
      });
    }
});