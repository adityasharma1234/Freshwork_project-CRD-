import {
    db
} from './data.mjs';
let info= new db()
const startPromise = new Promise(async (resolve, reject) => {
    await info.start(process.argv[2])
        .then((resp) => {
            resolve(true)
})
        .catch((error) => {
            reject(false)})});
let sample_create = {
    "A": {
        full_name: 'Aditya_Sharma'
    },
    "B": {
        Age: '21'
    },
    "C": {
        course: 'Btech'
    },
}
let r = ['A', 'B', 'C',]
let d = ['A', 'C']
startPromise.then(async (res) => {
    for (let each in sample_create) {
        info.create(each, sample_create[each]).then((res) => {}).catch((error) => {})
    }
    for (let each in r) {
        info.read(r[each]).then((res) => {}).catch((error) => {})
    }
    for (let each in d) {
        info.delete(d[each]).then((res) => {}).catch((error) => {})
    }
    for (let each in r) {
        info.read(r[each]).then((res) => {}).catch((error) => {})
    }
})
.catch((error)=>{})
