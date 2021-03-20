<template>
<div>
        <my-nav title="My Portfolio" link="portfolio" />

      <section class="service-area section-gap">
      <div class="container">
        <div class="row mb-5">
            <div class="col-md-3"></div>
            <div class="col-md-6">
                <input type="search" class="form-control" placeholder="search for project">
                <div class="py-4 text-center">
                    <button class="genric-btn info-border circle small active">Websites</button>
                    <button class="genric-btn primary-border circle small">Mobile Apps</button>
                    <button class="genric-btn success-border circle small">UI/UX Designs</button>
                </div>
            </div>
            <div class="col-md-3"></div>
        </div>
        <div class="row">
          <!-- single-features -->
          <div class="col-lg-4 col-sm-6 col-md-6">
            <div class="single-gallery">
              <img class="img-fluid" src="~/assets/img/project/gallery1.jpg" alt="" />
              <div class="gallery-content">
                <p>Proper Guided Tour</p>
                <h4>
                  Santorini Island Dream <br />
                  Holiday and Fun <br />
                  Package
                </h4>
              </div>
              <div class="light-box">
                <a href="~/assets/img/project/gallery1.jpg" class="img-popup">
                  <span class="lnr lnr-link"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</div>
</template>
<script>
import myNav from '~/components/myNav'
export default {
    components: {
        "my-nav": myNav
    }
}
</script>