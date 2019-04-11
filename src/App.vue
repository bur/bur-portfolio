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
            <a class="nav-link js-scroll-trigger" href="#achievements">Achievements</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <span class="d-lg-block">
          <img class="img-fluid-2 mb-2" src="./assets/profile.png" alt="">
        </span>
          <h1 class="mb-0">{{ name }}
            <span class="text-primary">{{ surname }}</span>
          </h1>
          <div class="subheading mb-5">{{ address }}
            <a href="mailto:eric@ericjeffers.io">{{ email }}</a>
          </div>
          <p class="mb-5" v-html="aboutMe"></p>
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
              <p v-html="job.description"></p>
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
          <h2 class="mb-3">Skills</h2>
          
          <template>
          <div class="mb-0" v-for="skill in skills" :key="skill.name">
            <h5>{{skill.name}}</h5>
              <b-progress :value=skill.value :max="10" variant=skill.variant class="mb-3"></b-progress> 
          </div>
          </template>
          <br/>
          <table style="width:100%" >
            <tr>
              <th valign="top">
                <h3>AWS Services</h3>
                <template>
                  <div class="mb-0" v-for="skill in awsSkills" :key="skill.name" >
                    <h5>{{skill.name}}</h5>
                      <b-progress :value=skill.value :max="10" variant="danger" class="mb-3"></b-progress> 
                  </div>
                  <div class="mb-0">
                    ... and so many more
                  </div>
                  </template>
              </th>
              <th valign="top" style="
    padding-left: 10px;">
              <h3>Spring Frameworks</h3>
                <template>
                  <div class="mb-0" v-for="skill in springSkills" :key="skill.name">
                    <h5>{{skill.name}}</h5>
                      <b-progress :value=skill.value :max="10" variant="warning" class="mb-3"></b-progress> 
                  </div>
                  </template>
              </th>
            </tr>
          </table>
          
        </div>  
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-1">Interests</h2>
          <p>With so many nearby trails and parks in Arizona, I spend a great amount of my free time hiking and exploring the great outdoors. I'm also an avid runner and often bike to work (even during the peak of summer).</p>
          <p class="mb-1">I enjoy watching Esports and playing a few Esport games such as League of Legends. I'm always trying to come up with some tools that would be helpful/beneficial to myself for improving my skills.</p>
        </div>
      </section>

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="achievements">
        <div class="my-auto">
          <h2 class="mb-5">Achievements</h2>
          <ul class="mb-0">
          <li>
              <a href="https://kubra.com/press-releases/kubra-announces-new-storm-center-5/">Storm Center 5</a> is an outage mapping that I re-architected to be SaaS solution deployed for over 15 of the largest utilities in North America that are viewed millions of times per day (during a storm) and processes over 300k batch files a month.
              </li>
            <li>
              <a href="https://www.curensea.com/">Curensea</a>, is an ad-free community where everyone can earn for posting or curating creative work which I rebuilt in AWS following the <a href="https://aws.amazon.com/architecture/well-architected/">Well-Architected Framework</a> guidelines. I also filled the role of DevOps to build in CI/CD workflows, deployment tooling, monitoring and alerting.
              </li>
              <li>
              iHack is a company-wide hackathon for KUBRA that I personally initiated and brought to fruition in 2016 and 2017. Not only were the events successful at collaborating teams and people across offices in geographically different parts of the world, some of the prototypes eventually were turned into products for the company.
              </li>
          </ul>
        </div>
      </section>

    </div>
  
    <div id="floater">
    <b-button block variant="primary" v-b-modal.modal-sm>Download Resume</b-button>
      <!-- Modal Component -->
      <b-modal id="modal-sm" size="sm" title="Download Resume" ref="resume-modal">
        <p class="my-4">Choose the format you'd like.</p>
        <a href="https://ericjeffers.io/resume/ERIC-JEFFERS-RESUME.pdf" target="_blank" class="btn btn-primary">PDF</a>
        <a href="https://ericjeffers.io/resume/ERIC-JEFFERS-RESUME.docx" target="_blank" class="btn btn-primary">Word (.docx)</a>
      </b-modal>
    
    </div>
  </div>
</template>

<script>

