export class ClassUser {
    userID:string = ''

    chars = [
        'a','A','b','B','c',
        'C','d','D','e','E',
        'f','F','g','l','L',
        'm','M','n','N','o',
        'O','p','P',"1","2",
        "3","4","5","6","7",
        "8","9","0",
    ]

    acceptName(name: string){
        let i = 0
        for(i; i <= 9; i++){
            this.userID += this.chars[Math.floor(Math.random() * this.chars.length)]
        }

        window.localStorage.setItem('forumUser', JSON.stringify({
            name: name,
            userID: this.userID
        }))
    }
}