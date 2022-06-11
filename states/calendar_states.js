import { atom } from 'recoil'

export const selectedDateState = atom({
    key: 'selectedDateState',
    default: new Date(),
})

export const selectedTypeState = atom({
    key: 'selectedTypeState',
    default: 1,
})