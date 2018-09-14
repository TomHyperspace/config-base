exports.config =
  ###
  # Plugins options
  ###
  plugins:
    # Server
    autoReload:
      enabled: true


  ###
  # Builds
  ###
  files:
    javascripts:
      joinTo: 'js/app.js'

    stylesheets:
      joinTo: 'css/app.css'

  paths:
    watched: ['app/']

  modules:
    autoRequire:
      'js/app.js': ['src/index']