export default {

  data () {
    return {
      title: 'Eric Jeffers Resume',
      name: 'ERIC',
      surname: 'JEFFERS',
      address: '1340 North Zane Drive · Chandler, AZ 85226 · (512) 516-3608 ·',
      email: 'eric@ericjeffers.io',
      aboutMe: `I\'m a Phoenix-based technology evangelist with many years in the industry including experience as a Software Engineering Manager and Cloud Architect. I have a proven track record of building SaaS Platforms from the ground up including: designing; architecting; infrastructure; team recruitment; and establishing processes and workflows.`,
      skills: [
        {
          name: 'Java',
          value: 9.5,
          variant: 'success'
        },
        {
          name: 'AWS / Cloud Services',
          value: 9.7,
          variant: 'success'
        },
        {
          name: 'Software Architecture',
          value: 9.0,
          variant: 'success'
        },
        {
          name: 'Spring / Spring Boot',
          value: 9.5,
          variant: 'success'
        },
        {
          name: 'Git / Github / Gitlab',
          value: 9.1,
          variant: 'success'
        },
        {
          name: 'Apache Spark / Hadoop',
          value: 8.5,
          variant: 'success'
        },
        {
          name: 'Design Patterns',
          value: 9.2,
          variant: 'success'
        }, 
        {
          name: 'Node',
          value: 7.6,
          variant: 'success'
        },
        {
          name: 'Engineering Management',
          value: 8.8,
          variant: 'success'
        },
        {
          name: 'Agile / SCRUM',
          value: 8.3,
          variant: 'success'
        }, 
        {
          name: 'Vue',
          value: 2.9,
          variant: '"danger"'
        },
        {
          name: 'React',
          value: 2.8,
          variant: 'danger'
        },
        {
          name: 'jQuery',
          value: 3.2,
          variant: 'danger'
        }
      ],
      awsSkills: [
        {
          name: 'S3',
          value: 9.5,
          variant: 'success'
        },
        {
          name: 'EC2',
          value: 9.6,
          variant: 'success'
        },
        {
          name: 'Beanstalk',
          value: 10,
          variant: 'success'
        },
        {
          name: 'Lambda',
          value: 9.2,
          variant: 'success'
        },
        {
          name: 'Cloudfront',
          value: 9.3,
          variant: 'success'
        },
        {
          name: 'API Gateway',
          value: 7.9,
          variant: 'success'
        },
        {
          name: 'Batch / ECS',
          value: 8.8,
          variant: 'success'
        },
        {
          name: 'Cognito',
          value: 7.2,
          variant: 'success'
        },
        {
          name: 'RDS',
          value: 8.4,
          variant: 'success'
        },
        {
          name: 'IAM',
          value: 8.9,
          variant: 'success'
        },
        {
          name: 'Cloudformation',
          value: 6.9,
          variant: 'success'
        },
        {
          name: 'SQS',
          value: 6.2,
          variant: 'success'
        }
      ],
      springSkills: [
        {
          name: 'Spring Boot 2.2',
          value: 9.5,
          variant: 'success'
        },
        {
          name: 'Spring MVC / REST',
          value: 9.1,
          variant: 'success'
        },
        {
          name: 'Spring Security',
          value: 7.8,
          variant: 'success'
        },
        {
          name: 'Spring Cloud',
          value: 8.7,
          variant: 'success'
        },
        {
          name: 'Spring Reactor',
          value: 4.3,
          variant: 'success'
        },
        {
          name: 'Spring Framework',
          value: 9.6,
          variant: 'success'
        },
        {
          name: 'Spring Data',
          value: 9.2,
          variant: 'success'
        },
        {
          name: 'Spring Initializr',
          value: 7.4,
          variant: 'success'
        },
        {
          name: 'Spring HATEOAS',
          value: 6.5,
          variant: 'success'
        },
        {
          name: 'Spring Cloud Config',
          value: 6.9,
          variant: 'success'
        },
        {
          name: 'Zuul',
          value: 4.8,
          variant: 'success'
        },
      ],
      experience: [
        {
          position: 'Manager, Product Engineering',
          company: 'KUBRA',
          description: 
          `<p class="mb-1">
            Responsible for the design, development, and post-production support of <a href="https://kubra.com/press-releases/kubra-announces-new-storm-center-5/">Storm Center</a>. Led 5 direct reports as well as performed the role of Scrum Master for bi-weekly scrums. Worked closely with the Product Manager on implementing roadmap items and prioritizing technical debt tasks.
          </p> 
          <ul class="mb-0">
          <li>
              Delivered all new features/modules on time or early since project inception.
              </li>
            <li>
              Maintained 99.9% uptime SLA with a full disaster recovery goal of under 15 minutes.
              </li>
            <li>
              Implemented batch processing improvements that yielded 4x faster file processing time.</li>
          </ul>
          `
          ,
          startDate: 'Sept 2018',
          endDate: 'Present'
        },
        {
          position: 'Owner, Cloud Consultant',
          company: 'bur consulting',
          description: `<p class="mb-1">
            Client, <strong>Curensea</strong> - Worked as a Cloud Consultant to evaluate existing architecture and rebuild with scalability, durability and security in mind. 
          </p> 
          <ul class="mb-0">
          <li>
              Integrated robust security architecture with AWS Cognito and OAuth 2.0 standards.
              </li>
              <li>
              Fully migrated legacy application with no code access, documentation, or previous vendor guidance. 
              </li>
            <li>
              Established CI/CD workflows and processes for a team of consultants across the globe. 
              </li>
          </ul>
          `,
          startDate: 'Sept 2017',
          endDate: 'Present'
        },
        {
          position: 'Senior Software Engineer',
          company: 'KUBRA',
          description: `<p class="mb-1">Responsible for developing new features and improving project timeline to implement solutions for clients for the then legacy Storm Center. Responsible for delivering new Storm Center 5 product into production by Q2 2018.</p>
          <ul class="mb-0">
          <li>
              Principal architect for rebuilding existing product as a multi-tenant SaaS Cloud Solution.
              </li>
              <li>
              Designed a scalable batch processing solution for Big Data sized electrical outage files and electrical meter files using Apache Spark and AWS Batch.
              </li>
            <li>
              Planned, recruited, and hosted the second company-wide hackathon, <a href="https://kubra.com/press-releases/kubra-looks-bot-technologies/">iHack17</a>.
              </li>
          </ul>
          
          `,
          startDate: 'Jan 2017',
          endDate: 'Sept 2018'
        },
        {
          position: 'Software Engineer',
          company: 'KUBRA',
          description: `<p class="mb-1">As a Software Engineer on the Storm Center product, my main responsibilities were building Java / Spring web application libraries that could be extended for customizations from clients. </p>
          
          <ul class="mb-0">
          <li>
              Implementation of a historical tool to display snapshots of data as well as removing unarchived data from AWS S3.
              </li>
              <li>
              Successfully securing API\'s and private data (at rest and in-transit) stored within AWS S3 to authorized/authenticated users
              </li>
              <li>
              Streamlined company API testing/documentation with implementation of the Postman software.
              </li>
            <li>
              Planned, recruited, and hosted the first company-wide hackathon, <a href="https://kubra.com/press-releases/hackathon-event-2016/">iHack16</a>.
              </li>
          </ul>`,
          startDate: 'Sept 2015',
          endDate: 'Jan 2017'
        },
        {
          position: 'Software Developer II',
          company: 'General Motors',
          description: `Developer for the GM’s Shop-Click-Drive online retailing tool for both desktop and mobile-based web application. As part of a scrum team, I lead multiple large feature development groups, producing testable, extendable code.
          <ul class="mb-0">
          <li>
              Rebuilt the complicated and bug-prone incentives engine that resolves the best incentives based on complex rules regarding what incentives and deals can or cannot be stacked.
              </li>
              <li>
              Mentored 2 entry level software developers while performing my other job responsibilities.
              </li>
              <li>
              Performed multiple complex production deployments and migrations.
              </li>
          </ul>
          `,
          startDate: 'June 2014',
          endDate: 'Sept 2015'
        },
        {
          position: 'System Engineer II',
          company: 'Samsung',
          description: `Responsible for new request development for backend Java Advanced Process Control algorithm and logic. Significant role to re-train numerous Process Engineers on how to use the system and the UI with minimal documentation in English to provide.
          <ul class="mb-0">
          <li>
              Integral part of software standardization project for all Samsung semiconductor fabs to use the same systems version which included significant time spent in South Korea to accomplish minimal downtime event.
              </li>
              <li>
              Initiated and setup internal wiki site powered by MediaWiki engine to promote knowledge sharing for entire fabrication facility. Configured multiple custom plugins, created common templates, setup various levels of privacy and moderated all pages for consistency in adhering to wiki best practices. 
              </li>
              <li>
              Recognized by executive members for streamlining information sharing and collaboration across all departments, which combined, made up over 2000 employees.
              </li>
          </ul>

`,
          startDate: 'Feb 2014',
          endDate: 'May 2014'
        },
        {
          position: 'System Engineer I',
          company: 'Samsung',
          description: 'Full stack developer for several quality control systems including Advanced Process Control (APC) and Statistical Process Control (SPC). This was a multithreaded application, which communicated with semiconductor tools using TIBCO RV messaging.',
          startDate: 'July 2011',
          endDate: 'Feb 2014'
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
    $(window).scroll(function() {
    var winScrollTop = $(window).scrollTop();
    var winHeight = $(window).height();
    var floaterHeight = $('#floater').outerHeight(true);
    //true so the function takes margins into account
    var fromBottom = 20;

    var top = winScrollTop + winHeight - floaterHeight - fromBottom;
    $('#floater').css({'top': top + 'px'});
});
  }
};
</script>

<style>
</style>
