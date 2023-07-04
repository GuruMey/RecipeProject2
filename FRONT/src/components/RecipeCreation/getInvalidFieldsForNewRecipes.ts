export default function (formData: any): string[] {
    const errors: string[] = []

    if (typeof formData.title !== 'string' || formData.title.length < 3 || formData.title.length > 150) {
        errors.push('title')
    }

    if (formData.description.length > 300) {
        errors.push('description')
    }

    if (typeof formData.time !== 'number' || formData.time < 0 || formData.time > 1000) {
        errors.push('time')
    }

    if (formData.ingredients.length <1 || formData.ingredients.length > 50) {
        errors.push('ingredients')
    }

    if (formData.steps.length <1 || formData.steps.length > 50) {
        errors.push('steps')
    }

    if (formData.tags.length <1 || formData.tags.length > 3) {
        errors.push('tags')
    }

    return errors
}