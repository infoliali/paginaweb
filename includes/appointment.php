<section id="appointment" data-stellar-background-ratio="3">
  <div class="container">
    <div class="row">
    <div class="col-md-12 col-sm-12 text-align-center">
      <div class="section-title wow fadeInUp" data-wow-delay="0.4s">
        <h2>Contáctanos</h2>
      </div>
    </div>

      <div class="col-md-6 col-sm-6">
        <img src="images/contact_us.png" class="img-responsive" alt="">
      </div>

      <div class="col-md-6 col-sm-6">
        <!-- CONTACT FORM HERE -->
        <form id="appointment-form" role="form" method="post" action="#">

          <!-- SECTION TITLE -->

          <div class="wow fadeInUp" data-wow-delay="0.8s">
            <div class="col-md-12 col-sm-12 form-group">
              <label for="name">Nombre y apellido</label>
              <input type="text" class="form-control" id="name" name="name" placeholder="Tu nombre" required>
            </div>

            <div class="col-md-12 col-sm-12 form-group">
              <label for="email">Correo electrónico</label>
              <input type="email" class="form-control" id="email" name="email" placeholder="Tu correo" required>
            </div>

            <div class="col-md-12 col-sm-12 form-group">
              <label for="telephone">Número de teléfono</label>
              <input type="tel" class="form-control" id="phone" name="phone" placeholder="Teléfono">
            </div>

            <div class="col-md-12 col-sm-12 form-group">
              <label for="Message">Mensaje adicional</label>
              <textarea class="form-control" rows="5" id="message" name="message" placeholder="Mensaje" required></textarea>
            </div>
            
            <div class="col-md-12 col-sm-12 form-group">
                <div class="g-recaptcha" data-sitekey="6Le9UP4fAAAAAE2hkydFihH_rIda7eU5oGaiEoRp"></div>
            </div>
            

            <div class="col-md-12 col-sm-12 form-group success">
              <div class="alert alert-success alert-dismissible text-align-center" role="alert">
                <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <strong>¡Muchas gracias! </strong> Nos comunicaremos a la brevedad posible.
              </div>
            </div>

            <div class="col-md-12 col-sm-12 form-group">
              <button type="submit" class="form-control" id="cf-submit" name="submit">Enviar</button>
            </div>
          </div>
        </form>
      </div>

    </div>
  </div>
</section>