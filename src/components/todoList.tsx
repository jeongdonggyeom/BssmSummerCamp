import React from "react";
import { todoContext } from "../store/todo";

let count = 0;
const TodoList = () =>{
    const context = React.useContext(todoContext);

    const tododel = (el: Element)=>{
        el.remove();
    }
    const setSu = (el: any)=>{
        console.log(el.id)
        const spanT = document.createElement('span');
        spanT.setAttribute('id', `sp${el.id}`);
        if(el.status === false){
            spanT.innerHTML = "<span style='color: rgb(114, 227, 114); padding-right: 30px;'>완료　</span>"
            el.status = true;
        }
        else{
            spanT.innerHTML = "<span style='color: red; padding-right: 30px;'>미완료</span>"
            el.status = false;
        }
        const spEl = document.getElementById(`sp${el.id}`);
        const elEl = document.getElementById(`del${el.id}`);
        spEl?.remove();
        elEl?.prepend(spanT);
    }

    React.useEffect(()=>{   
        if(context.todo !== undefined && context.todo !== '') {
            const el = document.getElementById("inner");
            const text = document.createElement('div');
            text.setAttribute('id', `del${count}`);
            const save = text;
            const spOb = {
                id: count,
                status: false
            };
            text.innerHTML = `<span id="sp${count}" style="color: red; padding-right: 30px;">미완료</span>
            <span style='color: black; max-width: 370px;'>${context.todo}</span>
            <div style='display: flex; align-items: center; position: absolute; width: 97%; justify-content: right;'>
            <span id="dele${count+1}" style='color: rgb(239, 174, 174); font-size: 12px;'>삭제하기</span>
            <input type="checkbox" id="st${count}" />
            </div>
            `
            el?.appendChild(text);

            const del = document.getElementById(`dele${count+1}`);
            del?.addEventListener('click', ()=>{tododel(save)});

            const inEl = document.getElementById(`st${count}`);
            inEl?.addEventListener('change', ()=>{
                setSu(spOb);
            });

            count++;
        }
    }, [context]);

    return(
        <div className="todo-root">
            <h1 className="todo-h1">TODO LIST</h1>
            <div id="inner"></div>
        </div>
    )
}
export default TodoList;