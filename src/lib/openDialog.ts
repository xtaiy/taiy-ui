import Dialog from './Dialog.vue'
import { createApp ,h} from 'vue'
export const openDialog=(options)=>{
    const {title,content,f1,f2}=options
    const div=document.createElement('div')
    document.body.appendChild(div)
    const close=()=>{
        app.unmount()
        div.remove()
    }
    const app=createApp({
        render(){
            return h(
                Dialog,
                {
                    visible:true,
                    'onUpdate:visible':(newVisible: any)=>{
                        if(newVisible===false){
                            close()
                        }
                    },
                    ok:f1,cancel:f2
                },
                {
                    title,content
                }
            )
        }
    })
    app.mount(div)
}