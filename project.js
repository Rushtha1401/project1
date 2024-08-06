const chatbody = document.querySelector(".chat-body");
const textinput = document.querySelector("#txtip");
const send = document.querySelector(".send");
send.addEventListener("click",()=>renderUserMessage());
textinput.addEventListener("keyup",(event)=>{   
    if(event.keyCode===13){ //Pressing ENTER key to send
        renderUserMessage();
    }
});
const renderUserMessage=()=>{
    const userInput=textinput.value;
    renderMesEle(userInput,"user");
    textinput.value="";  //to clear the message once we send it
    setTimeout(()=>{
        renderChatBotResponse(userInput);
        setscrollPos();
    },600);
};
const renderChatBotResponse=(userInput)=>{
    const res=getChatBotResponse(userInput);
    renderMesEle(res);
};
const renderMesEle=(txt,type)=>{
    let className="user-message";
    if(type!=='user'){
        className="chatBotMessage";
    }
    const messageElement=document.createElement("div");
    const txtNode=document.createTextNode(txt);
    messageElement.classList.add(className);
    messageElement.append(txtNode);
    chatbody.append(messageElement);
};
const getChatBotResponse = (userInput)=>{
    return responseObj[userInput.toLowerCase()] || "Sorry...Please try something else";
};
const setscrollPos=()=>{
    if(chatbody.scrollHeight>0){
        chatbody.scrollTop = chatbody.scrollHeight; // Auto-scroll to the bottom

    }
};