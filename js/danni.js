$(function(){

  // Routes
  // ==========================================================================
  window.Workspace = Backbone.Router.extend({
    routes: {
      '':         'toHome',
      'home':     'toHome',
      'displays': 'toDisplays',
      'designs':  'toDesigns',
      'about':    'toAbout',
      'resume':   'toResume',
      'resume/:section': 'resumeMenu'
    },

    toHome: function(){
      var view = new HomeView;
      $('#page').hide();
      $('#page').html(view.render().el);
      $('#page').show();
      $('#nav-menu li').removeClass('current');
      $('#nav-home').addClass('current');
    },

    toDisplays: function(){
      var view = new DisplaysView;
      $('#page').hide();
      $('#page').html(view.render().el);
      $('#page').show();
      $('#nav-menu li').removeClass('current');
      $('#nav-displays').addClass('current');
    },

    toDesigns: function(){
      var view = new DesignsView;
      $('#page').hide();
      $('#page').html(view.render().el);
      $('#page').show();
      $('#nav-menu li').removeClass('current');
      $('#nav-designs').addClass('current');
    },

    toAbout: function(){
      var view = new AboutView;
      $('#page').hide();
      $('#page').html(view.render().el);
      $('#page').show();
      $('#nav-menu li').removeClass('current');
      $('#nav-about').addClass('current');
    },

    resume: function(){
      var view = new ResumeView;
      $('#page').hide();
      $('#page').html(view.render().el);
      $('#page').show();
      $('#nav-menu li').removeClass('current');
      $('#nav-resume').addClass('current');
    },
    
    toResume: function(){
      this.resume();

      var default_view = new EducationView;
      $('#resume-content').hide();
      $('#resume-content').html(default_view.render().el);
      $('#resume-content').show();
      $('#resume-sec-edu').addClass('current');
    },

    resumeMenu: function(section){
      this.resume();
      $('#resume-menu li').removeClass('current');
      switch(section){
        case 'employment':
          var view = new EmploymentView;
          $('#resume-content').hide();
          $('#resume-content').html(view.render().el);
          $('#resume-content').show();
          $('#resume-sec-emp').addClass('current');
          break;
        case 'skills':
          var view = new SkillsView;
          $('#resume-content').hide();
          $('#resume-content').html(view.render().el);
          $('#resume-content').show();
          $('#resume-sec-skills').addClass('current');
          break;
        case 'coursework':
          var view = new CourseworkView;
          $('#resume-content').hide();
          $('#resume-content').html(view.render().el);
          $('#resume-content').show();
          $('#resume-sec-course').addClass('current');
          break;
        default:
        case 'education':
          var view = new EducationView;
          $('#resume-content').hide();
          $('#resume-content').html(view.render().el);
          $('#resume-content').show();
          $('#resume-sec-edu').addClass('current');
          break;
      }
    }
  });

  // Views
  // ==========================================================================
  window.HomeView = Backbone.View.extend({
    tagName: 'div',

    id: 'page-home',

    template: _.template($('#home-template').html()),

    render: function(){
      $(this.el).html(this.template());
      return this;
    }
  });

  window.AboutView = Backbone.View.extend({
    tagName: 'div',

    id: 'page-about',

    template: _.template($('#about-template').html()),

    render: function(){
      $(this.el).html(this.template());
      return this;
    }
  });

  window.DisplaysView = Backbone.View.extend({
    tagName: 'div',

    id: 'page-displays',

    template: _.template($('#displays-template').html()),

    render: function(){
      $(this.el).html(this.template());
      return this;
    }
  });

  window.DesignsView = Backbone.View.extend({
    tagName: 'div',

    id: 'page-designs',

    template: _.template($('#designs-template').html()),

    render: function(){
      $(this.el).html(this.template());
      return this;
    }
  });

  window.ResumeView = Backbone.View.extend({
    tagName: 'div',

    id: 'page-resume',

    template: _.template($('#resume-template').html()),

    render: function(){
      $(this.el).html(this.template());
      return this;
    }
  });

  window.EducationView = Backbone.View.extend({
    tagName: 'div',

    id: 'education',

    template: _.template($('#education-template').html()),

    render: function(){
      $(this.el).html(this.template());
      return this;
    }
  });

  window.EmploymentView = Backbone.View.extend({
    tagName: 'div',

    id: 'employment',

    template: _.template($('#employment-template').html()),

    render: function(){
      $(this.el).html(this.template());
      return this;
    }
  });


  window.SkillsView = Backbone.View.extend({
    tagName: 'div',

    id: 'skills',

    template: _.template($('#skills-template').html()),

    render: function(){
      $(this.el).html(this.template());
      return this;
    }
  });

  window.CourseworkView = Backbone.View.extend({
    tagName: 'div',

    id: 'coursework',

    template: _.template($('#coursework-template').html()),

    render: function(){
      $(this.el).html(this.template());
      return this;
    }
  });


  window.workspace = new Workspace();
  Backbone.history.start();
  //Router.navigate();
});

