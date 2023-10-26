//Данные для поста
let post = [
    { id: 1, message: "Hi, how are you?", likeCount: 15 },
    { id: 2, message: "I am fine", likeCount: 12 },
    { id: 3, message: "Dabudi", likeCount: 2 },
    { id: 4, message: "Dabudai", likeCount: 25 },
  ]
//Данные для диалогов 
  let dialogs = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrew" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Sasha" },
    { id: 5, name: "Viktor" },
    { id: 6, name: "Valera" },
  ]
//Данные для Сообщений 
  let message = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is you it-kamasutra" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yoo2" },
    { id: 5, message: "Yoo3" },
    { id: 6, message: "Yoo4" },
  ]
//Объект содержащий все данные
  let state = {
    posts: post,
    dialogs: dialogs,
    message: message
  }

export default state