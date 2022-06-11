const state = ()=>({
    buku:[]
})
const mutations = {
    setBuku(state,params){
        state.buku.push(params)
    },
    updateStatusBuku(state,params){
        console.log(params)
        const index = state.buku.findIndex(
            (buku)=>{
                return buku.id==params.index
            }
        ) 
        /*Utk menemukan id item dari localstoragenya, dengan menyamakan id buku 
        dengan id dari yg dikirim actions
        */
        console.log("data Buku : ", index)
        state.buku[index].isRead = params.isRead
    },
    deleteBuku(state,params){
        //Cara 1
        const index = state.buku.findIndex(
            (buku)=>{
                return buku.id === params
            }
        )

        state.buku.splice(index,1)

        /*
        Cara 2
        state.buku = state.buku.filter(
            (data)=>{
                return data.id!==params
            }
            )

        */


    }
}
const actions = {
    addBuku(store,params){
        store.commit("setBuku",params)
    },
    updateBuku(store,params){
        store.commit("updateStatusBuku",params)
    },
    deleteBuku(store,params){
        store.commit("deleteBuku",params)
    }
}
export default { state,mutations,actions }