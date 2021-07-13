let cards=[
    {
        image:"https://i.pinimg.com/originals/19/26/66/192666d99dda1ecc01498ea01dd09e98.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/19/26/66/192666d99dda1ecc01498ea01dd09e98.jpg",
        value:1,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/99/3f/08/993f081c18ca4e247aa0c8270b4153d3.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/99/3f/08/993f081c18ca4e247aa0c8270b4153d3.jpg",
        value:2,
        status:"closed"
    },
    {
        image:"https://wallpapers.gg/wp-content/uploads/2017/10/Teen-Gohan-SSJ2-DBZ-HD-640x960.jpg",
        value:3,
        status:"closed"

    },
    {
        image:"https://wallpapers.gg/wp-content/uploads/2017/10/Teen-Gohan-SSJ2-DBZ-HD-640x960.jpg",
        value:3,
        status:"closed"

    },
    {
        image:"https://i.pinimg.com/originals/e6/72/5a/e6725a562559100bbf2cf4b50151db7f.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://i.pinimg.com/originals/e6/72/5a/e6725a562559100bbf2cf4b50151db7f.jpg",
        value:4,
        status:"closed"
    },
    {
        image:"https://cdn.wallpapersafari.com/38/76/5pgGFr.jpg",
        value:5,
        status:"closed"
    },
    {
        image:"https://cdn.wallpapersafari.com/38/76/5pgGFr.jpg",
        value:5,
        status:"closed"
    },

  
]




// durnsten shuffling alogorithm 

let temp;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));
    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;
}

let cardsCopy=cards;



function displayCards(data){

    let cardsString="";

    

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });


    document.getElementById('cards').innerHTML=cardsString;

}


displayCards(cards);






let cardCount=1;
let val1=null,val2=null;
let score=0;
function openCard(index){

    console.log(cards);

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;

        if(val1===val2){
            score++;
            document.getElementById('score').innerText=score;

            // reste after one guess 
            val1=null;
            val2=null;
            cardCount=1;

        }
        else{
            score--;
            location.reload();

        }

        
    }

    displayCards(cards);

}












