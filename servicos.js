

const servicos = []
servicos.jur = ['servico1', 'servico2', 'servico3', 'servico4']
servicos.pes = ['servico1', 'servico2', 'servico3', 'servico4']

function juridico () {
    console.log('aqui')
    console.log(document.getElementById('jobs'))
    document.getElementById('jobs').style.display = 'block'
}

document.querySelectorAll('[wm-atributo]').forEach(folder =>{
    folder.onclick = function(e){
        const descricao = folder.nextElementSibling
        const display = descricao.style.display
        descricao.style.display = display === 'none' ? 'block' : 'none'
    }
}) 
