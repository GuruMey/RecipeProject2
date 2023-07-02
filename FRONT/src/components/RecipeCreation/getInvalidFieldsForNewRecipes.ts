export default function (formData: any): string[] {
    const errors: string[] = []

    if (typeof formData.title !== 'string' || formData.title.length < 3 || formData.title.length > 150) {
        errors.push('title')
    }

    if (typeof formData.description !== 'string' || formData.description.length < 3 || formData.description.length > 500) {
        errors.push('description')
    }

    if (typeof formData.preparation !== 'number' || formData.preparation.length < 3 || formData.preparation < 0) {
        errors.push('preparation')
    }


    return errors



}