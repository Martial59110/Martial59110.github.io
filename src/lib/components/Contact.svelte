<script lang="ts">
  function handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    // Ajoutez ici la logique d'envoi du formulaire
  }
</script>

<section id="contact" class="contact py-6 bg-dark">
  <div class="container">
    <h2 class="text-center text-white mb-5">Initier une Collaboration</h2>
    <div class="row justify-content-center">
      <div class="col-md-8">
        <div class="contact-card">
          <form on:submit={handleSubmit}>
            <div class="form-floating mb-4">
              <input type="text" class="form-control bg-darker" id="name" placeholder="Votre nom" required>
              <label for="name">Votre nom</label>
            </div>
            <div class="form-floating mb-4">
              <input type="email" class="form-control bg-darker" id="email" placeholder="Votre email" required>
              <label for="email">Votre email</label>
            </div>
            <div class="form-floating mb-4">
              <textarea class="form-control bg-darker" id="message" placeholder="Votre message" style="height: 150px" required></textarea>
              <label for="message">Votre message</label>
            </div>
            <button type="submit" class="btn btn-gradient w-100">
              <span>Envoyer le message</span>
              <div class="btn-gradient-hover"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section> 