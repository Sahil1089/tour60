setfid()
let viewobj;
viewobjitem()
generatefullItemhtml();

function viewobjitem(){
    let i = idfordetail;

    viewobj=destination[i]
    console.log(
        viewobj
    )
}


function generatefullItemhtml(){

    let cont = document.querySelector(".container").innerHTML=`
    <div class="head">
            <div class="img">
                <img src="${viewobj.image
                    
                }" alt="">
            </div>
            <div class="about">
                <h1>${viewobj.name}</h1>
                <h2>${viewobj.loc}</h2>
                <p>this is the buddha temple ,made during <br> ashoka period</p>
                <br>
                <pre>
                    Area: 249 km²
                   
                     Neighborhoods: Miya Bigha, Upadhayay Bigha, Bhagalpur, Dehriya Bigha
                     District: Gaya
                      PIN: 824231
                </pre>
            </div>
        </div>
        <div class="history" style="display: flex;flex-wrap: wrap; overflow-y: scroll;">
            <h1>HISTORY</h1>
            <br>
            <p>
                Bodh Gayā is a religious site and place of pilgrimage associated with the Mahabodhi Temple complex, situated in the Gaya district in the Indian state of Bihar. It is famous for being the place where Gautama Buddha is said to have attained enlightenment (Pali: bodhi) under what became known as the Bodhi Tree.
                <br>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Bodhgaya_3639641913_f4c5f73689_t.jpg/220px-Bodhgaya_3639641913_f4c5f73689_t.jpg" alt="dfsjkgl"><br>
                The Bodhi Tree ("tree of awakening" or "tree of enlightenment"[1]), also called the Mahabodhi Tree or Bo Tree,[2] is a large sacred fig tree (Ficus religiosa)[1][3] located in Bodh Gaya, Bihar, India. Siddhartha Gautama, the spiritual teacher who became known as the Buddha, is said to have attained enlightenment or buddhahood circa 500 BCE under this tree.[4] In religious iconography, the Bodhi Tree is recognizable by its heart-shaped leaves, which are usually prominently displayed.[5]

The original tree under which Siddhartha Gautama sat is no longer living, but the term "bodhi tree" is also applied to existing sacred fig trees. The foremost example of an existing tree is the Mahabodhi Tree growing at the Mahabodhi Temple in Bodh Gaya, which is often cited as a direct descendant of the original tree. This tree, planted around 250 BCE, is a frequent destination for pilgrims, being the most important of the four main Buddhist pilgrimage sites.
            </p>

        </div>
        
    
        <div class="left">
          <h1 style="font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif; margin: 2vw 2vw;">NEAR-BY PLACES</h1>
        <div class="nearby">
            
            
            <div class="minicard">
                <img src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/06/d603a7dc4db8c107e63366c473996346_1000x1000.jpg" alt="">
                <h1>THAI MONESTRY</h1>

            </div>
           
            <div class="minicard">
                <img src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/06/d603a7dc4db8c107e63366c473996346_1000x1000.jpg" alt="">
                <h1>THAI MONESTRY</h1>

            </div>
            <div class="minicard">
                <img src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/06/d603a7dc4db8c107e63366c473996346_1000x1000.jpg" alt="">
                <h1>THAI MONESTRY</h1>

            </div>
            <div class="minicard">
                <img src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/06/d603a7dc4db8c107e63366c473996346_1000x1000.jpg" alt="">
                <h1>THAI MONESTRY</h1>

            </div>
            

        </div>
    </div>
    <div class="right">
        <div class="hotel">

        </div>
    </div>
      
          
`


}