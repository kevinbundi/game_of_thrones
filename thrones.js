$(document).ready(function(){
			$('img').click(function(){
				name = this.id
				myUrl = 'http://www.anapioficeandfire.com/api/houses/' + name
				/*a free proxy server named 'CORS Anywhere' which adds CORS headers to the proxied request. allows to bypass 'Cross-Control-Allow-Origin' error*/
				proxy = 'https://cors-anywhere.herokuapp.com/'
				finalUrl = proxy + myUrl
				$.get(finalUrl,function(res){
					console.log(res)
					html_str = ""
					html_str += "<h2>House Details</h2>"

					html_str += "<h4>Name: " + res.name + "</h4>"
					html_str += "<p>Founded: " + res.founded + "</p>"
					html_str += "<p>Coat of Arms: " + res.coatOfArms + "</p>"
					html_str += "<p>Words: " + res.words + "</p>"
					html_str += "<p>Titles: ("
					for(var i=0;i<res.titles.length;i++){
						html_str += res.titles[i] 
						html_str += ", "
					}
					html_str += ")</p>" 
					$('#bottom').html(html_str)
					
				})
			})
		})