
export type Quiz ={
    name:string,
    playTime:string,
    questions:Question[]
}
export type Question ={
    question:string,
    marks:number,
    options:Option[]
}

export type Option = {
    answer:string,
    isRight:boolean
}

