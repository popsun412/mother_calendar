import { atom } from 'recoil'

export const certifyLockerState = atom({
    key: 'certifyLockerState',
    default: [],
})

export const selectedLockerState = atom({
    key: 'selectedLockerState',
    default: null,
})