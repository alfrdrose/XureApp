import {create} from 'zustand'

const FakeAccounts = [
    {username: 'admin', password: '123'},
    {username: 'alfred', password: 'lili'},
    {username: 'ashyelili', password: 'prettygirl'}
]

const useAuthStore = create((set) => ({
    username:'',
    password: '',
    isLoggedin: false,

    login: (name, pass) => {
        const foundUser = FakeAccounts.find(
            (acc) => acc.username === name && acc.password === pass
        )

        if (foundUser) {
            set ({
                username: foundUser.username,
                password: foundUser.password,
                isLoggedin: true
            })
            return true
        } else {
            return false
        }
    },

    logout: () => set ({
        username: '',
        password: '',
        isLoggedin: false
    })
}))

export default useAuthStore