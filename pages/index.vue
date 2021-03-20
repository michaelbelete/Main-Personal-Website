<template>
  <div>
    <section class="home-banner-area">
      <div class="container">
        <div class="row justify-content-end fullscreen" style="height: 637px">
          <div
            class="col-lg-6 col-md-12 home-banner-left d-flex fullscreen align-items-center"
            style="height: 637px"
          >
            <div>
              <h1 class="mb-2">
                Hey, <br />
                I am <span>Michael Belete.</span> <br />
                <div class="font-weight-light" style="font-size: 20px">
                  Your Personal Web Developer
                </div>
              </h1>
              <h4 class="text-muted font-weight-light pb-4">
                Front-End Developer / Back-End Developer / UI/UX Designer
              </h4>
              <NuxtLink to="/contact" class="primary-btn">Contact Me</NuxtLink>
              <a
                href="https://drive.google.com/file/d/1ssWAp-RozQ1PNA2j_d8x43PJPMxdXMet/view?usp=sharing"
                class="primary-btn ml-3"
                style="border: 2px solid #666"
                >My Resume/CV</a
              >
            </div>
          </div>
          <div
            class="col-lg-6 col-md-12 no-padding home-banner-right d-flex fullscreen align-items-end"
            style="height: 637px"
          >
            <img class="img-fluid" src="~/assets/img/header-img.png" alt="" />
          </div>
        </div>
      </div>
    </section>

    <section class="service-area section-gap">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 text-center">
            <div class="section-title">
              <p>I am Providing these services</p>
              <h1>
                I am <span>Michael Belete</span> I Provide These <br />
                Services To My Customers
              </h1>
            </div>
          </div>
        </div>
        <div class="row">
          <!-- single-features -->
          <div class="col-lg-3 col-sm-6 col-md-6">
            <div class="single-service">
              <div class="service-icon">
                <img src="~/assets/img/service/shape1.png" alt="" />
                <img
                  class="s-icon"
                  src="~/assets/img/service/icon1.png"
                  alt=""
                />
                <img
                  class="clr-icon"
                  src="~/assets/img/service/clr-icon1.png"
                  alt=""
                />
              </div>
              <div class="service-content">
                <h4>Website Design and Development</h4>
                <p>
                  I like to develop high quality websites with suprior design ,
                  and enjoy bringing ideas to life in the browser.
                </p>
              </div>
            </div>
          </div>
          <!-- single-features -->
          <div class="col-lg-3 offset-lg-1 col-sm-6 col-md-6">
            <div class="single-service">
              <div class="service-icon">
                <img src="~/assets/img/service/shape1.png" alt="" />
                <img
                  class="s-icon"
                  src="~/assets/img/service/icon2.png"
                  alt=""
                />
                <img
                  class="clr-icon"
                  src="~/assets/img/service/clr-icon2.png"
                  alt=""
                />
              </div>
              <div class="service-content">
                <h4>Mobile App Design and Development</h4>
                <p>
                  I develop easy-to-use and maintainable mobile apps with kotlin
                  and flutter. don't believe me!! check out my portfolio
                </p>
              </div>
            </div>
          </div>
          <!-- single-features -->
          <div class="col-lg-3 offset-lg-1 col-sm-6 col-md-6">
            <div class="single-service">
              <div class="service-icon">
                <img src="~/assets/img/service/shape1.png" alt="" />
                <img
                  class="s-icon"
                  src="~/assets/img/service/icon3.png"
                  alt=""
                />
                <img
                  class="clr-icon"
                  src="~/assets/img/service/clr-icon3.png"
                  alt=""
                />
              </div>
              <div class="service-content">
                <h4>It Consultant and Project Management</h4>
                <p>
                  I genuinely care about projects, and love helping fellow
                  developers and designers work on their craft.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row align-items-center single-item">
        <div class="col-lg-6 col-md-6">
          <div class="team-left">
            <img class="img-fluid" src="~/assets/img/team1.jpg" alt="" />
            <div
              class="member-desc d-flex justify-content-between align-items-center"
            >
              <div class="m-title">
                <h4>Michael Belete</h4>
                <p>Full Stack Web Developer</p>
              </div>
              <div class="m-social">
                <div class="t-icons">
                  <a href="https://www.instagram.com/archmike12/"
                    ><i class="fa fa-instagram"></i
                  ></a>
                  <a href="https://twitter.com/michaelbelete16"
                    ><i class="fa fa-twitter"></i
                  ></a>
                </div>
                <div class="b-icons">
                  <a href="https://github.com/michaelbelete"
                    ><i class="fa fa-github"></i
                  ></a>
                  <a href="https://t.me/archmike12"
                    ><i class="fa fa-telegram"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-5 offset-lg-1 col-md-6 team-right">
          <h1>Bio</h1>
          <p class="text-justify">
            I'm a Knowledgeable Web Developer that brings superior front- and
            back-end design to promote organization-specific website presence
            thorough comprehension of complex programming languages to generate
            custom web and mobile apps. Extensive collaboration with Any Client
            to ascertain company expectations and oversee site creation, from
            initial planning through rollout and support.Detail-oriented
            approach to maintaining website responsiveness, effectiveness, and
            security.
          </p>
          <NuxtLink class="primary-btn" to="/experiance"
            >View Experience</NuxtLink
          >
          <NuxtLink class="primary-btn ml-3" to="/portfolio"
            >View Portfolio</NuxtLink
          >
        </div>
      </div>
    </div>

    <section class="cta-area">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 col-md-12">
            <h2>Lets Start a project together</h2>
            <p>
              Interested in working together? We should queue up a chat. I’ll
              buy the coffee.
            </p>
            <NuxtLink to="/contact" class="primary-btn">Contact Me</NuxtLink>
            <a
              href="mailto:it.michael.belete@gmail.com"
              class="primary-btn ml-3"
              >Email Me</a
            >
          </div>
          <img
            src="~/assets/img/cta-bg-shape.png"
            alt=""
            class="cta-shape img-fluid"
          />
        </div>
      </div>
    </section>

    <section class="service-area section-gap">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-9 text-center">
            <div class="section-title">
              <h1>Recent <span>Portfolio</span> Showcase</h1>
            </div>
          </div>
        </div>
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

        <div class="row">
          <div class="col-md-12 text-center p-4">
            <NuxtLink to="/blog" class="primary-btn">Show More</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!--================ Start Blog Area =================-->
    <section class="blog-area section-gap">
      <div class="container">
        <div class="row align-items-end justify-content-center">
          <div class="col-lg-12 col-md-12 text-left">
            <div class="section-title">
              <h1>Latest Posts</h1>
            </div>
          </div>
        </div>
        <div class="row blog-inner justify-content-center">
          <!-- single-blog -->
          <div class="col-lg-4 col-md-6 col-sm-6">
            <div class="single-blog">
              <div class="blog-thumb">
                <img
                  class="img-fluid"
                  src="~/assets/img/blog/h-blog1.jpg"
                  alt=""
                />
              </div>
              <div class="blog-details">
                <div class="blog-meta">
                  <span>25 june, 2018 | By Mark Wiens</span>
                </div>
                <h5>
                  <NuxtLink to="#"
                    >Addiction When Gambling <br />
                    Becomes A Problem</NuxtLink
                  >
                </h5>
                <p>
                  Computers have become ubiquitous in almost every facet of our
                  lives. At work, desk jockeys spend hours in front of their
                  desktops.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 text-center p-4">
            <NuxtLink to="/blog" class="primary-btn">Read More</NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>