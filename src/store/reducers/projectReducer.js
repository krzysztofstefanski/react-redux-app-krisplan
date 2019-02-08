const initState = {

    projects: [
        {id:1,title:'hel me find dog',content:'bla bla bla'},
        {id:1,title:'hel me find cat',content:'bla bla bla'},
        {id:1,title:'hel me find frog',content:'bla bla bla'}
]

}

const projectReducer = (state = initState, action)=>{
    switch(action.type){
        case 'CREATE_PROJECT':
        console.log('created project', action.project)
    }
    return state

}

export default projectReducer