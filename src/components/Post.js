import React from "react";
import Post from '../components/PostOwner'; 


const myList = [

    { id: 1, username: "Yazan", msgBody: "شبببببباااااااااب", imageURL:"https://th.bing.com/th/id/OIP.CsCEiIgcxJ54PXFJ-Ep5nQAAAA?pid=ImgDet&rs=1" ,},
    { id: 2, username: "waseem", msgBody: "كيف حالهم",imageURL:"https://cdn4.iconfinder.com/data/icons/avatars-21/512/avatar-circle-human-male-1-512.png" },
    { id: 3, username: "mohammed", msgBody: "ويينكو!!",imageURL:"https://th.bing.com/th/id/OIP.WXvaECLGzqwqSwK0A7GbYwHaFD?pid=ImgDet&w=840&h=574&rs=1" }
];

function MyPost() {
    return (<div>
        <Post id={myList[0].id} userName={myList[0].username} msgBody={myList[0].msgBody} imageURL={myList[0].imageURL} />
        <Post id={myList[1].id} userName={myList[1].username} msgBody={myList[1].msgBody} imageURL={myList[1].imageURL}  />
        <Post id={myList[2].id} userName={myList[2].username} msgBody={myList[2].msgBody} imageURL={myList[2].imageURL} />
    </div>);
}

export default MyPost;