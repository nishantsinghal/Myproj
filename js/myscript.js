
		dialog1 = document.querySelector("#dialog-1");
		menu = document.querySelector("#menu");

		menu.addEventListener("click", function(){
			var menuToggle=true;
			if(menuToggle){
				showMenu();
				menuToggle = false;
			}
		});

		
		dialog1 = document.querySelector("#dialog-1");
		menu = document.querySelector("#menu1");

		menu.addEventListener("click", function(){
			var menuToggle1=true;
			if(menuToggle1){
				hideMenu();
				menuToggle1 = false;
			}
		});


		function showMenu() {
			dialog1.style.zIndex = 0;
		}

		function hideMenu() {
			dialog1.style.zIndex = -1;
		}