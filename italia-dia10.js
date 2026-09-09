// Dia 10 atualizado: Pompeia + Vesúvio retirados do roteiro.
(function(){
  const dia10 = days.find(d => d.id === '10');
  if (!dia10) return;

  dia10.title = 'Dia livre em Nápoles — novo passeio a definir';
  dia10.mood = 'Pompeia e Vesúvio foram retirados do roteiro. Mantemos o dia livre até decidir o novo passeio, sem preencher automaticamente com outra atração.';
  dia10.facts = [
    'Pompeia: retirado',
    'Vesúvio: retirado',
    'Sem saída cedo programada',
    'Novo passeio a definir'
  ];
  dia10.slots = [
    slot('Manhã','Manhã livre','Nenhum compromisso reservado para este dia no momento.',[
      p('Dia livre','rotina','Pompeia e Vesúvio não fazem mais parte da viagem. O dia fica aberto até escolhermos a substituição.','Sem custo previsto','Nada reservado','Não é necessário sair cedo enquanto o novo passeio não for definido.','')
    ]),
    slot('Restante do dia','Passeio a definir','Vamos preencher este espaço apenas depois de escolher a nova programação.',[
      p('Novo passeio','opcional','Espaço reservado para uma nova escolha em Nápoles ou arredores.','A definir','A definir','A logística será adicionada depois da escolha.','')
    ])
  ];

  selected = null;
  render();
})();
