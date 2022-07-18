import produtoData from '../data/produtos';

var main = function (callback) {
  function buscarProdutos() {
    var produtos = localStorage.getItem('PRODUTOS');

    if (produtos) {
      produtos = JSON.parse(produtos);
    } else {
      // var xhttp = new XMLHttpRequest();
      // xhttp.onreadystatechange = function () {
      //   if (this.readyState === 4 && this.status === 200) {
      //     produtos = JSON.parse(this.responseText).data;
      //     localStorage.setItem('PRODUTOS', JSON.stringify(produtos));
      //     callback(produtos);
      //   }
      // };

      // xhttp.open('GET', 'URL', true)
      // xhttp.setRequestHeader('Content-Type', 'application/json')
      // xhttp.send();

      produtos = produtoData.produtosList;
      localStorage.setItem('PRODUTOS', JSON.stringify(produtos));
    }
    callback(produtos);
  }

  buscarProdutos();
};
