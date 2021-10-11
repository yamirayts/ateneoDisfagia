$(document).ready(function () {
  $("#Power").click(function () {
    $("#datoParticular").empty();
    $("#datoParticular").append(`
                                    <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ_QrQxd219vJUhtMoLrQgwsHrlCxmJZGh2lIY29Ov7xYmkkQg7Xxz7R3mTJBg_MA/embed?start=true&loop=true&delayms=60000" frameborder="0" width="1280" height="900" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                                    `);
  });

  $("#Evaluacion").click(function () {
    $("#datoParticular").empty();
    $("#datoParticular").append(`
        <iframe class="tamano" src="https://docs.google.com/document/d/e/2PACX-1vQQ6c7QAycV2gnddrfxvp8DdDXbnvv1T9wW2a6SvHafHz5nY2n4X0IrBVOeHakmRg/pub?embedded=true" frameborder="0" width="1280" height="900" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
                                    `);
  });
});
