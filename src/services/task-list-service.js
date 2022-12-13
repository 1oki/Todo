import database from "../db/firebase-config";
import { getDatabase, ref, push, get, remove, update } from "firebase/database";

const db = database;

export default class TaskListService {  

    getDbSnapshot = () => get(ref(db,'taskList/'))
        .then((snapshot) => {
            if (snapshot.exists()) {
                return snapshot.val()
            } else {
                console.log("No data available");
            }
        })
        .catch((error) => {
            console.error(error);
        });

    addTaskToDb(title, status = 'todo') {

        const taskLiskRef = ref(db, 'taskList/');
        const newTaskRef = push(taskLiskRef)
        const newTaskRefKey = newTaskRef.key;
        const newTaskContent = {
            title: title,
            status: status,
        }
        const newTask = {}
        newTask[newTaskRefKey] = newTaskContent
        
        update(taskLiskRef, newTask)
        return newTaskRefKey;
    }

    removeTaskFromDb = async (key) => {
        const taskLiskRef = ref(db, 'taskList/' + key);
        return await remove(taskLiskRef)
    };

    updateTaskStatus = async (key, newStatus) => {
        const taskLiskRef = ref(db, 'taskList/' + key)
        return await update(taskLiskRef, {
            status: newStatus
        })
    }
   
}