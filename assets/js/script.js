$(document).ready(function () {
  $("#Power").click(function () {
    $("#datoParticular").empty();
    $("#datoParticular").append(`
    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQL-p1cwMBOKD-DXXdqWd3ympL36gDLblmVDWW_ms1ZaJQAcrd5BLXgtlBqbONwYA/embed?start=false&loop=true&delayms=60000" frameborder="0" width="640" height="389" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
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
                                <div>
                                 <ul id="biblio">   
                                 <li>CALLORDA M, FERNÁNDEZ F. (2018) Protocolo de Evaluación del Trastorno NeveDeglutorio en adultos. Montevideo. </li>
                                 <li>CÁMPORA H, FALDUTI A. (2012) Evaluación y tratamiento de las alte- raciones de la deglución. Rev Am Med Resp 2012; 3: 98-107. </li>
                                 <li>CÁMPORA H, FALDUTI A. (2015) Deglución de la A a la Z. Ciudad Autónoma de Buenos Aires: Journal. </li>
                                 <li>CHIAPPERO G, FAlDUTI A. (2020) Detección de la disfagia en el paciente adulto con vía aérea artificial en Terapia Intensiva. Revisión narrativa y recomendaciones de expertos intersocietarias. http://revista.sati.org.ar/index.php </li>
                                 <li>CLARETTe M. (2013) Efecto de la insuflación de aire subglótico sobre la presión subglótica durante la deglución. Unidad de Kinesiología, Departamento de Diagnóstico y Tratamiento, Hospital de Agudos Donación Francisco Santojanni, Buenos Aires, Argentina. </li>
                                 <li>LAM P, STANSCHU S. (2017) The International Dysphagia Diet Standardisation Initiative (IDDSI) Andrframework: the Kempen pilot. BJNN/Stroke Association supplement. </li>
                                 <li>LUGARO M, RISSO A. (2018) Trastornos deglutorios luego de la extubación en Terapia. Hospital  “Prof. Dr. Luis Güemes” Haedo. Buenos Aires. Sanatorio Otamendi, Ciudad de Buenos Aires. REVISTA ARGENTINA DE TERAPIA INTENSIVA 2018 - 35 No 3. </li>
                                 <li>Deglución de la a A la Z, fisiopatología, evaluación, tratamiento, segunda edición, Horacio Campora, Alejandra Falduti, 2019.</li>
                                 <li>Https://neurorhb.com/blog-dano-cerebral/la-deglucion/</li>
                                 <li>Durango Sánchez, C., Gómez Yepes, A., Rodríguez Sánchez, N. & Delprado Aguirre, f. (2021). Propuesta para obtener consistencias líquidas para la evaluación de la disfagia . Revista areté , 21 (1), 33-41. Obtenido de: arete.ibero.edu.oarticle/view/2112
                                 </li>
                                 <li>Guías mundiales de la organización mundial de gastroenterología, disfagia guías y cascadas, actualización 2014
                                 </li>
                                 <li>Consecuencia y tratamiento de la disfagia, nutrición hospitalaria, vol. 2, núm. 2, mayo 2009, grupo aula médica, Madrid España.
                                 </li>
                                 <li>Nutrición y disfagia, articulo servicio de endocrinología y nutrición M.A. Martínez Olmos, D. Bellido Guerrero, 2003.</li>
                                 <li>Manejo De Los Pacientes Con Disfagia, Nutrición Hospitalaria, Vol.5, Núm.1, Mayo, 2012, Grupo Aula Medica, Madrid España.
                                 </li>
                                 <li>Evaluación De La Disfagia En Pacientes Con Enfermedades Neurológicas Y Sus Relaciones Con Riesgo De Desnutrición. Med. Int. Mex. 2018
                                 </li>
                                 <li>Características técnicas de los productos alimentarios específicos para el paciente con disfagia. Nutrición hospitalaria 2015
                                 </li>
                                 <li>Disfagia En Tiempos De Covid. Articulo De Revisión Rev. Otorrinolaringol. Cir. Cabeza Cuello 2020. Santiago Chile
                                 </li>
                                 <li>Consenso De Diagnostico Y Tratamiento De Los Trastornos  Deglutorios Y Nutricionales De Los Pacientes Con Accidente Cerebrovascular. Revista Argentina De Terapia Intensiva (Sati) Vol. 32, Núm.2, 2018 
                                 </li>
                                 <li>IDDSI. https://iddsi.org/IDDSI/media/images/Translations/IDDSI_
                                 </li>
                                 <li>TestingMethods_V2__LA_SPANISH_FINAL_July2020.pdf</li>
                                 <li>Disfagia orofaríngea: soluciones multidisciplinares. Con 36 recetas elaboradas en el Hospital Universitario Príncipe de Asturias. 1. ª edición, diciembre 2018. Grupo Aula Médica, S. L.</li>
                                 <li>Guía de nutrición en disfagia. Universidad del Bío Bío. Año 2020. Proyecto Fondo de Desarrollo de la Docencia. </li>
                                 <li>Libro de recetas de Nutricia Nutrilis</li>
                                 <li>Guía práctica de gastronomía triturada. Fundación Catalunya La Pedrera.
                                 </li>
                                </ul>
                                </div>
                                
                                    `);
  });

  $("#Nutricion").click(function () {
    $("#datoParticular").empty();
    $("#datoParticular").append(`
                              
              <img id="imgNutri" src="./assets/documentos/nutri.jpg" alt="">
              <a target="_blank" href="./assets/documentos/recetario.pdf" download="Recetario nutricion"><button id="Integrante" type="button" class="btn btn-danger botones__individual col-6 col-sm-2">
                                Descargar
                            </button></a>
                              
                                  `);
  });
});
