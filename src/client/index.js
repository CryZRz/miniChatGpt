async function sendMessage(message){
    try{
        const response = await fetch("/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({message})
        })

        return await response.json()
    }catch(err){
        alert(err)
    }
}

document.addEventListener("alpine:init",  e  => {
    Alpine.data("chatApp",  e => ({
        inputMessage: "",
        chats: [],
        
        async sendMessage(){
            if(this.inputMessage.trim() == ""){
                return alert("Debes escribir un menaje")
            }

            this.chats.push({
                message: this.inputMessage,
                isOwn: true
            })

            const messageBackend = await sendMessage(this.inputMessage)
            console.log(messageBackend)
            this.chats.push({
                message: messageBackend[0].response,
                isOwn: false
            })
        }   

    }))
})