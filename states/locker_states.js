import { atom } from 'recoil'

export const bookshelfActiveState = atom({
    key: 'bookshelfActiveState',
    default: 1,
})

export const edutoolActiveState = atom({
    key: 'edutoolActiveState',
    default: 1,
})