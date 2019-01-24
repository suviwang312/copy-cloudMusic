	function check(){
				var tel=document.querySelector(".tel").value;
				var pwd=document.querySelector(".pwd").value;
//				var sum=document.querySelector(".sub");
				var flag=false;
				String.prototype.trim()==function(){
					return this.replace(/^\s+/,"").replace(/\s+$/,"");
				}
				tel=tel.trim();
				pwd=pwd.trim();
				if(tel==""&& pwd==""){
					flag=false;
				}
				else if(tel==""){
					flag=false;
				}
				else if(pwd==""){
					flag=false;
				}
				else{
					flag= true;
				}
				return flag;
			}