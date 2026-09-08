// Blocos de rotina durante a viagem: PHzinho da Valentina + treino da Angela.
// Critério: só usar a manhã até 10h quando isso não prejudica a programação principal do dia.
(function(){
  function rotinaManha(){
    return slot('08:00–10:00','PHzinho + treino da Angela','Manhã reservada para a Valentina fazer o PHzinho e para a Angela treinar, antes de começar os passeios.',[
      p('PHzinho da Valentina','rotina','Bloco de estudo da manhã, sem pressa, antes de sair.','Sem custo','Não precisa','Fazer na hospedagem, com o material escolar já separado.',''),
      p('Treino da Angela','rotina','Bloco reservado para o treino da Angela enquanto a Valentina estuda.','Sem custo adicional previsto','Não precisa','Fazer o treino planejado do dia, adaptando ao espaço/equipamento disponível.','')
    ]);
  }

  const dia09 = days.find(d=>d.id==='09');
  if (dia09) {
    dia09.title='Posillipo + Marechiaro + Gaiola';
    dia09.mood='Manhã tranquila para estudo e treino; depois, mar e paisagem em Posillipo sem correr.';
    dia09.facts=['08:00–10:00 PHzinho + treino','Priorizar Gaiola no turno da tarde','Almoço com vista para o mar','Fim de tarde em Posillipo'];
    dia09.slots=[
      rotinaManha(),
      slot('10:30','Saída para Marechiaro','Depois da rotina da manhã, seguir para a parte mais bonita e tranquila de Posillipo.',[
        p('Táxi até Marechiaro','rotina','A forma mais simples para três pessoas saindo do Centro Storico.','Táxi local','Na hora','Pedir destino: Marechiaro / Calata Ponticello.','https://www.google.com/maps/search/?api=1&query=Marechiaro+Napoli')
      ]),
      slot('11:00','Marechiaro','Passear pelo pequeno borgo, ver a Fenestella e aproveitar a vista antes do almoço.',[
        p('Borgo di Marechiaro','visita','Escadarias, barcos e um dos cenários mais charmosos de Posillipo.','Grátis','Não precisa','Descer a pé pela Calata Ponticello.','https://www.google.com/maps/search/?api=1&query=Marechiaro+Napoli')
      ]),
      slot('12:15','Almoço em Marechiaro','Almoçar com calma antes da Gaiola.',[
        p('Almoço em Marechiaro','comida','Priorizar peixe, massas e pratos simples com vista para o mar.','€€-€€€','Reserva recomendada para mesa externa','Ficar no próprio borgo para não perder tempo em deslocamentos.','https://www.google.com/maps/search/?api=1&query=ristoranti+Marechiaro+Napoli')
      ]),
      slot('14:00','Parco Sommerso di Gaiola','Reservar o turno da tarde para manter a manhã livre para estudo e treino.',[
        p('Gaiola','visita','Área marinha protegida diante das ilhotas da Gaiola, com água clara e paisagem muito diferente do Centro Storico.','Grátis','Reservar preferencialmente 14:00–18:00','Táxi curto até a Discesa Gaiola e depois descida a pé. Se só houver vaga de manhã, este dia vira exceção e a rotina é pulada.','https://www.areamarinaprotettagaiola.it/prenotazione')
      ]),
      slot('18:15','Parco Virgiliano ou pôr do sol em Posillipo','Fechar o dia com vista, sem voltar para a muvuca.',[
        p('Parco Virgiliano','opcional','Parque panorâmico no alto de Posillipo, com vistas para Nisida, Capri, Procida, Ischia e o Golfo.','Grátis','Não precisa','Táxi curto desde a Gaiola. Se estiverem cansados, voltar direto.','https://www.google.com/maps/search/?api=1&query=Parco+Virgiliano+Napoli')
      ])
    ];
  }

  const dia15 = days.find(d=>d.id==='15');
  if (dia15) {
    dia15.title='Polignano a Mare + praia';
    dia15.mood='Manhã para estudo e treino; depois, falésias, mar e um dia sem pressa em Polignano.';
    dia15.facts=['08:00–10:00 PHzinho + treino','Saída depois das 10h','Praia com estrutura','Jantar de frutos do mar'];
    dia15.slots=[
      rotinaManha(),
      slot('10:15','Saída para Polignano','Bate-volta curto, perfeito para começar depois das 10h sem prejudicar o dia.',[
        p('Carro até Polignano a Mare','rotina','Trajeto rápido pela costa.','Combustível incluso na estimativa','Não precisa','Cerca de 9 km; procurar estacionamento fora do centro.','https://www.google.com/maps/dir/Monopoli/Polignano+a+Mare')
      ]),
      slot('10:45','Centro e mirantes','Caminhar pela aldeia branca sobre as falésias.',[
        p('Polignano a Mare','visita','Centro histórico, mirantes e vistas do Adriático.','Grátis','Não precisa','Percurso a pé a partir do estacionamento.','https://www.google.com/maps/search/?api=1&query=Polignano+a+Mare')
      ]),
      slot('12:30','Almoço leve','Comer antes da praia para depois desacelerar.',[
        p('Almoço em Polignano','comida','Escolher uma refeição leve no centro histórico.','€€','Não precisa','Ficar no centro para seguir à praia depois.','https://www.google.com/maps/search/?api=1&query=restaurants+Polignano+a+Mare')
      ]),
      slot('14:00','Praia com estrutura','Passar a tarde em um lido confortável.',[
        p('Lido em Polignano','visita','Espreguiçadeiras, banheiro e apoio para um dia de praia confortável.','Pago; consultar diária do lido','Reservar recomendado','Escolher opção com estacionamento ou acesso simples.','https://www.google.com/maps/search/?api=1&query=lido+Polignano+a+Mare')
      ]),
      slot('17:30','Gelato e passeio final','Parada doce antes do jantar ou retorno.',[
        p('Gelato em Polignano','comida','Pausa no centro histórico antes do fim do dia.','€','Não precisa','No centro histórico.','https://www.google.com/maps/search/?api=1&query=gelato+Polignano+a+Mare')
      ]),
      slot('19:30','Jantar de frutos do mar','Encerrar o dia sem correria.',[
        p('Ristorante Da Tuccino','comida','Peixe fresco e frutos do mar com vista.','€€€','Reservar antes','Em Polignano a Mare; confirmar horário.','https://www.google.com/maps/search/?api=1&query=Ristorante+Da+Tuccino+Polignano+a+Mare')
      ])
    ];
  }

  const dia17 = days.find(d=>d.id==='17');
  if (dia17) {
    dia17.title='Matera — Sassi';
    dia17.mood='Manhã para estudo e treino; saída às 10h e tarde inteira nos Sassi.';
    dia17.facts=['08:00–10:00 PHzinho + treino','Saída às 10:00','1h15 de carro','Sassi a pé sem pressa'];
    dia17.slots=[
      rotinaManha(),
      slot('10:00','Saída para Matera','Mesmo começando mais tarde, ainda sobra uma tarde longa para explorar os Sassi.',[
        p('Carro Monopoli → Matera','rotina','Bate-volta até a Basilicata.','Combustível e estacionamento à parte','Não precisa','Cerca de 1h15; estacionar fora dos Sassi e respeitar a ZTL.','https://www.google.com/maps/dir/Monopoli/Matera')
      ]),
      slot('11:20','Primeiras vistas + Sassi','Entrar pelo alto e começar pelos mirantes antes de descer.',[
        p('Sassi di Matera','visita','Bairros-caverna Patrimônio UNESCO, com uma paisagem única.','Grátis nas áreas públicas','Não precisa','Percurso de pedra, com escadas e trechos inclinados.','https://www.google.com/maps/search/?api=1&query=Sassi+di+Matera')
      ]),
      slot('13:15','Almoço com vista','Pausa no meio do passeio, sem pressa.',[
        p('La Nicchia Nel Sasso','comida','Cozinha contemporânea com vista para os Sassi.','€€','Reservar antes','No próprio percurso dos Sassi.','https://www.google.com/maps/search/?api=1&query=La+Nicchia+Nel+Sasso+Matera')
      ]),
      slot('14:45','Sassi + Casa Grotta','Continuar a caminhada e entrar em uma antiga casa-caverna se houver energia.',[
        p('Casa Grotta','opcional','Museu pequeno dentro de uma antiga casa-caverna, bom para entender como se vivia ali.','Ingresso pago','Não precisa','Escolher uma Casa Grotta próxima ao percurso.','https://www.google.com/maps/search/?api=1&query=Casa+Grotta+Matera')
      ]),
      slot('17:00','Retorno a Monopoli','Voltar antes de ficar tarde e descansar.',[
        p('Retorno pela estrada','rotina','Fim do último bate-volta da viagem.','Combustível incluso na estimativa geral','Não precisa','Cerca de 1h15 até Monopoli.','https://www.google.com/maps/dir/Matera/Monopoli')
      ])
    ];
  }

  // Atualiza a tela depois dos ajustes.
  selected=null;
  render();
})();
