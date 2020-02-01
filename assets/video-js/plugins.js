function ActivatePlugins(){var vid=videojs("container",{plugins:{"socialOverlay":{"onScreen":true},"resolutionSelector" : { "default_res" : "360" }}}, function() {
			
			// "this" will be a reference to the player object
			var player = this;
			
			// Listen for the changeRes event
			player.on( 'changeRes', function() {
				
				// player.getCurrentRes() can be used to get the currently selected resolution
				console.log( 'Current Res is: ' + player.getCurrentRes() );
			});
		});}