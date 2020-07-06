const users = [
    {id: '1', name: 'Vinicius', email: 'vini@saveg.com'},
    {id: '2', name: 'Vinicius Savegnago', email: 'vini2@saveg.com'}
]

export class User { 
    static findAll(): Promise<any> {

        return Promise.resolve(users)

    }

    static findById(id: string): Promise<any> {

        return new Promise(resolve => {
            const filtered = users.filter(user => user.id === id)

            let user

            if(filtered.length > 0) {
                user = filtered[0]
            }

            resolve(user)
        })

    } 
}