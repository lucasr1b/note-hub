export const createPath = (name: string) => {
    let path = name.toLowerCase().replaceAll(' ', '-');

    path = (path.length > 24 ? path.substring(0, 23) : path);

    return (path.substring(path.length - 1) === '-' ? path.slice(0, -1) : path);
}