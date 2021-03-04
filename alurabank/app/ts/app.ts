const controller = new NegociacaoController();
//Utilizando jquery
$('.form').submit(controller.adiciona.bind(controller));
