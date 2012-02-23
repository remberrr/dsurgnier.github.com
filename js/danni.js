$(function(){

  // Routes
  // ==========================================================================
  window.Workspace = Backbone.Router.extend({
    routes: {
      '':         'toHome',
      'home':     'toHome',
      'pictures': 'toPictures'
      //'designs':  'toDesigns',
      //'about':    'toAbout',
      //'resume':   'toResume'
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
    }

    //toDesigns: function(){
      //var view = new DesignsView;
      //$('#page').hide();
      //$('#page').html(view.el);
      //$('#page').show();
    //},

    //toAbout: function(){
      //var view = new AboutView;
      //$('#page').hide();
      //$('#page').html(view.el);
      //$('#page').show();
    //},
    
    //toResume: function(){
      //var view = new ResumeView;
      //$('#page').hide();
      //$('#page').html(view.el);
      //$('#page').show();
    //}
  });

  // Views
  // ==========================================================================
  window.HomeView = Backbone.View.extend({
    tagName: 'div',

    id: 'page-home',

    template: _.template($('#home-template').html()),

    //initialize: function(){
      //alert('Home');
    //},

    render: function(){
      $(this.el).html(this.template());
      return this;
    }
  });

  window.PicturesView = Backbone.View.extend({
    tagName: 'div',

    id: 'page-pictures',

    template: _.template($('#pictures-template').html()),

    //initialize: function(){
      //alert('Pictures');
    //},

    render: function(){
      $(this.el).html(this.template());
      return this;
    }
  });

  window.workspace = new Workspace();
  Backbone.history.start();
  //Router.navigate();
});

