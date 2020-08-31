var add_jur=true,add_fis=true
servicos_jur=["servico_jur1","servico_jur2","servico_jur3","servico_jur4"]
servicos_fis=["servico_fis1","servico_fis2","servico_fis3","servico_fis4"]
servicos_jur.description = ["Descricao1","Descricao2", "Descricao3", "Descricao4"]
servicos_fis.description = ["Descricao1","Descricao2", "Descricao3", "Descricao4"]


function juridico () {
	
	document.getElementById("fisico").style.display = 'none';
	if(add_jur==true){
		for (var i = 0 ; i < servicos_jur.length ; i++) {
			document.getElementById("juridica").innerHTML+="<a style='background: #ed5c5c;color:white;text-align: left;margin: 100px;' type='circle' id='servico_jur"+(i+1)+"'>"+servicos_jur[i]+"</a>"
		}
		add_jur=false
		ShowDescription()
	}
	document.getElementById("juridica").style.display = 'block';
}


function fisico () {
	
 	document.getElementById("juridica").style.display = 'none';
 	if(add_fis==true){
		for (var i = 0 ; i < servicos_jur.length ; i++) {
			document.getElementById("fisico").innerHTML +="</br><li wm-atributo style='background:#292529;color:white' type='circle' id='fisico"+(i+1)+"'>"+servicos_fis[i]+"</li>"
			document.getElementById("fisico").innerHTML +="<ul style = 'display: none'>	<p>"+ servicos_fis.description[i]+" </p></ul>"
		}
		add_fis=false
		ShowDescription()
		 
	}
	document.getElementById("fisico").style.display = 'inline';
}

function ShowDescription(){
	document.querySelectorAll('[wm-atributo]').forEach(folder =>{
		console.log(folder)
		folder.onclick = function(e){
			
			const descricao = folder.nextElementSibling
			const display = descricao.style.display
			descricao.style.display = display === 'none' ? 'block' : 'none'
		}
	})
}

