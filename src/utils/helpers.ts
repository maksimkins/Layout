export const mapTags = (strTags: string) => {
    if(!strTags)
    {
        return '';
    }

    const tags = strTags.split(',')

    const serializedTags = tags.map((item) => {
        return `#${item.toLowerCase().trim()}`
    })

    return serializedTags.join(' ');
}