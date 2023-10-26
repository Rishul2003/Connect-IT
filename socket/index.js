require('dotenv').config();
const io=require("socket.io")(8900,{
    cors:{
        origin:"*",
    },
})
console.log(process.env.Frontendurl);
let users=[];
const adduser=(userid,socketid)=>{
    console.log(userid,socketid);
    !users.some(u=>u.userid===userid)&&
    users.push({userid,socketid});
}
const removeuser=(socketid)=>{
    users=users.filter(user=>user.socketid!=socketid);
}
const getUser=(userid)=>{
    return users.find(user=>user.userid===userid)
}

io.on("connection",(socket)=>{
    console.log("User connected");
    socket.on("adduser",userid=>{
        adduser(userid,socket.id);
        console.log(users);
        io.emit("getusers",users);
    });
    //send and get message
    socket.on("sendmessage",({senderid,receiverid,text})=>{
       console.log(senderid,receiverid,text);
        const user=getUser(receiverid);
        // console.log("SENDING GET")
        if(user?.socketid){
            console.log("SEND")
        io.to(user.socketid).emit("getmessage",{
            senderid,
            text
        })
    }
    })

    socket.on("disconnect",()=>{
        console.log("User disconnected");
        removeuser(socket.id);
        io.emit("getusers",users);

    })
    // io.to(si).emit("Welcome","Hello this is socket server");
})
