

const itemCtrl = (function(){
   
    return{
        api: function(response){
            const result = [
                { 
                    "title": "flakerocks1",
                    "description": "here",
                    "thumbnail": "as"
                },
                { 
                    "title": "flakerocks1",
                    "description": "he123re",
                    "thumbnail": "as"
                }
            ]
            return result
        }
    }
})()

const UICtrl = (function(itemCtrl){
    const selectors = {
        container: ".container",
        cards_sec: ".cards-section",
        execute: ".execute"
    }
    const elements = {
        card : function(){
            const card = document.createElement("div");
            card.classList.add("card");
            return card
        }
        
    }
    return{
        showCard: function(response){
            response.result.items.forEach((item)=>{
                const description = item.snippet.description;
                const title = item.snippet.title;
                const thumbnail = item.snippet.thumbnails.high.url;
                const videoId = item.contentDetails.videoId;
                const url = `https://www.youtube.com/watch?v=${videoId}`;
                const card = elements.card();
                card.innerHTML = `
                <div class="card-header">
                    <a href='${url}'><img src='${thumbnail}'></a>
                </div>
                <div class='card-info card-body'>
                    <p>${title}</p>
                    <p>${description}</p>
                </div>
                `;
                document.querySelector(selectors.cards_sec).appendChild(card);
            })
            
        },
        disableExecute: function(){
            document.querySelector(selectors.execute).setAttribute('disabled', true);
        },
        itemsVal : function(){
            return items
        }
    }

})()

const app = (function(itemCtrl, UICtrl){
    const loadEventListeners = function(){
        document.querySelector(".execute").addEventListener("click", (e)=>{
            loadClient();
            setTimeout(function() { app.init(); }, 2000);
            
        })
    }
return{
    init: function(){
        execute().then(res=>{
            let response = res;
            UICtrl.showCard(response);
        })
        UICtrl.disableExecute();
      
   
    },
    eventListener: function(){
        loadEventListeners();
    },
 
}
})(itemCtrl, UICtrl)

app.eventListener();

