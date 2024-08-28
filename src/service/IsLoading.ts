export class ClassIsLoading {
    async isLoading(data: any, isMount: boolean){
        return {
            ...data,
            isMount: true
        }
    }
}