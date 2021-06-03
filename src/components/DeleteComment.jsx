/* const DeleteComment = async (props)=>{

       const url = 'https://striveschool-api.herokuapp.com/api/comments/' + props['elementId']
        const key= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YTk5YzE2ZWY2MDAwMTVjZWQwNWUiLCJpYXQiOjE2MjI3MTQ3ODAsImV4cCI6MTYyMzkyNDM4MH0.-Wnp1TVPbpihQKGNhWBtiCGVL0J9wSxFlGgsbMfh4CA"

        console.log(url);

        try {
            let response =await fetch (url,{
                method : 'DELETE',
                headers:{
                    'Authorization' : key
                }
            })
            console.log(response);
            if(response.ok){
                 console.log('yay deleted')
               
            }else{
                 console.log('Oh No!! Its still there :(')
            }
            
        } catch (error) {
            console.log(error);
        }

}

export default DeleteComment */

/* export default DeleteComment

useEffect(() => {
    // DELETE request using fetch with async/await
    async function deletePost() {
        await fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' });
        setStatus('Delete successful');
    }

    deletePost();
}, []); */

/* import {Component} from 'react'

class DeleteComment extends Component{

    submitComment = async (e) =>{
        const url = 'https://striveschool-api.herokuapp.com/api/comments/' + this.props['elementId']
        const key= "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI4YTk5YzE2ZWY2MDAwMTVjZWQwNWUiLCJpYXQiOjE2MjI3MTQ3ODAsImV4cCI6MTYyMzkyNDM4MH0.-Wnp1TVPbpihQKGNhWBtiCGVL0J9wSxFlGgsbMfh4CA"

        try {
            let response =await fetch (url,{
                method : 'DELETE',
                headers:{
                    'Authorization' : key
                }
            })
            console.log(response);
            if(response.ok){
                 console.log('yay deleted')
               
            }else{
                 console.log('Oh No!! Its still there :(')
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    render(){
        return (
            this.submitComment()
        )
    }
}

export default DeleteComment */