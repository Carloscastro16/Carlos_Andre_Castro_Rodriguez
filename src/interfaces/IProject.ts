import type { Ref } from "vue"

export interface IProject {
    id: Ref<number>
    title: Ref<string>
    priority: Ref<string> // Puede ser "alta", "media" o "baja"
    completed: Ref<boolean>
}
