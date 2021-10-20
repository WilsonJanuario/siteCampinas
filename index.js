//import React from 'react';
import React, { useState } from 'react';

//import { ContainerPage, TitlePage } from "../../components/Main.js";

export default function Page(){
    const [ user, setUser ] = useState({
        id:1,
        name:'Paróquia São Benedito',
        photo:'../../../igrejaSaoBenedito.jpg',
        informação:<div>
            <text><br/></text>A Paróquia São Benedito (Centro) foi criada em 16 de agosto de 1966 por decreto do <text><br/></text>arcebispo metropolitano, dom Paulo de Tarso Campos. No entanto, a devoção a São Benedito e a construção de um templo consagrado a ele é bastante antiga, data de 1839. A realização dessa iniciativa deve-se ao escravo liberto Tito de Camargo Andrade, mestre Tito, como era conhecido. Mestre Tito sonhava com um templo onde os escravos se sentissem no que era seu, para louvarem a Deus como os brancos o faziam. Para isso, buscava esmolas e donativos de porta em porta. Conseguiu a concessão do terreno anexo ao jazigo do Cônego Melchior Fernandes Nunes de Camargo, junto ao cemitério de escravos. 
O velho devoto de São Benedito não pôde ver concretizado seu sonho. Morreu no dia 2 de janeiro de 1882. Após o seu<text><br/></text> falecimento, as obras da igreja estiveram paralisadas até que a Sra. Dona Ana de Campos Gonzaga tomou para si a enorme e difícil tarefa de concluir o templo. As obras continuaram e ficaram concluídas em 1885, sendo a nova igreja inaugurada no dia 11 de outubro. O retrato do mestre Tito encontra-se no interior do templo, ladeado pelo retrato de dona Ana de Campos Gonzaga. Em 1897, passou a funcionar, em um prédio anexo ao templo, o Colégio São Benedito, primeira escola para negros no Brasil.
A atual igreja tem outra fisionomia, porque passou por grandes reformas. Em 1926, a direção espiritual da Igreja de<text><br/></text> São Benedito foi confiada à Congregação dos Estigmatinos, nas pessoas do padre Fortunato Mantovani, primeiro reitor, auxiliado por padre Júlio Sief e Irmão Luiz Abram."


        </div>,

        fonte:'https://conheca.campinas.sp.gov.br/pois/785'
    

        
    });


    return(        
        <>
        <img src= { user.photo } alt= "Imagem" width = "700"/> 
        <br></br>
        Nome do ponto turistico: <b>{ user.name }</b><br/>   
        <b>{ user.informação }</b><br/>
        Fonte: {user.fonte}
        


       
            </>
         
    );
}


