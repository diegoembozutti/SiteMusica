function mais() { 
    var data = new Date;
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var ano = data.getFullYear();

  dataAtual ='Hoje é dia '+ dia + '/' + mes + ' de ' + ano;
    document.write(dataAtual)

   
        var x = document.createElement("ul");
        var t = document.createTextNode(dataAtual);
        x.appendChild(t);
        document.getElementById('tarefas').appendChild(t);
    
  }