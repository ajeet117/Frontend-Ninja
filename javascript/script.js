	var bar=document.querySelector(".bar .fa");
	var nav_item=document.querySelector(".nav-item");
	console.log(nav_item.style.display);
	console.log(bar);
	bar.addEventListener('click',function()
	{
		nav_item.classList.toggle("show");
	});

	var nav_list=document.querySelectorAll(".nav-item .nav-list");
	for(var i=0;i<nav_list.length;i++)
	{
		nav_list[i].onclick=function()
		{
			upclass(nav_list,'active','remove');
			if(!this.classList.contains('active'))
			{
				this.classList.add('active');
			}
		}
	}
	function upclass(e,c,a)
	{
		for(var i=0;i<nav_list.length;i++)
		{
			nav_list[i].classList[a](c);
		}
	}