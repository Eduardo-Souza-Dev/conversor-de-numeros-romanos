class ConvertNumber{
  // Número que vai ser recebido pelo usuário
  numero: number;



  constructor(numero: number) {
      this.numero = numero;
  }

  // Minha primeira ideia é fazer um switch comparando os valores recebidos em number, por exemplo, recebeu 1000 ele vai guardar dentro de um array,
  // Vai verificar a quantidade de caracteres numberCaracteres > 4, já se sabe que o valor é maior do 100, verifica a posição de cada número index[0]
  // Se o index[0] for 1 ele vai verificar qual o número romano correspondente e adicioná-lo ao array ou concatenar a uma variavel

convertNumberToRoman(): string {  // Aqui eu estou definindo os tipos romanos principais, considerando 1,5,10,50,100,500,1000
      let value_number = this.numero;
      let concat_index_0:string = '';
      let concat_index_1:string = '';
      let concat_index_2:string = '';
      let concat_full_index:string = '';
      let one:string = "I";
      let five:string = "V";
      let ten:string = "X";
      let fifty:string = "L";
      let hundred:string = "C";
      let fiftyhundred:string = "D";
      let thousand:string = "M";
      let dezena:number;
      let unidade:number;
      let centena:number;


      if(value_number > 0) { 
       let teste = value_number.toString().split("").map(value => parseInt(value));
       let array_number = teste;


          array_number.forEach((value,index) =>{        
            dezena = Math.floor((value_number % 100) / 10);
            unidade = Math.floor((value_number % 100) / 1);
            centena = Math.floor((value_number / 100));


                  switch (true) {

                      case index == (array_number.length - 1):

                      //Verifica os números menores do que 10
                        if(value  <  4){
                          for(let i = 0; i < value; i++){
                              concat_index_0 = concat_index_0 + one;  
                          }

                        }

                        else if(value == 4){
                          concat_index_0 = one + five;
                        }
                        else if(value > 4 && value <= 10){

                          if(value == 5){
                              concat_index_0 = five;
                          }                        

                          else if(value > 5 && value < 9){
                          for(let i = 5; i < value; i++){
                              concat_index_0 = concat_index_0 + one;  
                          }

                          concat_index_0 = five + concat_index_0;
                          }

                          else if(value == 9){
                              concat_index_0 = one + ten;
                          }

                        }
                        break;
                      case index == (array_number.length - 2):
                      //Verifica os números maiores do que 10 e que vai até 100

                      if(dezena === 1){
                        // concat_index_1 = ten;
                        for(let i = 10; i < unidade; i++){
                              concat_index_1 = concat_index_1;  
                          }
                      }


                      if(dezena  >  0 && dezena < 4){
                          for(let i = 0; i < dezena; i++){
                              concat_index_1 = concat_index_1 + ten;  
                          }
                      }

                      else if(dezena == 4){
                        concat_index_1 = ten + fifty;
                      }
                        else if(dezena > 4 && dezena <= 10){

                          if(dezena == 5){
                              concat_index_1 = fifty;
                          }                        

                          else if(dezena > 5 && dezena < 9){
                          for(let i = 5; i < dezena; i++){
                              concat_index_1 = concat_index_1 + ten;  
                          }

                          concat_index_1 = fifty + concat_index_1;
                          }

                          else if(dezena == 9){
                              concat_index_1 = ten + hundred;
                          }


                        }

                        break; 
                      case index == 0:
                      //Verifica números maiores do que 100 e menores do que 1000   
                    if(centena  >  0 && centena < 4){
                          for(let i = 0; i < centena; i++){
                              concat_index_2 = concat_index_2 + hundred;  
                          }
                      }

                      else if(centena == 4){
                        concat_index_2 = hundred + fiftyhundred;
                      }
                        else if(centena > 4 && centena <= 10){

                          if(centena == 5){
                              concat_index_2 = fiftyhundred;
                          }                        

                          else if(centena > 5 && centena < 9){
                          for(let i = 5; i < centena; i++){
                              concat_index_2 = concat_index_2 + hundred;  
                          }

                          concat_index_2 = fiftyhundred + concat_index_2;
                          }

                          else if(centena == 9){
                              concat_index_2 = hundred + thousand;
                          }


                        }
                        break;
                      default:
                    }

                    concat_full_index = concat_index_2 + concat_index_1 + concat_index_0;
                  
          })
      }

      return concat_full_index;


  }



} 

export default ConvertNumber;