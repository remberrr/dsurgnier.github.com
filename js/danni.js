$(function(){

  // Routes
  // ==========================================================================
  window.Workspace = Backbone.Router.extend({
    routes: {
      '':         'toHome',
      'home':     'toHome',
      'pictures': 'toPictures',
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
    },

    toPictures: function(){
      var view = new PicturesView;
      $('#page').hide();
      $('#page').html(view.render().el);
      $('#page').show();
    },

    toDesigns: function(){
      var view = new DesignsView;
      $('#page').hide();
      $('#page').html(view.render().el);
      $('#page').show();
    },

    toAbout: function(){
      var view = new AboutView;
      $('#page').hide();
      $('#page').html(view.render().el);
      $('#page').show();
    },
    
    toResume: function(){
      var view = new ResumeView;
      $('#page').hide();
      $('#page').html(view.render().el);
      $('#page').show();
    },

    resumeMenu: function(section){
      switch(section){
        case 'employment':
          alert('employment');
          break;
        case default:
        case 'education':
          var view = new EducationView;
          $('#resume-content').hide();
          $('#resume-content').html(view.render().el);
          $('#resume-content').show();
          break;
      }
    },
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

  window.PicturesView = Backbone.View.extend({
    tagName: 'div',

    id: 'page-pictures',

    template: _.template($('#pictures-template').html()),

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

  window.workspace = new Workspace();
  Backbone.history.start();
  //Router.navigate();
});

