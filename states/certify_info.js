import { atom } from 'recoil'

export const certifyUploadImageState = atom({
    key: 'certifyUploadImageState',
    default: { image_file: null, preview_URL: '' },
})

export const certifyRviewState = atom({
    key: 'certifyRviewState',
    default: "",
})