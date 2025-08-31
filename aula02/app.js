function saudacao (nome, callback) 
// (argumento, função que será chamada entro da função saudacao)
{ 
    console.log(`Olá, ${nome}.`); 
    callback(); 
} 

saudacao("João", ()=> { 
    console.log("Callback executado após a saudação."); 
}); 
