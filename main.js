$(document).ready(function() {
    // Para adicionar uma tarefa ao enviar o formulário
    $('#tarefas').submit(function(event) {
      event.preventDefault();
      var nomeTarefa = $('#input-tarefa').val();
      if (nomeTarefa) {
        var listItem = $('<li text decoration : line through></li>').text(nomeTarefa);
        $('#lista').append(listItem);
        $('#input-tarefa').val('');
      }
    });
    
    $(document).on('click', 'li', function() {
      $(this).toggleClass('concluido');
    });
  });