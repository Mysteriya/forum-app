export class ClassIsLoading {
    async isLoading(data: any){
        return {
            ...data,
            isMount: true
        }
    }
}