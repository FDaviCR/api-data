module.exports = {
  async root(request, response){
    console.log("Teste de funcions");
  },

  async somar(a, b){
    return a+b;
  }
}