const showUsers=document.querySelector('.showUsers');
const showAlbum=document.querySelector('.showAlbumId');

const getInfo=async ()=>{
try {
    const users=await fetch('https://jsonplaceholder.typicode.com/photos');
    const [...data1]=await users.json();
    let t=1




    for(let eachUser of data1){
        const {albumId,id,title,url,thumbnailUrl}=eachUser;

        
        if(t<=300){
        t++
        const html=`
        
        <div class='single-box'>
            <div >
                <h3>title:${title}</h3>
                <h3>Album I'd:${albumId}</h3>  
                <img class='image-thumbnail' src=${thumbnailUrl}/>
            </div>                  
        </div>`
        


        showUsers.innerHTML +=html

        }
        else{
            break
        }
    }




}catch (error){
        console.log(error)
    }
};

getInfo();