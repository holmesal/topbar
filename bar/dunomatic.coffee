
# Needs a library for requests cuz self-respect
request = require 'browser-request'

# Init script will call `Dunomatic.init(token)`

class Dunomatic

	# Happens before DOM load
	constructor: ->
		# Wait for the window to load, then set up the HTML fragment
		window.onload = @initHTML

		# Default bar message
		@barMessage = 'Yikes, looks like your card is about to expire!'
		# Default font color
		@fontColor = 'white'

	# Happens after DOM load
	initHTML: =>
		# Target the body
		bodyElement = document.getElementsByTagName('body')[0]
		# Create the new node
		@dunbar = document.createElement 'div'
		# Insert that shit
		bodyElement.insertBefore @dunbar, bodyElement.firstChild
		# Set the class
		@dunbar.setAttribute 'class', 'dunomatic-container'
		# Catch click events
		@dunbar.onclick = @barClicked
		# Set the inner html
		@setBarContent()
		# Set the element style
		@initStyle()
		# Set up the banner
		# frag = 
		# @banner = 
		# 	elem: document.createDocumentFragment
		# 	shown: false

	initStyle: ->
		# Fuck this shit - use jQuery instead
		# Check the padding on the body, and add some extra padding to the top if necessary
		# Have it slide out from underneath?
		console.log @dunbar
		@style = 
			'background-color': 'rgb(0,165,193)'
			'width': '100%'
			'height': '0px'
			'overflow': 'auto'
			'-webkit-transition': '1s ease-in-out all'
			'transition': '1s ease-in-out all'
			'-webkit-transform': 'translateZ(0)'
			'-moz-transform': 'translateZ(0)'
			'-ms-transform': 'translateZ(0)'
			'-o-transform': 'translateZ(0)'
			'transform': 'translateZ(0)'

		@setStyle()

	setStyle: ->
		styleString = ''
		for k,v of @style
			styleString += "#{k}:#{v};"
		@dunbar.setAttribute 'style', styleString

	setBarContent: ->
		@dunbar.innerHTML = "<p class='dunomatic-message' style='width:100%;height:100%;text-align:center;margin:0;padding-top:10px;color:white;'>#{@barMessage} <a style='color:#{@fontColor}' href='http://google.com'>Update your card</a></p>"

	showBar: ->
		@style.height = '40px'
		@setStyle()

	hideBar: ->
		@style.height = '0px'
		@setStyle()


	log: (thing) ->
		console.log thing if @debug

	# Called to initialize the script
	init: (@token, @debug=false) ->
		@log "Dunomatic initialized with token #{@token}"

		if !token or token is 'YOUR-DUNOMATIC-TOKEN'
			console.error "Incorrect Dunomatic token: #{@token}"

	# Called when a user logs in with that user's stripe ID
	login: (stripeID) ->
		# Make a request to a node server with that user's id
		# TODO - Do this

	# Called when the bar is clicked
	barClicked: =>
		alert 'click'

	# showBanner: 


# Store it on the window
window.Dunomatic = new Dunomatic