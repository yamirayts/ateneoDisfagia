$(document).ready(function () {
  $("#Power").click(function () {
    $("#datoParticular").empty();
    $("#datoParticular").append(`
                                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ_QrQxd219vJUhtMoLrQgwsHrlCxmJZGh2lIY29Ov7xYmkkQg7Xxz7R3mTJBg_MA/embed?start=true&loop=true&delayms=60000"></iframe>
                                    <a target="_blank" href="./assets/documentos/Disfagia.pptx" download="EvaluacionDeLaDeglucion"><button id="Integrante" type="button" class="btn btn-danger botones__individual col-6 col-sm-2">
                                            Descargar
                                     </button></a>
                                    `);
  });

  $("#Evaluacion").click(function () {
    $("#datoParticular").empty();
    $("#datoParticular").append(`
                                <img src="./assets/documentos/eva1.jpg" alt="">
                                <img src="./assets/documentos/eva2.jpg" alt="">
                                <a target="_blank" href="./assets/documentos/Evaluacion.pdf" download="EvaluacionDeLaDeglucion"><button id="Integrante" type="button" class="btn btn-danger botones__individual col-6 col-sm-2">
                                Descargar
                            </button></a>
                                    `);
  });

  $("#Bibliografia").click(function () {
    $("#datoParticular").empty();
    $("#datoParticular").append(`
                                
                                <h3>Bibliografía</h3>
                                 <ul>   
                                <li>CALLORDA M, FERNÁNDEZ F. (2018) Protocolo de Evaluación del Trastorno NeveDeglutorio en adultos. Montevideo. </li>
                                <li>CÁMPORA H, FALDUTI A. (2012) Evaluación y tratamiento de las alte- raciones de la deglución. Rev Am Med Resp 2012; 3: 98-107. </li>
                                <li>CÁMPORA H, FALDUTI A. (2015) Deglución de la A a la Z. Ciudad Autónoma de Buenos Aires: Journal. </li>
                                <li>CHIAPPERO G, FAlDUTI A. (2020) Detección de la disfagia en el paciente adulto con vía aérea artificial en Terapia Intensiva. Revisión narrativa y recomendaciones de expertos intersocietarias. http://revista.sati.org.ar/index.php </li>
                                <li>CLARETTe M. (2013) Efecto de la insuflación de aire subglótico sobre la presión subglótica durante la deglución. Unidad de Kinesiología, Departamento de Diagnóstico y Tratamiento, Hospital de Agudos Donación Francisco Santojanni, Buenos Aires, Argentina. </li>
                                <li>LAM P, STANSCHU S. (2017) The International Dysphagia Diet Standardisation Initiative (IDDSI) Andrframework: the Kempen pilot. BJNN/Stroke Association supplement. </li>
                                <li>LUGARO M, RISSO A. (2018) Trastornos deglutorios luego de la extubación en Terapia. Hospital  “Prof. Dr. Luis Güemes” Haedo. Buenos Aires. Sanatorio Otamendi, Ciudad de Buenos Aires. REVISTA ARGENTINA DE TERAPIA INTENSIVA 2018 - 35 No 3. </li>
                                </ul>
                                
                                    `);
  });
});
