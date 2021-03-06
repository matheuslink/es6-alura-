class DateHelper {

    constructor(){
        throw new Error("Date Helper não pode ser instanciada.");
    }

    static dataParaTexto(data){
        return `${data.getDate()}/${(data.getMonth()+1)}/${data.getFullYear()}`;
    }

    
    static textoParaData(texto){
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)) 
            throw new Error("Data no formato inválido: yyyy-mm-dd");
        
        return new Date(...texto.split('-').map((item, i) => item - i % 2));
    }
}