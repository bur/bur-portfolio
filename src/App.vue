<template>
  <div class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#about">
        <span class="d-block d-lg-none">ERIC JEFFERS RESUME</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid mb-2" src="./assets/profile.png" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">{{ name }}
            <span class="text-primary">{{ surname }}</span>
          </h1>
          <div class="subheading mb-5">{{ address }}
            <a href="mailto:eric@ericjeffers.io">{{ email }}</a>
          </div>
          <p class="mb-5">{{ aboutMe }}</p>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a href="https://www.linkedin.com/in/eric-jeffers-27268324/">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://github.com/bur">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://www.facebook.com/ejeffers.bur">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a href="https://open.spotify.com/user/etjeffers?si=xzU8qlyYQ6qa1w3F4013Dw">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-spotify fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experience" :key="job.description">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ job.position }}</h3>
              <div class="subheading mb-3">{{ job.company }}</div>
              <p>{{ job.description }}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
            </div>
          </div>

        </div>

      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">Arizona State University</h3>
              <div class="subheading mb-3">Bachelor of Science</div>
              <div>Mechanical Engineering Technology - Aerospace Engineering Focus</div>
              <p>GPA: 3.56</p>
              <p>Recipient of Arizona State University SMART Grant, Awarded Dean’s List achievement three times</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">Jan 2009 - May 2011</span>
            </div>
          </div>

        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Programming Languages &amp; Tools</div>
          <ul class="list-inline list-icons">
            <li class="list-inline-item">
              <i class="devicons devicon-amazonwebservices-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-java-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-docker-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-apache-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-intellij-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-postgresql-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-mysql-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-nodejs-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-github-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-gitlab-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-javascript-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-jquery-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-vuejs-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-react-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-travis-plain"></i>
            </li>
            <li class="list-inline-item">
              <i class="devicons devicon-slack-plain"></i>
            </li>
          </ul>

          <div class="subheading mb-3">Workflow</div>
          <ul class="fa-ul mb-0">
              <i class="fa-li fa fa-check"></i>
              Cross Functional Teams</li>
            <li>
              <i class="fa-li fa fa-check"></i>
              Agile Development &amp; Scrum</li>
          </ul>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>With so many nearby trails and parks in Arizona, I spend a great amount of my free time hiking and exploring the great outdoors. I'm also an avid runner and often bike to work (even during the peak of summer).</p>
          <p class="mb-0">The majority of my time is spent with my wife and newborn son building family traditions and learning </p>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            
          </ul>
        </div>
      </section>

    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      title: 'Eric Jeffers Portfolio',
      name: 'ERIC',
      surname: 'JEFFERS',
      address: '1340 North Zane Drive · Chandler, AZ 85226 · (512) 516-3608 ·',
      email: 'eric@ericjeffers.io',
      aboutMe: 'I am experienced in ',
      experience: [
        {
          position: 'Manager, Product Engineering',
          company: 'KUBRA',
          description: '...',
          startDate: 'September 2018',
          endDate: 'Present'
        },
        {
          position: 'Senior Software Engineer',
          company: 'KUBRA',
          description: '...',
          startDate: 'January 2017',
          endDate: 'September 2018'
        },
        {
          position: 'Software Engineer',
          company: 'KUBRA',
          description: '...',
          startDate: 'September 2015',
          endDate: 'January 2017'
        },
        {
          position: 'Software Developer II',
          company: 'General Motors',
          description: 'Developer for the GM’s Shop-Click-Drive online retailing tool for both desktop and mobile-based web application. As part of a scrum team, I lead multiple large feature development groups, producing testable, extendable code. Desktop web application stack, Java, JSP with JQuery, Struts, JPA, Oracle. Mobile web application stack, C#, ASP.NET 4.5 MVC with JQuery, Angular, WebApi, Entity Framework, MS SQL.',
          startDate: 'June 2014',
          endDate: 'September 2015'
        },
        {
          position: 'System Engineer II',
          company: 'Samsung',
          description: '...',
          startDate: 'February 2014',
          endDate: 'May 2014'
        },
        {
          position: 'System Engineer I',
          company: 'Samsung',
          description: '...',
          startDate: 'July 2011',
          endDate: 'February 2014'
        }
      ]
    }
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // our custom jQuery code goes here
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })
      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })
      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
  }
};
</script>

<style>
</style>
